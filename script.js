let n = 5;
let elemNumber = (n % 10) + 1;

let firstElem = document.getElementById(`elem${elemNumber}`);
let secondElem = document.querySelector(`#elem${elemNumber + 1}`);

function toggleFirstElem() {
  if (!firstElem) return;

  if (
    !firstElem.classList.contains("active1") &&
    !firstElem.classList.contains("active1-soft")
  ) {
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

  if (
    !secondElem.classList.contains("active2") &&
    !secondElem.classList.contains("active2-soft")
  ) {
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

let imageContainer = document.getElementById("image-container");
let addBtn = document.getElementById("addBtn");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", () => {
  let originalImg = imageContainer.querySelector("img");
  let newImg = originalImg.cloneNode(true);
  newImg.style.display = "block";
  newImg.style.width = originalImg.style.width || "500px";
  imageContainer.appendChild(newImg);
});

function getLastImageForEdit() {
  let imgs = Array.from(imageContainer.querySelectorAll("img"));
  let additionalImgs = imgs.slice(1);
  for (let i = additionalImgs.length - 1; i >= 0; i--) {
    if (additionalImgs[i].style.display !== "none") return additionalImgs[i];
  }
  return imgs[0];
}

increaseBtn.addEventListener("click", () => {
  let img = getLastImageForEdit();
  let width = parseInt(img.style.width) || 500;
  img.style.width = width * 1.2 + "px";
});

decreaseBtn.addEventListener("click", () => {
  let img = getLastImageForEdit();
  let width = parseInt(img.style.width) || 500;
  img.style.width = width * 0.8 + "px";
});

removeBtn.addEventListener("click", () => {
  let imgs = Array.from(imageContainer.querySelectorAll("img"));
  let additionalImgs = imgs.slice(1);
  for (let i = additionalImgs.length - 1; i >= 0; i--) {
    additionalImgs[i].remove();
    break;
  }
});
