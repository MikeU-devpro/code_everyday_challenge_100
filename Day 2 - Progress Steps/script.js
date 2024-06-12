const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const goToNext = (num) => {
  steps[num + 1].classList.add("active");
  lines[num].classList.add("active");
  prevBtn.classList.add("active");
};

const formatNext = (num) => {
  if (num == 2) {
    goToNext(num);
    nextBtn.classList.remove("active");
    nextBtn.style.cursor = "not-allowed";
    prevBtn.classList.add("active");
    prevBtn.style.cursor = "pointer";
  } else {
    goToNext(num);
    nextBtn.classList.add("active");
    nextBtn.style.cursor = "pointer";
  }
};

const goToPrev = (num) => {
  steps[num].classList.remove("active");
  lines[num - 1].classList.remove("active");
  nextBtn.classList.add("active");
};

const formatPrev = (num) => {
  if (num == 1) {
    goToPrev(num);
    prevBtn.style.cursor = "not-allowed";
    prevBtn.classList.remove("active");
    nextBtn.classList.add("active");
    nextBtn.style.cursor = "pointer";
  } else {
    goToPrev(num);
    prevBtn.classList.add("active");
    prevBtn.style.cursor = "pointer";
  }
};

nextBtn.addEventListener("click", () => {

  let arr = [];
  steps.forEach((step) => {
    arr.push(step.classList.contains("active"));
  });
  let arr2 = arr.reverse();
  let j = 3 - arr2.indexOf(true);
  formatNext(j);
});

prevBtn.addEventListener("click", () => {
  let arr = [];
  steps.forEach((step) => {
    arr.push(step.classList.contains("active"));
  });
  let arr2 = arr.reverse();
  let j = 3 - arr2.indexOf(true);
  formatPrev(j);
});
