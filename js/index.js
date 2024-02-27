// prima richiesta

const savedName = document.getElementById("name");
const saveButton = document.getElementById("save");
const deleteButton = document.getElementById("delete");

const submittedValue = document.getElementById("submitted");

saveButton.addEventListener("click", function () {
  const submittedName = savedName.value;
  localStorage.setItem("userName", submittedName);
  updateName();
  savedName.value = "";
});

deleteButton.addEventListener("click", function () {
  localStorage.removeItem("userName");
  updateName();
  savedName.value = "";
});

function updateName() {
  const userName = localStorage.getItem("userName");

  if (userName) {
    submittedValue.innerText = `Nome precedente: ${userName}`;
  } else {
    submittedValue.innerText = "";
  }
}
// la richiamo in mod da visualizzare il nome, se presente, all'avvio della pagina
updateName();

// seconda richiesta

const timeOnTimer = document.getElementById("timer");

function startTimer() {
  let seconds = sessionStorage.getItem("time");

  function updateTime() {
    seconds++;
    timeOnTimer.textContent = seconds;
    sessionStorage.setItem("time", seconds);
  }

  updateTime();

  setInterval(updateTime, 1000);
}

startTimer();
