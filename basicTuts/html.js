let input = document.getElementById("input")
let button = document.getElementById("button")
let output = document.getElementById("output")

function displayOutput() {
  const text = input.value;
  output.innerHTML = text
}

button.addEventListener("click", displayOutput)