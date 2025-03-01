const taskBtnAll = document.querySelectorAll(".task-btn");
const activeTask = document.getElementById("active-tasks");
const totalTaskCompleted = document.getElementById("total-tasks-completed");

let activeTaskCount = 6;

let totalTaskCompletedCount = 23;

for (const taskBtn of taskBtnAll) {
  taskBtn.addEventListener("click", function (e) {
    let remainingTask = (activeTaskCount -= 1);
    let allTaskDone = (totalTaskCompletedCount += 1);
    activeTask.innerText = remainingTask;
    totalTaskCompleted.innerText = allTaskDone;

    e.target.setAttribute("disabled", true)
  });
}
