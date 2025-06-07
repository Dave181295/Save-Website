function blinkValue(el, newValue) {
  el.textContent = newValue.toLocaleString('de-DE'); // EU format
  el.classList.remove("blink");
  void el.offsetWidth;
  el.classList.add("blink");
}

function generateLiveAnalytics() {
  const active30 = Math.floor(Math.random() * (9000 - 3000 + 1)) + 3000;

  let dropPercent;
  if (active30 > 7000) {
    dropPercent = Math.random() * 0.1 + 0.3;  // 30–40% drop
  } else {
    dropPercent = Math.random() * 0.1 + 0.2;  // 20–30% drop
  }
  const active5 = Math.floor(active30 * (1 - dropPercent));

  blinkValue(document.getElementById("active-30"), active30);
  blinkValue(document.getElementById("active-5"), active5);
}

document.addEventListener('DOMContentLoaded', generateLiveAnalytics);
setInterval(generateLiveAnalytics, 1800000); // 30 minutes
