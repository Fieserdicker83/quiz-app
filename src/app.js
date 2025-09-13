document.getElementById("startBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value.trim();
  if (name) {
    localStorage.setItem("quizName", name);
    window.location.href = "quiz.html"; // oder navigateTo("quiz.html")
  } else {
    alert("Bitte gib deinen Namen ein.");
  }
});