from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from textwrap import wrap

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.lines import Line2D
from matplotlib.patches import Patch


MARINE = "#142452"
MARINE_80 = "#435075"
MARINE_20 = "#D0D3DC"
CYAN = "#2EA1CF"
CYAN_20 = "#D5ECF7"
CYAN_10 = "#EAF5FB"
RED = "#C74444"
RED_SOFT = "#F8E7E7"
WHITE = "#FFFFFF"

OUTPUT_DIR = (
    Path(__file__).resolve().parents[1]
    / "public"
    / "graphics"
    / "wissen"
    / "technical-plots"
)


@dataclass(frozen=True)
class Copy:
    title: str
    subtitle: str
    estimate: str
    upper: str
    region: str
    example_pass: str
    example_fail: str
    x_label: str
    y_label: str
    requirement: str
    result_pass: str
    result_fail: str
    decision: str
    note: str


COPY = {
    "de": Copy(
        title="Nachweisentscheidung am Bq-Niveau",
        subtitle=(
            "Entscheidend ist die einseitig abgesicherte Lebensdauer "
            "am zulässigen Ausfallanteil q."
        ),
        estimate="Ist-Verhalten (aus Daten geschätzt)",
        upper="Obere einseitige 90-%-Konfidenzgrenze Fᵤ(t)",
        region="Einseitiger Vertrauensbereich: 0 ≤ F(t) ≤ Fᵤ(t)",
        example_pass="Beispiel A · Nachweis erbracht",
        example_fail="Beispiel B · Nachweis nicht erbracht",
        x_label="Lebensdauer t",
        y_label="Ausfallwahrscheinlichkeit F(t)",
        requirement="Bq,soll",
        result_pass="Bq,L ≥ Bq,soll",
        result_fail="Bq,L < Bq,soll",
        decision="Entscheidung bei q",
        note=(
            "Weibull-Modell mit beispielhaften Lebensdauerdaten; q = 10 %. "
            "Modell, Konfidenzniveau und Nachweisplan sind projektspezifisch festzulegen."
        ),
    ),
    "en": Copy(
        title="Demonstration decision at the Bq level",
        subtitle=(
            "The decision uses the one-sided confidence-bound life "
            "at the permitted failure fraction q."
        ),
        estimate="Field behaviour (estimated from data)",
        upper="Upper one-sided 90% confidence bound Fᵤ(t)",
        region="One-sided confidence region: 0 ≤ F(t) ≤ Fᵤ(t)",
        example_pass="Example A · Requirement demonstrated",
        example_fail="Example B · Requirement not demonstrated",
        x_label="Life t",
        y_label="Failure probability F(t)",
        requirement="Bq,req",
        result_pass="Bq,L ≥ Bq,req",
        result_fail="Bq,L < Bq,req",
        decision="Decision at q",
        note=(
            "Weibull model with illustrative lifetime data; q = 10%. "
            "Model, confidence level and demonstration plan must be defined for the project."
        ),
    ),
}


def fit_weibull(sample: np.ndarray) -> tuple[float, float]:
    """Fit a two-parameter Weibull model to complete lifetime observations."""
    values = np.asarray(sample, dtype=float)
    logs = np.log(values)

    def score(beta: float) -> float:
        powered = values**beta
        return 1.0 / beta + logs.mean() - (powered * logs).sum() / powered.sum()

    lower, upper = 0.2, 10.0
    for _ in range(80):
        middle = (lower + upper) / 2.0
        if score(middle) > 0:
            lower = middle
        else:
            upper = middle

    beta = (lower + upper) / 2.0
    eta = np.mean(values**beta) ** (1.0 / beta)
    return beta, eta


def weibull_cdf(time: np.ndarray, beta: float, eta: float) -> np.ndarray:
    return 1.0 - np.exp(-((time / eta) ** beta))


