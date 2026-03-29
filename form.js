const title = document.getElementById("title");
const description = document.getElementById("description");
const time = document.getElementById("time");
const createTask = document.getElementById("createtask_btn");
const titleAlert = document.getElementById("title_alert");
const descriptionAlert = document.getElementById("description_alert");

const saveTask = document.getElementById("viewtask");
const cancelTask = document.getElementById("canceltask");

const model = document.getElementById("model");
const successModel = document.getElementById("savedTask");

const canceEdit = document.getElementById("cancelEdit_btn");
const updateTask = document.getElementById("updateTask_btn");

const API = "https://todolist-backend-pati.onrender.com/api/v1/task";

let Title;
let Description;
let Time;

if (createTask) {
  createTask.addEventListener("click", async function (e) {
    console.log("have been clicked");
    e.preventDefault();

    Title = title.value;
    Description = description.value;
    Time = time.value;

    if (Title === "") {
      titleAlert.style.display = "block";
      return;
    }
    if (Description === "") {
      descriptionAlert.style.display = "block";
      return;
    }

    try {
      console.log("sending request");
      const response = await axios.post(`${API}/createtask`, {
        title: Title,
        description: Description,
        time: Time,
      });
      console.log("request successful");

      const tasks = response.data.tasks;

      title.value = "";
      description.value = "";
      time.value = "";

      model.style.display = "block";
    } catch (error) {
      console.log(error);
    }
  });
}

if (saveTask) {
  saveTask.addEventListener("click", function (e) {
    window.location.href = "http://127.0.0.1:5500/task.html";

    model.style.display = "none";
  });
}

if (cancelTask) {
  cancelTask.addEventListener("click", function () {
    title.value = "";
    description.value = "";
    time.value = "";

    model.style.display = "none";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  

  const editTitle = localStorage.getItem("editTitle");
  const editDescription = localStorage.getItem("editDescription");
  const editTime = localStorage.getItem("editTime");

  if (editTitle) {
    title.value = editTitle;
    description.value = editDescription;
    time.value = editTime;

    createTask.style.display = "none";
    canceEdit.style.display = "block";
    updateTask.style.display = "block";
  } else {
    createTask.style.display = "block";
    canceEdit.style.display = "none";
    updateTask.style.display = "none";
  }

  
});

canceEdit.addEventListener("click", function () {
  title.value = "";
  description.value = "";
  time.value = "";
  window.location.href = "http://127.0.0.1:5500/task.html";
});



updateTask.addEventListener("click", async function (e) {
  e.preventDefault();

  Title = title.value;
  Description = description.value;
  Time = time.value;

  if (Title === "") {
    titleAlert.style.display = "block";
    return;
  }
  if (Description === "") {
    descriptionAlert.style.display = "block";
    return;
  }

  const editId = localStorage.getItem("editTaskId");

  try {
    console.log("sending request");
    const response = await axios.patch(`${API}/edittask/${editId}`, {
      title: Title,
      description: Description,
      time: Time,
    });
    console.log("request successful");

    const tasks = response.data.tasks;
title.value = "";
      description.value = "";
      time.value = "";
  
localStorage.removeItem("editTitle");
localStorage.removeItem("editDescription");
localStorage.removeItem("editTime");
localStorage.removeItem("editTaskId");

    window.location.href = "http://127.0.0.1:5500/task.html";
  } catch (error) {
    console.log(error);
  }
});
