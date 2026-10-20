#!/usr/bin/env python3
"""Draw three schematic conditions at identical coordinates; no model or data run."""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
PAST = [
    {"node": [120, 220], "tags": [118, 240], "leader": "M120 226 137 240"},
    {"node": [120, 140], "tags": [54, 157], "leader": "M117 145 100 157"},
    {"node": [200, 140], "tags": [184, 168], "leader": "M200 146 209 168"},
    {"node": [200, 60], "tags": [137, 20], "leader": "M195 55 178 44"},
    {"node": [280, 60], "tags": [279, 20], "leader": "M283 55 300 44"},
]
BASE = '''<rect x="1" y="1" width="358" height="278" rx="12" fill="#fff"/>
<path d="M24 60h294M24 140h294M24 220h294M40 47v190m80-190v190m80-190v190m80-190v190" stroke="#edf0f5" stroke-width="12" stroke-linecap="round"/>
<path d="M40 220h80v-80h80V60h80v80" stroke="#8ab5df" stroke-width="3.5" stroke-linejoin="round"/>
<circle cx="40" cy="220" r="5" fill="#a8b2c0"/>
<rect x="260" y="128" width="40" height="24" rx="6" fill="#e9b849" stroke="#a4812d" stroke-width="1.2"/>
<path d="m267 128 5-8h15l6 8" fill="#f3cf7e" stroke="#a4812d" stroke-width="1.2"/>
<path d="m274 123-3 5h17l-4-5" fill="#728da5"/>
<circle cx="269" cy="152" r="4.5" fill="#424d5e"/><circle cx="291" cy="152" r="4.5" fill="#424d5e"/>
<text x="280" y="181" font-family="Arial,sans-serif" font-size="16" text-anchor="middle" fill="#536174">now</text>
<g class="location-question" aria-label="Can researchers still read the current location from the model’s internal activity?">
<path d="M316 85h26a9 9 0 0 1 9 9v21a9 9 0 0 1-9 9h-22l-16 12 5-17a9 9 0 0 1-2-4V94a9 9 0 0 1 9-9Z" fill="#f0ecfb" stroke="#b5a4d9" stroke-width="1.5"/>
<text x="329" y="114" text-anchor="middle" font-family="Arial,sans-serif" font-size="29" font-weight="600" fill="#7558d8">?</text>
</g>'''


def draw(arm):
    pieces = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 280" fill="none" role="img" aria-labelledby="title"><title id="title">Same past route states; {arm} edited.</title>', BASE]
    for point in PAST:
        x, y = point["node"]
        tx, ty = point["tags"]
        pieces.append(f'<circle class="past-node" cx="{x}" cy="{y}" r="4.5" fill="#0066cc"/><path d="{point["leader"]}" stroke="#a8b2c0" stroke-width="1.2"/>')
        for offset, component in ((0, "K"), (29, "V")):
            edited = component in arm
            fill, stroke, text = ("#7558d8", "#6447b8", "#fff") if edited else ("#fff", "#b7c2d2", "#526379")
            pieces.append(f'<g class="component-marker" data-component="{component}" data-edited="{str(edited).lower()}" data-past-node="{x},{y}"><rect x="{tx+offset}" y="{ty}" width="25" height="24" rx="5" fill="{fill}" stroke="{stroke}"/><text x="{tx+offset+12.5}" y="{ty+18}" text-anchor="middle" font-family="Arial,sans-serif" font-weight="600" font-size="18" fill="{text}">{component}</text></g>')
    pieces.append('</svg>')
    return '\n'.join(pieces) + '\n'


manifest = {"kind": "illustration, not an observed case", "compressed_history": True,
            "scientific_positions": "All earlier move tokens, 2..t-2 inclusive; same mask in K, V and KV",
            "past_nodes": PAST, "origin": [40, 220], "current": [280, 140],
            "arms": {}}
for name, arm in (("joint", "KV"), ("k-only", "K"), ("v-only", "V")):
    path = HERE / f"route-{name}.svg"
    path.write_text(draw(arm))
    manifest["arms"][name] = {"file": path.name, "edited_components": list(arm), "past_nodes": [p["node"] for p in PAST]}
(HERE / "route-layout.json").write_text(json.dumps(manifest, indent=2) + '\n')
print("Three route diagrams drawn with identical past-node coordinates.")
