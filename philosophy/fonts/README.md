# Self-hosted Philosophy fonts

Downloaded on 2026-10-18 from the official Fontsource npm packages, pinned to version 5.3.0:

- https://fontsource.org/fonts/cormorant-garamond
- https://fontsource.org/fonts/eb-garamond
- https://fontsource.org/fonts/lora

The registry package archives were checked against their npm SHA-512 integrity values before extraction. `provenance.json` records the exact package URLs and SHA-256 values of each unchanged WOFF2 file. The original SIL Open Font License 1.1 text for each family is included alongside the fonts.

Exactly twelve weight/style combinations are declared:

- Cormorant Garamond: normal 400, 500, 600; italic 400, 500.
- EB Garamond: normal 400, 500; italic 400, 500.
- Lora: normal 400, 500; italic 400.

Each combination is split into the original Fontsource Unicode subsets. All supplied subsets for these twelve combinations are retained, including Latin Extended, Greek where supported, and mathematical/symbol glyphs where supplied. Separate subset files are not additional weights or styles. Browsers request only subsets needed for the page.

`fonts.css` preserves Fontsource family names, weights, styles, Unicode ranges and `font-display: swap`; sources are reduced to local WOFF2 URLs. No font software was modified. These files replace Google Fonts loading in the five Philosophy HTML pages; they do not change the PDFs.
