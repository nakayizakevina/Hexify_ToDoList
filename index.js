const taskTitle = document.getElementById("title");
const toDoTask = document.getElementById("task");
const date = document.getElementById("date");
const taskStore = document.getElementById("tasks")
const createTaskButton = document.getElementById("createTask");

createTaskButton.addEventListener("click", function(){
   const title = taskTitle.value;
   const task  = toDoTask.value;
   const createDate = date.value;

   const heading = document.createElement("h4");
   const message = document.createElement("p");
   const time = document.createElement("div");

   heading.textContent = title;
   message.textContent = task;
   time.textContent = createDate;
   
   const card = document.createElement("div");
   card.classList.add("card")

   card.appendChild(heading);
   card.appendChild(message);
   card.appendChild(time);

   taskStore.appendChild(card)

   taskTitle.value = "";
   toDoTask.value ="";
   date.value =""  

  //  card.addEventcardener("ondrag", function(){
  //    const deleteIcon = document.createElement("img")
     

  //  })
})


