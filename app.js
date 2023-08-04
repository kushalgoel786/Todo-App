const addButton = document.querySelector("button");
const todoList = document.querySelector("ul");
const input = document.querySelector("input");

addButton.addEventListener("click", function () {
  const inputValue = input.value.trim();
  if (inputValue !== "") {
    addTask(inputValue);
    input.value = "";
  }
});

todoList.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    event.target.parentElement.remove();
  }
});

function addTask(task) {
  const li = document.createElement("li");
  li.innerText = task;
  li.append(getDeleteButton());
  todoList.append(li);
}

function getDeleteButton() {
  const button = document.createElement("button");
  button.classList.add("delete");
  button.innerText = "Delete";
  return button;
}
