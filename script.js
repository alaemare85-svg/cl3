const welcomeButton = document.querySelector("#welcome-button");
const message = document.querySelector("#message");
let clickCount = 0;

welcomeButton.addEventListener("click", () => {
  clickCount += 1;
  message.textContent = `أحسنت! لقد ضغطت على الزر ${clickCount} مرة.`;
});
