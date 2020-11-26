let arr = [];
(function () {
  document
    .querySelector(".countOfIterations")
    .addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        console.log(this.value);
        for (let i = 0; i < this.value; i++) {
          let timer__element = document.createElement("div");
          timer__element.classList.add("timer__element");
          timer__element.innerHTML = i + 1;
          document.querySelector(".timer").appendChild(timer__element);
        }
        let elems = document.querySelectorAll(".timer__element");
        for (let i = 0; i < elems.length; i++) {
          elems[i].addEventListener("click", function () {
            this.innerHTML = document.querySelector(
              ".numberOfIterations"
            ).value;
          });
        }
      }
    });
})();
let rangeValue;
document.querySelector(".range").addEventListener("mouseup", function () {
  rangeValue = this.value;
  console.log(rangeValue);
});

document.querySelector(".button").addEventListener("click", function () {
  let nodeList = Array.from(document.querySelectorAll(".timer__element"));
  nodeList.forEach((el) => arr.push(el.innerHTML));
  let newIter = new Timer(
    [...arr],
    rangeValue === undefined ? (rangeValue = 275) : rangeValue
  );
  arr = [];
  newIter.doStep();
});
