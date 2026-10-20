# Causal Parrots: causal facts or plausible wording?

## Data availability

The downloadable snapshot contains aggregate results and provenance; it does not include the underlying 1,536 measurement records or reanalysis code.

This page presents an exploratory cause-substitution test on **Gemma-3-4B-IT**. It adapts the audited one-page infographic to the Sapphire Bridge website. It is not a replication of the original paper's model results and does not decide the Correlation of Causal Facts conjecture.

## What the picture depicts

The example uses event names from the existing prompts:

- Original source A: `boiler switch closing`
- Substituted source A: `garden valve motor powered`
- Target C: `boiler water warming`
- Target C′: `boiler water cooling`

The source event is replaced in the event list, stated links and query. Both targets remain in the prompt. The graph topology and graph answers stay fixed. In No items A reaches neither target; in Yes items it reaches both. The drawing illustrates this manipulation; it is not a new individual-item measurement and does not assert a real-world causal link from the valve to the boiler.

## Measurement

For each target, the score is log P(` Yes`) − log P(` No`) at the same answer boundary. The preference is the score for C minus the score for C′, measured in nats. C was annotated as plausible for the original source. A positive preference does not by itself establish correct Yes and No answers or relation-specific causal knowledge.

The results average over both graph answers and both presentation orders, weighting 48 family-instances equally. The 1,536 prompts span 23 recipient mechanism clusters. These families had been used in earlier work; this is an exploratory follow-up.

| Scenario background | Original source preference | Substituted source preference | Paired difference, 95% interval |
| --- | ---: | ---: | ---: |
| Included | 3.81 | 3.33 | +0.48 [−0.42, +1.46] |
| Removed | 3.29 | 3.13 | +0.16 [−0.62, +0.99] |

Intervals use 10,000 percentile-bootstrap draws over recipient mechanism clusters, seed 20261003. Source-donor reuse is not separately resampled. Including zero is not an equivalence result.

## Limits

- One IT model, evaluated with explicit BOS and no chat template, bf16 on MPS; model revision `093f9f388b31de276ce2de164bdc2081324b9767`.
- The task supplies a directed graph, two worked examples and an instruction to ignore world knowledge. Removing the operational-background sentence does not remove the examples or instructions.
- Reversing order changes both the event-list order of the targets and their corresponding link order.
- Cause replacement changes source vocabulary, contextual fit and token length in 576/768 matched source pairs. This is not an isolated manipulation of relational knowledge.
- Foreign cause–effect truth was not independently annotated. Original plausibility annotations were model-assisted.
- The target preference persists on average; a smaller relation-dependent contribution remains unresolved. No wording mechanism, absence of causal knowledge, complete mechanism, or general CCF conclusion is established.
- The proposed crossed cause-by-effect test has not been run.

## Provenance

Paper: Zečević, Willig, Dhami & Kersting, *Causal Parrots: Large Language Models May Talk Causality But Are Not Causal*, TMLR (2023), §§3–4. <https://arxiv.org/abs/2308.13067>

Original upstream stimulus repository: `MoritzWillig/causalParrots`, pinned at `badd352fe58caa80fbda72f89adc6665f83a92b2`. The displayed follow-up uses a later controlled prompt format and other models.

Local scientific result source commit: `e25538a876a20a92c3d98d62fb9fb1052a27ef6c`. Audited research-note commit: `7b726a4f5459850d7d45d822e14fd5fdd3405d37`.

Canonical result file: `exploratory/fact_vs_relatedness/matched_truth_decision_analysis.json`; SHA-256 `b9e653208e481838dbbc5ab80af9efe80d723ece56cf1fbee5fdaf274acba52d`.

The adjacent `evidence.json` is a byte-identical copy of the infographic's provenance file. It preserves full-precision values, source paths, hashes and the model revision. The adjacent `causal-parrots.png` is the previously rendered, reviewed one-page export. No new model calls or statistical analyses were performed for this website integration.
