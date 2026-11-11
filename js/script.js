function showAlert() {
    let message = document.getElementById("entryinput").value;
    alert(message);
    document.getElementById("results").innerHTML = message;
  }