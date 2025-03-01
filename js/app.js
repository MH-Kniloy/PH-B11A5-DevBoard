const taskBtnAll = document.querySelectorAll(".task-btn");
const activeTask = document.getElementById("active-tasks");
const totalTaskCompleted = document.getElementById("total-tasks-completed");
const activityLog = document.getElementById("activity-log");
const historyBtn = document.getElementById("history-btn");

const currentDateHTML = document.getElementById("current-date");
const blog = document.getElementById("blog")
const cards = document.querySelectorAll(".card")

let currentDate = new Date().toDateString();
currentDateHTML.innerText = currentDate;

blog.addEventListener("click", function(){
    window.location.href = "html/blog.html";
})

let activeTaskCount = 6;

let totalTaskCompletedCount = 23;

for (const taskBtn of taskBtnAll) {
  taskBtn.addEventListener("click", function (e) {
    let currentTime = new Date().toLocaleTimeString();
    alert("Board Updated Successfully");
    let remainingTask = (activeTaskCount -= 1);
    let allTaskDone = (totalTaskCompletedCount += 1);
    activeTask.innerText = remainingTask;
    totalTaskCompleted.innerText = allTaskDone;

    e.target.setAttribute("disabled", true);

    const div = document.createElement("div");
    div.innerHTML = `<p class="p-[10px] rounded-[8px] bg-[#f4f7ff] opacity-70 mb-10">
     You have Complete The Task Add Dark Mode at ${currentTime}
    </p>`;
    activityLog.appendChild(div);
    if (activeTaskCount === 0) {
      alert("Congrats!!! You have completed all the current tasks");
    }
  });
}

historyBtn.addEventListener("click", function () {
  activityLog.innerHTML = "";
});
