document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input me-2";
    checkbox.addEventListener("change", () => {
      span.classList.toggle("completed", checkbox.checked);
    });

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    const editBtn = document.createElement("img");
    editBtn.src = "edit.png";
    editBtn.alt = "Edit";
    editBtn.className = "icon-button me-2";
    editBtn.addEventListener("click", () => {
      const newTask = prompt("Edit your task:", span.textContent);
      if (newTask) span.textContent = newTask;
    });

    const deleteBtn = document.createElement("img");
    deleteBtn.src = "bin.png";
    deleteBtn.alt = "Delete";
    deleteBtn.className = "icon-button";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  });
});
