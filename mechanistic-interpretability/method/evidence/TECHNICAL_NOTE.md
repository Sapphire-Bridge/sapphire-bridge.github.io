# Gemma: which explanations survive the patch?

Technical companion to the short Sapphire Bridge case study. Prepared 2026-10-15 from existing local evidence; this presentation adds no model forwards. All links below are relative so the note can be read alongside its evidence files on GitHub.

**Result:** `LIMITED_EXCLUSION_NO_CONFIRMED_EFFECT`. Five declared local prediction classes were excluded; four remained open. This is a development result at one intervention site, not identification of a natural mechanism. The subsequent comparison with ordinary patch analysis is explicitly post hoc and exploratory.

## 1. Question and intervention

Gemma judges a length relative to a comparison standard. Standard transfer would preserve the recipient value while applying the donor standard. Copying the donor answer would instead reproduce the donor profile for both recipients.

| Prompt | Value | Standard |
|---|---:|---:|
| Donor | 32 cm | 10 cm |
| Recipient 1 | 12 cm | 80 cm |
| Recipient 2 | 96 cm | 80 cm |

The operator replaces the full residual vector after text block 17 (index 16), at the last prompt token. Recipient text remains unchanged. Replacement of the final residual is a positive control only.

- Model: Gemma-3-4b-it, revision `093f9f388b31de276ce2de164bdc2081324b9767`.
- D1: 20 development families, four rotations, 1,680 forwards, one fixed site.
- Four-label conditioned readout: tiny, small, large, huge, with ordinal positions 0, 1/3, 2/3, 1.
- The run's signature was explicitly delegated to Codex by Felix. It was not an independent human signature.

## 2. Rival predictions and decisions

| Class | Local prediction | D1 decision |
|---|---|---|
| S | Recipient value evaluated under the donor standard: 12/10 and 96/10 | Excluded |
| P | Original recipient profile within the declared tolerance: 12/80 and 96/80 | Open |
| C/K | Donor answer or entire donor-context transfer: 32/10 for both; these remain an alias group | Excluded |
| V | Donor value under the recipient standard | Excluded |
| M | Mixture of S and C/K with a globally bound parameter | Excluded |
| U+ | General stochastic shift toward larger labels | Open |
| U− | General stochastic shift toward smaller labels | Open |
| R | A common recipient-independent profile | Excluded |
| H | Shrinkage toward the mean recipient profile | Open |

“Open” means not excluded under this rule, not verified or uniquely supported. Five exclusions do not establish that five mechanisms are globally absent. The class definitions, intervention site, menu and readout bound the conclusions.

## 3. Measurement, controls and decision rule

All 20 families passed joint qualification. Identity and final-residual positive controls passed. Native, active and disturbance label masses were checked. Replay and the separate independent D1 audit passed. No weak family was removed.

The frozen rule uses W1 profile distances with label spacing 1/3 and the maximum over both recipients in each family. Tolerance τ = 1/12, numerical allowance ν = 0.0001. With X = max(0, L − ν), only the final product Π(1/4 + 9X) is compared with 200, including the frozen numerical safety margin. Weak families would contribute X = 0. M and H use conservative family envelopes of global parameter classes, not independently fitted parameters for each family.

The disturbance test compares the active patch with the nearest of four fixed norm- and dose-matched disturbances, using the family-level maximum-recipient W1 distance. It did not pass. This is not a test of equality with the signed mean disturbance effect: small descriptive differences from the mean can coexist with failure of this tolerance-based distance test.

D1 therefore did not satisfy the full development-success rule or the semantic development-signal condition. Standard transfer was itself excluded. No confirmation phase followed. There is no demonstrated natural use, necessity, complete mediation or unique mechanism.

## 4. Descriptive profile means

These are arithmetic means of the 20 archived family profiles. The disturbance row also averages four disturbances. They are display summaries, not inputs to a new decision rule. Tiny nonzero segments were visually negligible in the longer web presentation.

| Recipient | Profile | tiny | small | large | huge |
|---|---|---:|---:|---:|---:|
| R1 | Native | 0.7623635853 | 0.2376339548 | 2.512801452e-07 | 2.208587076e-06 |
| R1 | Patched | 0.6955383023 | 0.3044582762 | 4.415311472e-07 | 2.9800019e-06 |
| R1 | Mean disturbance | 0.7738179791 | 0.2261786248 | 2.297039166e-07 | 3.16642978e-06 |
| R2 | Native | 1.781071078e-10 | 0.01532775898 | 0.984623972 | 4.826879905e-05 |
| R2 | Patched | 5.061198281e-10 | 0.01596140181 | 0.9839957027 | 4.289499497e-05 |
| R2 | Mean disturbance | 2.073030765e-10 | 0.01528319401 | 0.9846663817 | 5.042406056e-05 |

