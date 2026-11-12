function init() {
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");
  button.addEventListener("click", function () {
    const message = input.value;
    alert("phoenix Ling: " + message);
    output.textContent = message;
  });
}

// Ensure the DOM is fully loaded before running the script
window.addEventListener('DOMContentLoaded', init);
