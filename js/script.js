function showAlert() {
    let message = document.getElementById("messageInput").value;
    alert(message);
    document.getElementById("results").innerHTML = message;
  }