The post-hoc paired family bootstrap used 20,000 common resamples, seed 20261015. Its intervals are approximate, descriptive and non-simultaneous; they do not extend the frozen D1 inference.

| Signed ordinal contrast | Mean | Descriptive interval |
|---|---:|---|
| R1 active − native | +0.022276 | [0.018153, 0.026260] |
| R2 active − native | −0.000213 | [−0.000348, −0.000100] |
| R1 active − mean disturbance | +0.026093 | [0.020364, 0.032060] |
| R2 active − mean disturbance | −0.000229 | [−0.000437, −0.000063] |

The small measured changes do not imply that P must be excluded under the larger predeclared tolerance. Nor does the failed disturbance test imply every signed contrast is zero.

## 5. What the comparison adds—and where it ties

A careful ordinary patch analysis already reports direction, effect size, profiles, controls and uncertainty. Full profiles can already qualitatively contradict large predicted transfer or copy effects. This insight is not exclusive to causal decidability.

The explicit bank adds a defined set of questions: which specified local predictions fail, which remain open, and whether the experimental menu can separate the intended alternatives before intervention. It does not turn an unspecified rival into a known error of another researcher.

An independent comparator given the same bank and decision rule reproduced all ten decisions (nine classes plus disturbance test), with maximum loss discrepancy 1.67e-16. This is a tie and a check of the same calculation, not a comparison of two different inference procedures. No superiority in decision arithmetic or comprehensive SOTA benchmark is established. There is no known true Gemma mechanism here against which identification accuracy could be scored.

## 6. Design history and disclosed revisions

| Stage | Native forwards | Joint qualification |
|---|---:|---|
| First two-donor menu | 3,680 | 0/757 blocks qualified in at least 18/20 families |
| Final two-donor revision | 4,880 | 0/12,421 blocks qualified in at least 18/20 families |
| Single-donor D0 | 3,200 | All 20 fresh development families qualified |
| Single-donor D1 | 1,680 | All 20 jointly qualified; limited local exclusions |

The two-donor patch stages did not proceed. This demonstrates failure of the tested menus under their gates, not impossibility of the general question or a measured saving in researcher time. A comparator with the same preflight can make the same stopping decision.

For the single-donor menu, 50→80 was replaced by 10→80 and S–P separation was explicitly required. One curve gate was then revised with knowledge of earlier developmental reversals: the absolute per-curve reversal limit was removed, while at least 31/34 non-reversed adjacent steps and no reversal between required anchors remained mandatory. This was disclosed and fixed before the subsequent D0/D1 measurements. It is an iterative development history, not a data-independent confirmation protocol.

Historical audit caveat: two-donor v2 replay against the changed live core HEAD was formally blocked. Replay against the pinned files and the independent audit passed. D1's own replay and independent audit passed.

Structural illustration only: with the same value and otherwise matching context in donor and recipient, the standard-transfer anchor can coincide with the donor prompt. Standard transfer and answer copy then make identical predictions. A recovery score cannot separate them. The actual D1 menu uses different values.

## 7. Evidence and reproduction

- [Full exploratory comparison report](REPORT.md): findings, comparator, uncertainty and reproduction commands.
- [Claim audit](CLAIMS.md) and [comparison protocol](PROTOCOL.md).
- [Numerical snapshot and source SHA-256 bindings](snapshot.json), [provenance notes](EVIDENCE.md).
- [Results](results.json), [family profiles](family_profiles.csv), [family metrics](family_metrics.csv), [metric summaries](metric_summary.csv), [rival comparison](rival_comparison.csv), [family losses](rival_family_losses.csv).
- [Design-history figure](figure_1_design_history.svg) and [effects-and-rivals figure](figure_2_effects_and_rivals.svg).

The report and claim audit are unchanged copies from `semantic_rival_v4_1_E1F/docs/analyses/gemma_comparison_20261015/`. Historical D1 audit bindings are carried in the snapshot; the web presentation does not rerun inference or the tensor audit. This folder is a presentation/evidence export, not the complete raw-data experiment environment. Reproduction commands in REPORT.md require the original research repository. The linked [analysis provenance](provenance.json) and [claim table](claims.csv) are also included as byte-identical source copies. The original scripts and large measurement archives remain in the research repository.

The older BOS/readout diagnostic is a separate measurement-validity case: the frequently cited 0.04% was 0.0432728775% **mean** label mass for eight historical sentinel texts, not the median of an entire repository. It does not establish BOS as the sole cause. See REPORT.md for the qualified statement.

## Defensible summary

On identical development data, an explicit rival bank complements the description of small patch changes with a traceable, tolerance-bound set of local prediction exclusions. The case also documents separability checks before patching. A comparator with the same bank and rule reaches identical decisions. The study does not establish superior inference arithmetic or identify a unique natural mechanism.
