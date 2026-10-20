# Li/Saphra: successive causal narrowing and its limits

Website companion, 2026-10-15. This is a presentation of existing research records, not a new experiment or reanalysis. The illustrations are qualitative schematics. They do not display measured attention weights or a specific sampled input.

## Original finding and added question

[Li, Saphra and colleagues](https://arxiv.org/html/2507.06445v4#S4.SS3) report that replacing some heads' attention improves classification of bracket strings. The authors already distinguish predictive from causal evidence and include multiple replacement controls. Our follow-up asks which component of the replacement accounts for its effect; it does not refute their result.

Uniform replacement changes attention to special tokens, the total weight on open/close symbols, and the distribution between different occurrences of a symbol. The follow-up separates those changes while keeping the model, values and readout fixed.

## The illustrated two-step result

The website's successful example is checkpoint `a9g0io1r`, layer 2/head 1. It was selected **after the cohort run for illustration** and was the only two-stage success among all 36 tasks. The task list, predictions, tolerance and simultaneous bounds were fixed before measurement. Stage 2 was the primary substantive target; the two-stage illustration is not a general transfer result.

| Stage | Tested account | Matched qualifying families | Simultaneous match-rate bound | Competitor |
| --- | --- | --- | --- | --- |
| 1 | Bracket routing reproduces full uniform; group-mass change reproduces native | 165/165 | 94.89–100% | Group masses alone: 0/165; upper 5.11% |
| 2 | Redistribution between identical symbols reproduces bracket routing; symbol-mass change reproduces native | 136/136 | 93.83–100% | Symbol masses alone: 0/136; upper 6.17% |

A match requires both new margins for all three members of a family to lie within 0.25 nat of the predictions, with a numerical allowance. Adequacy requires a lower bound above 80%. The stages use separate populations conditioned on sufficiently separated endpoint effects. The counts must not be added into a single sample size. Their composition is not guaranteed the same 0.25-nat error bound.

For these interventions, the different contextual states at occurrences of the same bracket matter. The result does not identify which semantic feature those states carry, a unique native algorithm, necessity, or complete mediation. Component changes differ in size; this is a decomposition of a replacement, not an equal-dose comparison of intrinsic importance.

The short string and numerical margins in the source's `EXAMPLE.md` concern a different head (`1aez5d6p`, layer 2/head 2). They are deliberately not used as a measured example for the website's successful two-step head.

## Keep the cohort visible

The study covered 35 transfer head–model tasks in 34 two-layer models, plus a development checkpoint, on 512 new length-32 cyclic families. Each family contains one valid and two invalid equal-count strings. New evaluation families do not guarantee absence from the original training stream.

| Stage-2 status | Within-symbol account | Symbol-mass account |
| --- | ---: | ---: |
| Adequate | 7 | 0 |
| Excluded | 21 | 33 |
| Unresolved | 5 | 0 |
| Too few separating families | 1 | 1 |
| Technical invalidity | 1 | 1 |

The website strip represents these 35 tasks, not people, independent model populations or a general success rate. In stage 1, routing alone was adequate for one transfer task, excluded for 33 and technically invalid for one. Six of the seven stage-2-adequate tasks had routing excluded at stage 1. Group masses alone were excluded for all 34 technically complete tasks. The development checkpoint separately passed stage 2 on 183/183 qualifying fresh families, with stage-1 adequacy unresolved.

The local freeze preceded execution by 7.733514 seconds, without an independently secured registration timestamp. One rounding-sensitive control stopped the original run. After that outcome, a documented execution amendment replaced global stopping with completion of the fixed cohort; hypotheses, cases, thresholds and the 288-bound multiplicity family stayed unchanged. The affected task remains technically invalid, not scientifically undecided or quietly removed.

## The later tests also belong to the story

Later value-transfer development asked what the relevant states carry. The latest completed round in the linked record, `averaged_anchors_004`, excluded its frozen averaged balance-only and position-only prediction rules at a 90% adequacy target. On 151 separating families, the balance rule's simultaneous bounds were 72.97–89.31%; the position rule's were 0–3.00%. A family had to predict all eight targets within the declared tolerance.

These exclusions concern two calibrated rules on the declared separating population, not every possible balance or position representation. The paired averaging comparison did not establish an improvement. No candidate met the future-confirmation planning gate. This round remains prospective development on an adaptively selected head, not a general mechanism confirmation. A further matched-history round was prepared but unmeasured in this record.

The later exclusions do not undo the earlier component tests: they show that those tests do not yet license these stronger semantic accounts.

## Sources and reproduction

The links below pin the reviewed public source state at `24f3e2639db276c72414385a398c5b9d135e4059`.

- [Successive tests, complete cohort and limitations](https://github.com/Satori-1618/causal-decidability-method-case/blob/24f3e2639db276c72414385a398c5b9d135e4059/applications/li-saphra-2507.06445/native_followup/README.md)
- [Frozen protocol](https://github.com/Satori-1618/causal-decidability-method-case/blob/24f3e2639db276c72414385a398c5b9d135e4059/applications/li-saphra-2507.06445/native_followup/CONFIRMATION.md)
- [Documented continuation](https://github.com/Satori-1618/causal-decidability-method-case/blob/24f3e2639db276c72414385a398c5b9d135e4059/applications/li-saphra-2507.06445/native_followup/CONTINUATION.md)
- [Verification](https://github.com/Satori-1618/causal-decidability-method-case/blob/24f3e2639db276c72414385a398c5b9d135e4059/applications/li-saphra-2507.06445/native_followup/VERIFICATION.md)
- [Complete sequence overview](https://github.com/Satori-1618/causal-decidability-method-case/blob/24f3e2639db276c72414385a398c5b9d135e4059/applications/li-saphra-2507.06445/README.md)
- [Later balance/position result and its development status](https://github.com/Satori-1618/causal-decidability-method-case/blob/24f3e2639db276c72414385a398c5b9d135e4059/applications/li-saphra-2507.06445/value_followup/averaged_anchors_004/RESULT.md)
- [Reproduction instructions and artifact provenance](https://github.com/Satori-1618/causal-decidability-method-case/blob/24f3e2639db276c72414385a398c5b9d135e4059/applications/li-saphra-2507.06445/native_followup/REPRODUCE.md)

This application does not establish superiority over a competent researcher using the same factorial design or general forecasting reliability. The contribution shown here is a traceable sequence of separating predictions, measurements, bounded support and explicit limits.
