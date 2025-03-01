const taskBtnAll = document.querySelectorAll(".task-btn");
const activeTask = document.getElementById("active-tasks");
const totalTaskCompleted = document.getElementById("total-tasks-completed");
const activityLog = document.getElementById("activity-log");
const historyBtn = document.getElementById("history-btn")

let activeTaskCount = 6;

let totalTaskCompletedCount = 23;

for (const taskBtn of taskBtnAll) {
  taskBtn.addEventListener("click", function (e) {
    let remainingTask = (activeTaskCount -= 1);
    let allTaskDone = (totalTaskCompletedCount += 1);
    activeTask.innerText = remainingTask;
    totalTaskCompleted.innerText = allTaskDone;

    e.target.setAttribute("disabled", true)

    const div = document.createElement("div")
    div.innerHTML = `<p class="p-[10px] rounded-[8px] bg-[#f4f7ff] opacity-70 mb-10">
     You have Complete The Task Add Dark Mode at 12:48:15 PM
    </p>`;
    activityLog.appendChild(div)
  });
}

historyBtn.addEventListener("click", function(){
activityLog.innerHTML = ""
})