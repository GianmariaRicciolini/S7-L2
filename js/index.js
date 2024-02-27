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

updateName();