def build_curves() -> tuple[np.ndarray, np.ndarray, np.ndarray, float, float]:
    """Return an estimate and a bootstrap upper one-sided confidence bound."""
    rng = np.random.default_rng(24082026)
    sample = 4200.0 * rng.weibull(2.45, size=42)
    beta_hat, eta_hat = fit_weibull(sample)

    broad_time = np.linspace(0.0, 7000.0, 720)
    bootstrap_curves = []
    for _ in range(1200):
        resample = rng.choice(sample, size=sample.size, replace=True)
        beta_boot, eta_boot = fit_weibull(resample)
        bootstrap_curves.append(weibull_cdf(broad_time, beta_boot, eta_boot))

    estimate_broad = weibull_cdf(broad_time, beta_hat, eta_hat)
    upper_broad = np.quantile(np.asarray(bootstrap_curves), 0.90, axis=0)

    upper_target = 0.43
    x_max = float(np.interp(upper_target, upper_broad, broad_time))
    time = np.linspace(0.0, x_max, 520)
    estimate = np.interp(time, broad_time, estimate_broad)
    upper_bound = np.interp(time, broad_time, upper_broad)

    q = 0.10
    bq_lower = float(np.interp(q, upper_bound, time))
    bq_estimate = float(np.interp(q, estimate, time))
    return time, estimate, upper_bound, bq_lower, bq_estimate


def style_axis(axis: plt.Axes, copy: Copy, x_max: float) -> None:
    axis.set_xlim(0.0, x_max)
    axis.set_ylim(0.0, 0.46)
    axis.set_xlabel(copy.x_label, color=MARINE, fontweight="bold", labelpad=30)
    axis.set_ylabel(copy.y_label, color=MARINE, fontweight="bold", labelpad=12)
    axis.spines["top"].set_visible(False)
    axis.spines["right"].set_visible(False)
    axis.spines["left"].set_color(MARINE)
    axis.spines["bottom"].set_color(MARINE)
    axis.spines["left"].set_linewidth(1.4)
    axis.spines["bottom"].set_linewidth(1.4)
    axis.tick_params(colors=MARINE_80, labelsize=9)
    axis.grid(axis="y", color=MARINE_20, linewidth=0.8, alpha=0.7)
    axis.set_facecolor(WHITE)


def draw_panel(
    axis: plt.Axes,
    copy: Copy,
    time: np.ndarray,
    estimate: np.ndarray,
    upper_bound: np.ndarray,
    bq_lower: float,
    requirement: float,
    passed: bool,
) -> None:
    style_axis(axis, copy, float(time[-1]))

    axis.fill_between(
        time,
        0.0,
        upper_bound,
        color=CYAN_20,
        alpha=0.72,
        linewidth=0,
        zorder=1,
    )
    axis.plot(time, upper_bound, color=CYAN, linewidth=2.6, zorder=3)
    axis.plot(time, estimate, color=MARINE, linewidth=3.2, zorder=4)

    q = 0.10
    axis.axhline(q, color=MARINE_80, linewidth=1.6, linestyle=(0, (4, 4)), zorder=2)
    axis.text(
        time[-1] * 0.02,
        q + 0.012,
        "q = 10 %" if copy is COPY["de"] else "q = 10%",
        color=MARINE_80,
        fontsize=9,
        fontweight="bold",
    )

    axis.vlines(
        requirement,
        0.0,
        q,
        color=MARINE_80,
        linewidth=1.7,
        linestyle=(0, (3, 3)),
        zorder=5,
    )
    axis.vlines(
        bq_lower,
        0.0,
        q,
        color=CYAN,
        linewidth=2.2,
        linestyle=(0, (3, 2)),
        zorder=5,
    )
    axis.scatter(
        [bq_lower],
        [q],
        s=60,
        color=CYAN,
        edgecolor=WHITE,
        linewidth=1.4,
        zorder=6,
    )

    axis.text(
        requirement,
        -0.045,
        copy.requirement,
        transform=axis.get_xaxis_transform(),
        ha="center",
        va="top",
        color=MARINE_80,
        fontsize=9,
        fontweight="bold",
    )
    axis.text(
        bq_lower,
        -0.095,
        "Bq,L",
        transform=axis.get_xaxis_transform(),
        ha="center",
        va="top",
        color=CYAN,
        fontsize=9,
        fontweight="bold",
    )

    status_color = CYAN if passed else RED
    status_background = CYAN_10 if passed else RED_SOFT
    axis.set_title(
        copy.example_pass if passed else copy.example_fail,
        loc="left",
        color=status_color if not passed else MARINE,
        fontsize=12,
        fontweight="bold",
        pad=16,
        bbox={
            "boxstyle": "round,pad=0.42",
            "facecolor": status_background,
            "edgecolor": "none",
        },
    )

    result_text = copy.result_pass if passed else copy.result_fail
    axis.text(
        0.97,
        0.075,
        result_text,
        transform=axis.transAxes,
        ha="right",
        va="center",
        color=status_color,
        fontsize=10,
        fontweight="bold",
        bbox={
            "boxstyle": "round,pad=0.5",
            "facecolor": status_background,
            "edgecolor": "none",
        },
        zorder=7,
    )
    axis.annotate(
        copy.decision,
        xy=(bq_lower, q),
        xytext=(bq_lower + time[-1] * 0.10, q + 0.075),
        color=MARINE_80,
        fontsize=9,
        fontweight="bold",
        arrowprops={"arrowstyle": "-", "color": MARINE_80, "linewidth": 1.2},
    )


