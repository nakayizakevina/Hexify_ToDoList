const title = document.getElementById("title");
const description = document.getElementById("description");
const time = document.getElementById("time");
const createTask = document.getElementById("createtask_btn");
const titleAlert = document.getElementById("title_alert");
const descriptionAlert = document.getElementById("description_alert");

const model = document.getElementById("model");
const successModel = document.getElementById("savedTask");

const saveTask = document.getElementById("savetask");
const cancelTask = document.getElementById("canceltask");

let Title;
let Description;
let Time;

if (createTask) {
  createTask.addEventListener("click", function (e) {
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

    model.style.display = "block";
  });
}

if (saveTask) {
  saveTask.addEventListener("click", async function (e) {
    console.log("Have been clicked")
    try {
      const response = await axios.post("http://localhost:4000/api/v1/task", {
        title: Title,
        description: Description,
        time: Time,
      });
      const tasks = response.data.tasks;

      successModel.style.display = "block";

      setTimeout(
        (window.location.href = "http://127.0.0.1:5500/frontend/tasks.html"),
        8000,
      );
    } catch (error) {
      console.log("Sorry the data couldn't be saved");
    }

    title.value = "";
    description.value = "";
    time.value = "";

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
