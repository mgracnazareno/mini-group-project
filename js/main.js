document.addEventListener("DOMContentLoaded", function () {
  const msg = document.getElementById("message");
  const change = document.getElementById("changeBtn");
  const reset = document.getElementById("resetBtn");

  const originals = { text: msg.textContent };

  change.addEventListener("click", function () {
    const options = [
      "Keep going - you're doing better than you think ✨",
      "Take it one step at a time — you’ll get there 🌟",
      "Stay focused — small progress is still progress 🎯",
      "You’re on the right path — trust your journey 🌿",
    ];
    const next = options[Math.floor(Math.random() * options.length)];
    msg.textContent = next;
  });

  reset.addEventListener("click", function () {
    msg.textContent = originals.text;
  });
});