def render(locale: str, mobile: bool) -> None:
    copy = COPY[locale]
    time, estimate, upper_bound, bq_lower, bq_estimate = build_curves()

    requirement_pass = bq_lower * 0.78
    requirement_fail = (bq_lower + bq_estimate) / 2.0

    if mobile:
        figure, axes = plt.subplots(2, 1, figsize=(8.0, 14.95), dpi=150)
        figure.subplots_adjust(left=0.15, right=0.95, top=0.80, bottom=0.095, hspace=0.50)
    else:
        figure, axes = plt.subplots(1, 2, figsize=(16.0, 8.0), dpi=150)
        figure.subplots_adjust(left=0.075, right=0.97, top=0.72, bottom=0.18, wspace=0.24)

    figure.patch.set_facecolor(WHITE)
    figure.suptitle(
        copy.title,
        x=0.5,
        y=0.982,
        color=MARINE,
        fontsize=22 if mobile else 24,
        fontweight="bold",
    )
    figure.text(
        0.5,
        0.925 if mobile else 0.91,
        copy.subtitle,
        ha="center",
        va="center",
        color=MARINE_80,
        fontsize=11 if mobile else 12,
    )

    legend_handles = [
        Line2D([0], [0], color=MARINE, linewidth=3.2, label=copy.estimate),
        Line2D([0], [0], color=CYAN, linewidth=2.6, label=copy.upper),
        Patch(facecolor=CYAN_20, edgecolor="none", alpha=0.72, label=copy.region),
    ]
    figure.legend(
        handles=legend_handles,
        loc="upper center",
        bbox_to_anchor=(0.5, 0.885 if mobile else 0.855),
        ncol=1 if mobile else 3,
        frameon=False,
        fontsize=9 if mobile else 10,
        labelcolor=MARINE,
        handlelength=3.0,
    )

    draw_panel(
        axes[0],
        copy,
        time,
        estimate,
        upper_bound,
        bq_lower,
        requirement_pass,
        True,
    )
    draw_panel(
        axes[1],
        copy,
        time,
        estimate,
        upper_bound,
        bq_lower,
        requirement_fail,
        False,
    )

    note = "\n".join(wrap(copy.note, width=82)) if mobile else copy.note
    figure.text(
        0.5,
        0.025 if mobile else 0.045,
        note,
        ha="center",
        va="center",
        color=MARINE_80,
        fontsize=7.5 if mobile else 9,
    )

    suffix = "-mobile" if mobile else ""
    output = OUTPUT_DIR / f"reliability-demonstration-bq-decision-{locale}-v2{suffix}.png"
    figure.savefig(output, facecolor=WHITE, dpi=150)
    plt.close(figure)
    print(f"Created {output}")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for locale in ("de", "en"):
        render(locale, mobile=False)
        render(locale, mobile=True)


if __name__ == "__main__":
    main()
