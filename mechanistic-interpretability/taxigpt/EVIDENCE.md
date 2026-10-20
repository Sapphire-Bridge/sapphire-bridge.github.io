# Method applied to TaxiGPT — evidence notes

## Data availability

The downloadable snapshot contains aggregate results and provenance; the route-level measurements and verification code for this follow-up are not included in this website release.

Website case study, prepared locally on 15 October 2026 from the existing 14 October evidence snapshot. No new experiment, fit, simulation, case selection, or model call was performed to create it. Publication is separate from local preparation.

## Primary evidence: v0.4 confirmation

Source project: `causal-decidability/applications/beckmann-2609.21748`.

- Contract: `science_v04/CONTRACT.json`.
- Canonical result: `science_v04/results/confirmation.json`.
- SHA256 of canonical result: `82c5f9387ce0fecf48e0ffff1aef4c52b0e997dad0ee954d6ccc74b15e40cb52`.
- Qualification and verification: `science_v04/results/confirmation-audit.json`.
- Interpretation: `science_v04/results/INTERPRETATION_DE.md`.
- `evidence.json` is a selected, unmodified-value snapshot of the canonical result and contract, with no individual route inputs or neural tensors.

The study uses the GPT-2 XL TaxiGPT random-walk checkpoint (48 blocks, width 1600), FP32 eager attention. Current-node decoding is measured at layer 18. The sample comprises 512 whole, complete 27–34-move routes selected before their K/V outcomes from 76,135 eligible deduplicated held-out routes, without replacement. All endpoints are at their goal. This limits inference to that fixed corpus and instrument, rather than transit navigation or new maps.

The position-subspace intervention replaces the position-related component of past states with the corresponding move-centroid component to compute edited K/V. Historical residual computation stays fixed; the current token recomputes. The local fit rebuilt centroids from 4,000 training routes. This is not an exact numerical replication of the authors' original centroids.

| Condition | Correct current-node decode |
|---|---:|
| Unedited | 512/512 |
| K and V edited | 80/512 |
| K only edited | 248/512 |
| V only edited | 125/512 |
| Random-subspace control, K and V edited | 511/512 |

The main bars show these sample proportions, rounded to one decimal percent. They are descriptive. The decision is based on **paired binary correctness disagreements**, not distances between these mean bars.

## Four declared rules

For every route, U denotes unedited correctness and KV joint-edit correctness. Predictions for (K-only, V-only) are:

| Rule | K-only prediction | V-only prediction |
|---|---|---|
| K alone explains it | KV | U |
| V alone explains it | U | KV |
| Both edits are required | U | U |
| Either edit is sufficient | KV | KV |

These are operational response rules for the intervention effect. They do not assign exclusive semantic content to keys or values.

Each rule must have mismatch rates no greater than 10% for both predictions. Eight exact hypergeometric intervals share a 5% error budget by Bonferroni correction. A candidate is excluded when either mismatch interval has a lower bound above 10%. Adequacy would require both upper bounds at or below 10%; intermediate uncertainty is not exclusion or adequacy.

| Paired mismatch | Count | Rate | Simultaneous interval |
|---|---:|---:|---:|
| K-only vs unedited | 264/512 | 51.56% | 45.46–57.64% |
| K-only vs joint | 190/512 | 37.11% | 31.35–43.14% |
| V-only vs unedited | 387/512 | 75.59% | 70.06–80.57% |
| V-only vs joint | 55/512 | 10.74% | 7.34–14.98% |

All four complete rules are excluded. V-only versus joint by itself remains unresolved relative to the 10% tolerance: it does not establish equivalence or a difference exceeding that tolerance. The “V alone” rule is excluded because K-only does not preserve baseline correctness.

Baseline, full-effect, random-control and technical gates passed. The result identifies no new mixed, context-dependent or unique natural mechanism. Such accounts remain possible. It neither refutes a map representation nor demonstrates general methodological superiority.

## Separate development examples

These illustrate additional methodological checks. They are **not independent confirmation on 16 new families**, and are not combined with the 512-route study.

1. v0.5.3: current location readout switches to the donor in both directions for 16/16 known families; full two-move P_id functional qualification passes in 0/16. Source: `results/v053-development-20261013/development_summary.json` and the accompanying `ERGEBNIS_V053_DE.md`. A failed candidate channel does not establish absence of location use.
2. h24 / single-position K/V diagnoses: full h24 residual donor swap has negligible mean follow-up transport. The all-layer single-position K/V swap gives D_ALL = 0.3093547, nominal development interval [0.1632334, 0.4611080], versus mean natural donor gap 1.4240471. The ratio of means is 21.72%, descriptive. Source: `results/kv-position-v011-20261014/summary.json` and `ERGEBNIS_KV_EINE_POSITION_V011_DE.md`; h24 report `ERGEBNIS_H24_DIAGNOSE_V02_FORTSETZUNG_DE.md`. Effects vary strongly, and jointly illegal successor-move mass rises by about 5.60 percentage points. These are different counterfactuals, not a matched content/dose or layer-isolation comparison, and not evidence of natural control.

## Published reference

Beckmann, Queloz & Freitas, *World Modeling in Transformers*, arXiv:2609.21748v1, especially §2.2 and Appendix C.1: https://arxiv.org/html/2609.21748v1#A3.SS1

The graphic shows the local follow-up study's values. Its route/K/V drawing is a computational schematic, not a recovered circuit or empirical geographic map.
