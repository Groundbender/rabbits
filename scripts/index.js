const blocksWrapper = document.querySelector(".square-body");
const btnReset = document.querySelector(".btn-reset");
const blocks = document.querySelectorAll(".block");
let nums = document.querySelectorAll(".block-number");

let arr = Array.from(blocks);

const moveLeft = (elem) => {
  let index = arr.findIndex((currentValue) => currentValue == elem);
  let validIndex = index - 1;

  if (elem.previousElementSibling) {
    let helper = 0;
    helper = arr[validIndex].innerHTML;

    arr[validIndex].innerHTML = arr[index].innerHTML;
    arr[index].innerHTML = helper;
  }
};

const moveRight = (elem) => {
  let index = arr.findIndex((currentValue) => currentValue == elem);
  let validIndex = index + 1;

  if (elem.nextElementSibling) {
    let helper = 0;
    helper = arr[validIndex].innerHTML;

    arr[validIndex].innerHTML = arr[index].innerHTML;
    arr[index].innerHTML = helper;
  }
};
const moveTop = (elem) => {
  let index = arr.findIndex((currentValue) => currentValue == elem);
  let validIndex = index - 5;

  if (validIndex >= 0) {
    let helper = 0;
    helper = arr[validIndex].innerHTML;

    arr[validIndex].innerHTML = arr[index].innerHTML;
    arr[index].innerHTML = helper;
  }
};

const moveBottom = (elem) => {
  let index = arr.findIndex((currentValue) => currentValue == elem);
  let validIndex = index + 5;

  if (index >= 0 && validIndex < 25) {
    let helper = 0;
    helper = arr[validIndex].innerHTML;

    arr[validIndex].innerHTML = arr[index].innerHTML;
    arr[index].innerHTML = helper;
  }
};
const resetBlocks = () => {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block, index) => {
    const startPos = index + 1;
    block.querySelector(".block-number").innerHTML = startPos;
  });
};

blocksWrapper.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.closest(".left") && e.target.closest(".block")) {
    const block = e.target.closest(".block");
    moveLeft(block);
  }
  if (e.target.closest(".right") && e.target.closest(".block")) {
    const block = e.target.closest(".block");
    moveRight(block);
  }
  if (e.target.closest(".top") && e.target.closest(".block")) {
    const block = e.target.closest(".block");

    moveTop(block);
  }

  if (e.target.closest(".bottom") && e.target.closest(".block")) {
    const block = e.target.closest(".block");

    moveBottom(block);
  }
});

btnReset.addEventListener("click", resetBlocks);
