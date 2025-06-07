function blinkValue(el, newValue) {
  el.textContent = newValue.toLocaleString('de-DE'); // EU format
  el.classList.remove("blink");
  void el.offsetWidth;
  el.classList.add("blink");
}

function generateLiveAnalytics() {
  const active30 = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;

  let dropPercent;
  if (active30 > 4500) {
    dropPercent = Math.random() * 0.05 + 0.15; // 15–20%
  } else if (active30 > 3800) {
    dropPercent = Math.random() * 0.07 + 0.2; // 20–27%
  } else {
    dropPercent = Math.random() * 0.1 + 0.25; // 25–35%
  }

  let active5;
  const chance = Math.random();

  if (chance < 0.85) {
    // normal case
    active5 = Math.floor(active30 * (1 - dropPercent));
  } else {
    // spike case: 5min users temporarily exceed 30min average
    const surgePercent = Math.random() * 0.1 + 0.05; // 5–15%
    active5 = Math.floor(active30 * (1 + surgePercent));
  }

  blinkValue(document.getElementById("active-30"), active30);
  blinkValue(document.getElementById("active-5"), active5);
}

document.addEventListener('DOMContentLoaded', generateLiveAnalytics);
setInterval(generateLiveAnalytics, 300000); // 5 minutes
