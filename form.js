const title = document.getElementById("title");
const description = document.getElementById("description");
const time = document.getElementById("time");
const createTask = document.getElementById("createtask_btn");
const titleAlert = document.getElementById("title_alert");
const descriptionAlert = document.getElementById("description_alert");

const model = document.getElementById("model");
const successModel = document.getElementById("savedTask");

const saveTask = document.getElementById("viewtask");
const cancelTask = document.getElementById("canceltask");

let Title;
let Description;
let Time;

if (createTask) {
  createTask.addEventListener("click", async function (e) {
    console.log("have been clicked")
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
     console.log("sending request")
      const response = await axios.post("https://todolist-backend-pati.onrender.com/createtask", {
        title: Title,
        description: Description,
        time: Time,
      });
      console.log("request successful")
     
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
    
    window.location.href = "http://127.0.0.1:5500/frontend/tasks.html"
   

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
