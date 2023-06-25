const form = document.querySelector("#form");
const taskInput = document.querySelector("#task");
const pendingList = document.querySelector("#pending");
const completedList = document.querySelector("#completed");

form.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Veuillez enter une tâche ( je savais que t'allais check 🤓 )");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", checkTask);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Modifier";
  editBtn.classList.add("edit");
  editBtn.addEventListener("click", editTask);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", deleteTask);

  li.appendChild(checkbox);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  pendingList.appendChild(li);

  taskInput.value = "";
}

function checkTask(e) {
  const task = e.target.parentElement;
  if (e.target.checked) {
    completedList.appendChild(task);
  } else {
    pendingList.appendChild(task);
  }
}

function editTask(e) {
  const task = e.target.parentElement;
  const taskInput = prompt("Modification du nom de la tâche", task.textContent);
  if (taskInput) {
    task.textContent = taskInput;
  }
}

function deleteTask(e) {
  const task = e.target.parentElement;
  task.remove();
}
