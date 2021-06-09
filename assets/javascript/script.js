let number_buttons = document.querySelectorAll(".number");
let operator_buttons = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let display = document.querySelector("#display");
let display_1 = document.querySelector("#display-1");
let display_2 = document.querySelector("#display-2");
let equal = document.getElementById("equal");
let decimal = document.querySelector("#decimal");

let numbers = [];
let display_number = "";
let result = "";

number_buttons.forEach((number) => {
  number.addEventListener("click", () => {
    if (display_number.charAt(0) == "0") reset();
    if (display_2.innerText == result) return;
    display_number += number.innerText;
    display_2.innerText = display_number;
  });
});

operator_buttons.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (display_2.innerText == 0) return;
    numbers.push(display_2.innerText);
    display_1.innerText = display_number;
    display_1.innerText = `${display_number}  ${operator.innerText}`;
    display_2.innerText = 0;
    display_number = "";
    if (result !== "") {
      display_1.innerText = `${result}  ${operator.innerText}`;
      display_2.innerText = 0;
    }
    if (numbers[0] == numbers[1]) {
      numbers.pop();
    }
  });
});

equal.addEventListener("click", () => {
  if (result == display_2.innerText) return;
  if (display_1.innerText == "0" || display_2.innerText == "0") return;
  numbers.push(display_2.innerText);
  display_1.innerText += ` ${display_2.innerText}`;
  result = numbers.reduce((a, b) => {
    if (display_1.innerText.includes("+")) {
      return parseInt(a) + parseInt(b);
    } else if (display_1.innerText.includes("-")) {
      return parseInt(a) - parseInt(b);
    } else if (display_1.innerText.includes("*")) {
      return parseInt(a) * parseInt(b);
    } else {
      return parseInt(a) / parseInt(b);
    }
  });
  numbers = [];
  display_2.innerText = result;
  numbers.push(result.toString());
});

let reset = () => {
  display_2.innerText = 0;
  display_1.innerText = 0;
  display_number = "";
  numbers = [];
  result = "";
};
