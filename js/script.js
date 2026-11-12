function init() {
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");
  button.addEventListener("click", function () {
    const message = input.value;
    alert("Phoenix Ling: " + message);
    output.textContent = message;
  });
}

window.addEventListener('DOMContentLoaded', init);
