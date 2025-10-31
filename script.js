let n = 5;
let elemNumber = (n % 10) + 1;

let firstElem = document.getElementById(`elem${elemNumber}`);
let secondElem = document.querySelector(`#elem${elemNumber + 1}`);

function toggleFirstElem() {
  if (!firstElem) return;

  if (!firstElem.classList.contains("active1") && !firstElem.classList.contains("active1-soft")) {
    firstElem.classList.add("active1");
  } else if (firstElem.classList.contains("active1")) {
    firstElem.classList.remove("active1");
    firstElem.classList.add("active1-soft");
  } else {
    firstElem.classList.remove("active1-soft");
    firstElem.classList.add("active1");
  }
}

function toggleSecondElem() {
  if (!secondElem) return;

  if (!secondElem.classList.contains("active2") && !secondElem.classList.contains("active2-soft")) {
    secondElem.classList.add("active2");
  } else if (secondElem.classList.contains("active2")) {
    secondElem.classList.remove("active2");
    secondElem.classList.add("active2-soft");
  } else {
    secondElem.classList.remove("active2-soft");
    secondElem.classList.add("active2");
  }
}

if (firstElem) firstElem.addEventListener("click", toggleFirstElem);
if (secondElem) secondElem.addEventListener("click", toggleSecondElem);
