const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

document.getElementById("startBtn").addEventListener("click", () => {
  // Пока это демонстрационная кнопка.
  // Позже здесь откроем экран Crash.
  if (tg?.HapticFeedback) {
    tg.HapticFeedback.impactOccurred("light");
  }
});
