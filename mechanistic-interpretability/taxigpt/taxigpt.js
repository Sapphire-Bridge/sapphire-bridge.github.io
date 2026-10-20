(() => {
  'use strict';
  const rules = {
    K_only: {failure:'V-only should match baseline correctness. It disagrees on 387 of 512 routes.',rate:75.5859375,interval:[70.06,80.57],note:'The K-only versus joint comparison also exceeds the tolerance.'},
    V_only: {failure:'K-only should match baseline correctness. It disagrees on 264 of 512 routes.',rate:51.5625,interval:[45.46,57.64],note:'V-only versus joint remains unresolved at the 10% tolerance. The rule fails because of its other prediction.'},
    joint_required: {failure:'K-only should match baseline correctness. It disagrees on 264 of 512 routes.',rate:51.5625,interval:[45.46,57.64],note:'V-only also violates the prediction that it matches baseline correctness.'},
    either_sufficient: {failure:'K-only should match joint-edit correctness. It disagrees on 190 of 512 routes.',rate:37.109375,interval:[31.35,43.14],note:'V-only versus joint remains unresolved at the 10% tolerance. One failed prediction excludes the rule.'}
  };
  const driverStories = {
    K_only: 'If A explains the trouble, disturbing B alone should leave the driver’s right/wrong answers unchanged. It does not.',
    V_only: 'If B explains the trouble, disturbing A alone should leave the driver’s right/wrong answers unchanged. It does not.',
    joint_required: 'If only the double disturbance causes trouble, disturbing A alone should leave the driver’s right/wrong answers unchanged. It does not.',
    either_sufficient: 'If either disturbance reproduces the whole effect, disturbing A alone should reproduce the double disturbance’s right/wrong answers. It does not.'
  };
  const selector = document.getElementById('taxi-rule-select');
  const result = document.getElementById('taxi-rule-result');
  function render() {
    const rule = rules[selector.value];
    if (!rule) return;
    result.innerHTML = `<div class="taxi-selected-story">${driverStories[selector.value]}</div><p>${rule.failure}</p><span class="taxi-rate">${rule.rate.toFixed(2)}%</span><span class="taxi-interval-label">mismatch · simultaneous interval ${rule.interval[0].toFixed(2)}–${rule.interval[1].toFixed(2)}%</span><div class="taxi-interval-track" role="img" aria-label="Mismatch interval ${rule.interval[0]} to ${rule.interval[1]} percent; the lower bound exceeds the 10 percent tolerance."><span class="taxi-tolerance"></span><span class="taxi-limit"><span>10% limit</span></span><span class="taxi-ci" style="left:${rule.interval[0]}%;width:${rule.interval[1]-rule.interval[0]}%"></span><span class="taxi-point" style="left:${rule.rate}%"></span><span class="taxi-axis-end">100%</span></div><p class="taxi-decision-note"><strong>Excluded:</strong> lower bound &gt; 10%. ${rule.note}</p>`;
  }
  selector.addEventListener('change', render);
  render();
})();
