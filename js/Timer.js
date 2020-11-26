class Timer {
  constructor(options, range) {
    this.options = options;
    this.range = range;
  }

  doStep() {
    let k = 0;
    let all = document.querySelectorAll(".timer__element");
    for (let i = this.options.length; i >= 0; i--) {
      setTimeout(() => {
        console.log(all[i]);
        document.querySelector(".sets").innerHTML = i;
      }, (k += 0));
      for (let j = this.options[i]; j >= 0; j--) {
        if (j == 0) {
          continue;
        } else {
          setTimeout(() => {
            console.log("j=", j);
            all[i].innerHTML = j - 1;
            if (all[i].innerHTML != 0) {
              all[i].classList.add("timer-finish");
            } else {
              all[i].classList.remove("timer-finish");
            }
            console.log(this.range, k);
          }, (k += +this.range));
        }
      }
    }
    return 0;
  }
}
