function showAlert() {
    let message = document.getElementById("entryinput").value;
    alert("Phoenix Ling: " + message);
    document.getElementById("results").innerHTML = message;
  }
