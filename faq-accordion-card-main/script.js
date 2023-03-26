"uses strict";
const questionBoxs = document.querySelectorAll(".b");
questionBoxs.forEach((questionBox) => {
  questionBox.addEventListener("click", () => {
    questionBox.querySelector(".answer").toggleAttribute("hidden");
  });
});
