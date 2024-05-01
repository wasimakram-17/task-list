 let tasks = [
            { id: 1, title: "Task 1", dueDate: "2024-05-01", completed: false },
            { id: 2, title: "Task 2", dueDate: "2024-05-02", completed: true },
            { id: 3, title: "Task 3", dueDate: "2024-05-03", completed: false }
        ];

        // Function to render tasks
        function renderTasks() {
            const taskContainer = document.getElementById("taskContainer");
            taskContainer.innerHTML = "";
            tasks.forEach(task => {
                const taskDiv = document.createElement("div");
                taskDiv.classList.add("task");
                const checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.checked = task.completed;
                checkbox.addEventListener("change", () => {
                    task.completed = !task.completed;
                    renderTasks();
                });
                const taskTitle = document.createTextNode(task.title + " - Due Date: " + task.dueDate);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => {
                    tasks = tasks.filter(t => t.id !== task.id);
                    renderTasks();
                });
                taskDiv.appendChild(checkbox);
                taskDiv.appendChild(taskTitle);
                taskDiv.appendChild(deleteButton);
                taskContainer.appendChild(taskDiv);
            });
        }

        // Function to add a new task
        function addTask() {
            const newTaskTitle = prompt("Enter task title:");
            if (newTaskTitle) {
                const newTask = {
                    id: tasks.length + 1,
                    title: newTaskTitle,
                    dueDate: new Date().toISOString().split('T')[0],
                    completed: false
                };
                tasks.push(newTask);
                renderTasks();
            }
        }

        // Initial render
        renderTasks();
