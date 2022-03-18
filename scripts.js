const inputEl = document.getElementById("form-input-one");
const buttonEl = document.getElementById("form-button");
const completeUl = document.getElementById("completed-list");
const uncompleteUl = document.getElementById("uncomplete-list");

function addNewTodo(e) {
  e.preventDefault();
  const newHeader = document.createElement("h4");
  const newListEl = document.createElement("li");
  const newCheckbox = document.createElement("input");
  const textNode = document.createTextNode(inputEl.value);

  newListEl.classList.add("uncomplete-todo");
  newCheckbox.type = "checkbox";
  newCheckbox.classList.add("checkbox-input");
  newCheckbox.setAttribute("onchange", "finishedTodo(event)");
  newListEl.appendChild(newCheckbox);

  newHeader.appendChild(textNode);
  newListEl.appendChild(newHeader);

  uncompleteUl.appendChild(newListEl);
  inputEl.value = "";
}

function finishedTodo(e) {
  const parentLiEl = e.target.parentElement;
  const addLiEl = e.target;
  const newDelete = document.createElement("div");
  const deleteTextNode = document.createTextNode("delete");

  uncompleteUl.removeChild(parentLiEl);

  newDelete.appendChild(deleteTextNode);
  newDelete.classList.add("delete-button");
  newDelete.setAttribute("onclick", "deleteTodo(event)");

  parentLiEl.appendChild(newDelete);
  parentLiEl.classList.replace("uncomplete-todo", "complete-todo");

  addLiEl.disabled = true;
  completeUl.appendChild(parentLiEl);
}

function deleteTodo(e) {
  const handleDeleteTodo = e.target.parentElement;

  completeUl.removeChild(handleDeleteTodo);
}

// Render your todos with the title, checkbox, and a delete button
// Completed "Todo" Section with conditional rendering (if no todos are completed, render a message that says that)

// Add a todo to a list of todo items, delete a todo from that list, and be able to complete a todo, which will add it to the completed list section, and then adds a strikethrough in the middle of the original item (in the todos list section). If you uncheck a todo, remove it from the completed and remove the strikethrough.

// Click the checkbox -> add to completed -> add strikethrough in the original todo section

// BONUS: Persist your todo list in the browser and render them on refresh (cookies, LOCALSTORAGE*, sessionstorage)
