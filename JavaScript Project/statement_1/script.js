const incBtn = document.getElementById("inc-btn");
const countNum = document.getElementById("count-num");
const decBtn = document.getElementById("dec-btn");
const restbtn = document.getElementById("reset-btn");
const rstbtn = document.getElementById("reset-btn");
let count = 0;

incBtn.addEventListener("click", () => {
  count += 1;
  countNum.innerText = count;
});
decBtn.addEventListener("click", () => {
  if (count !== 0) {
    count -= 1;
    countNum.innerText = count;
  }
});
rstbtn.addEventListener("click", () => {
  countNum.innerText = 0;
});
