const input = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");
const button = document.querySelector(".tasks__add");

function addNewTask(text) {
  return `<div class="task">
    <div class="task__title">${text}</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;
}

function newTask(e) {
  e.preventDefault();
  const text = input.value;
  if (text.trim()) {
    tasksList.insertAdjacentHTML("beforeend", addNewTask(input.value));
  }
  input.value = "";
}

function removeTask(e) {
  if (e.target.classList.contains("task__remove")) {
    e.target.parentNode.remove();
  }
}

button.addEventListener("click", newTask);
tasksList.addEventListener("click", removeTask);
