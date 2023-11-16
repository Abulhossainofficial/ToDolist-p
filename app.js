const taskForm = document.getElementById("task-input-form");
const taskInput = document.getElementById("new-task-input");
const allTasks = document.querySelector(".tasks");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!taskInput.value) {
    alert("Please Insert a task!");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("content");
  //   taskDiv.innerHTML = taskInput.value;

  const inputTasks = document.createElement("input");
  inputTasks.type = "text";
  inputTasks.value = taskInput.value;
  inputTasks.setAttribute("read0nly", "readonly");

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const editBtn = document.createElement("Button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit");
  actions.appendChild(editBtn);

  const deleteBtn = document.createElement("Button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
  actions.appendChild(deleteBtn);

  taskDiv.appendChild(inputTasks);

  taskDiv.appendChild(actions);

  allTasks.appendChild(taskDiv);

  editBtn.addEventListener("click", (e) => {
    if (editBtn.innerText.toLocaleLowerCase() === "edit") {
      inputTasks.removeAttribute("readonly");
      editBtn.innerText = "Save";
      inputTasks.focus();
    } else {
      editBtn.innerText = "Edit";
      inputTasks.setAttribute("read0nly", "readonly");
    }
  });

  deleteBtn.addEventListener("click", () => {
    allTasks.removeChild(taskDiv);
  });

  //   console.log(taskInput.value);
  taskInput.value = "";
});
