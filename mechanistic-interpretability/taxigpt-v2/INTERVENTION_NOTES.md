# Same past steps, different component

The v0.4 K-only, V-only and joint conditions use the **same past token positions**. They do not compare different geographical intervention sites. This note documents a read-only check of the existing configuration, frozen executed code and confirmation records. No model was rerun.

## What was edited

The complete input contains origin and goal tokens followed by the route's moves. With zero-based indexing and total token count t, the mask is `2..t−2` inclusive: all earlier move tokens. Origin (0), goal (1) and the final move (t−1) are excluded. Thus the existing 27–34-move routes have 26–33 edited past move positions. The drawing compresses this full history into a few marked intersections.

At block inputs 1–17, the runner changes the fitted position-subspace component around the mean for the corresponding move. It then recomputes keys and values from each changed historical state. Historical residual trajectories remain fixed; the edit does not propagate through the earlier tokens. The final token is recomputed with its original input and positional embedding, and location decoding is measured at L18.

One pair of clean/edited history caches supplies every condition:

| Condition | Keys | Values | History mask |
| --- | --- | --- | --- |
| Unedited | Clean | Clean | Same route |
| K + V | Edited | Edited | 2..t−2 |
| K only | Edited | Exact original V | 2..t−2 |
| V only | Exact original K | Edited | 2..t−2 |

The untouched component is reused by tensor identity. This is a component comparison at shared positions, not a test of changing the prefix length or the absolute intervention position. Route length naturally varies within the eligibility range; it was not independently manipulated to isolate these effects.

## What the K/V labels mean

“K helps determine where attention looks” and “V supplies what attention reads” are simplified descriptions of attention's computational roles. The query works with the keys to determine weights; values supply the vectors combined by attention. The study does not establish exclusive semantic stores for access versus place content. After intervention, the final token's queries and downstream states can recompute.

## Checked sources

Source project: `causal-decidability/applications/beckmann-2609.21748`.

- `science_v04/CONTRACT.json`, intervention and measurement fields.
- `science_v04/engine4.py`, `make_caches` (lines 39–66), `hybrid` (69–74), `final` (78–87).
- `science_v04/run4.py`, per-arm cache selection and component-identity checks (58–65).
- Existing `science_v04/results/confirmation.json` and confirmation freeze/bundle.

The check covered 512 existing case records and 23 preserved executed-source files. The preserved code matches its historical freeze, including the v0.4 application code. Three present-day general-library files differ from that historical freeze; no blanket claim about the entire current repository is made. The full local audit, including exact hashes and references, is saved as `docs/taxigpt-v2-20261015/position-audit.json` in the website checkout.

The numerical evidence remains the existing [evidence snapshot](../taxigpt/evidence.json). All four declared casewise rules were excluded; a unique natural mechanism was not identified. The compact prediction table uses unedited/joint correctness as references rather than assuming that every individual route was correct before the edit and wrong afterward.

Paper connection: [Beckmann, Queloz & Freitas, *World Modeling in Transformers*, §2.2 and App. C.1](https://arxiv.org/html/2609.21748v1#A3.SS1).
