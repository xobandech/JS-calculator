const input = document.querySelector("#display");
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
operators = ["/", "+", "-", "*", "."];
let operator = "";
const confirm = document.querySelector(".confirm");
document.addEventListener("click", function (event) {
  try {
    let type = event.target.innerHTML;
    if (
      operators.includes(type) &&
      operators.includes(input.value[input.value.length - 1])
    )
      return;
    if (type == "C") input.value = "";
    if (numbers.includes(type)) {
      input.value += event.target.innerHTML;
    }
    if (type == "=") {
      input.value = eval(input.value);
    } else if (operators.includes(type)) {
      input.value += type;
    }
    if (input.value == "undefined") input.value = "Err";
  } catch (err) {
    input.value = "Err";
  }
});
