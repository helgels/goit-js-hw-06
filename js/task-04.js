const counterEl = document.querySelector("#counter");
const counterValue = document.querySelector("#value");

console.log(counterEl.firstElementChild);
console.log(counterEl.lastElementChild);

const counter = {
    value: 0,
    increment() {
        this.value += 1;
        console.log("+1");
    },
    decrement() {
        this.value -= 1;
    }
}
counterEl.firstElementChild.addEventListener("click", function () {
    counter.decrement();
    counterValue.textContent = counter.value;
});

counterEl.lastElementChild.addEventListener("click", function () {
    counter.increment();
    counterValue.textContent = counter.value;
});