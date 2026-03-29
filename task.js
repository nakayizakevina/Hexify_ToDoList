const cardContainer = document.getElementById("cards__container");
const searchTitle = document.getElementById("search__title");
const searchTask = document.getElementById("search__task");

const API = "https://todolist-backend-pati.onrender.com/api/v1/task";

async function displayTask() {
  try {
    const response = await axios.get(`${API}/getalltasks`);
    const tasks = response.data;

    tasks.forEach((task) => {
      const cardContent = document.createElement("div");
      cardContent.classList = "card__container task";

      const card = document.createElement("div");
      card.classList = "card__details";
      card.innerHTML = `
    <div class="card">
    <div class="card__content">
        <h4>${task.title}</h4>
        <p class="message">${task.description}</p>
        <div class="duration">
            <p class="time">${task.time}</p>
        </div>
    </div>
    </div>
`;

      const actionsContainer = document.createElement("div");
      actionsContainer.classList = "actions__container";

      const deleteBtn = document.createElement("div");
      deleteBtn.classList = "deleteIcon__container";
      const editBtn = document.createElement("div");
      editBtn.classList = "editIcon__container";

      deleteBtn.innerHTML = ` 
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNjAgMjU2SDk2YTMyIDMyIDAgMCAxIDAtNjRoMjU2Vjk2YTMyIDMyIDAgMCAxIDMyLTMyaDI1NmEzMiAzMiAwIDAgMSAzMiAzMnY5NmgyNTZhMzIgMzIgMCAxIDEgMCA2NGgtNjR2NjcyYTMyIDMyIDAgMCAxLTMyIDMySDE5MmEzMiAzMiAwIDAgMS0zMi0zMnptNDQ4LTY0di02NEg0MTZ2NjR6TTIyNCA4OTZoNTc2VjI1NkgyMjR6bTE5Mi0xMjhhMzIgMzIgMCAwIDEtMzItMzJWNDE2YTMyIDMyIDAgMCAxIDY0IDB2MzIwYTMyIDMyIDAgMCAxLTMyIDMybTE5MiAwYTMyIDMyIDAgMCAxLTMyLTMyVjQxNmEzMiAzMiAwIDAgMSA2NCAwdjMyMGEzMiAzMiAwIDAgMS0zMiAzMiIvPjwvc3ZnPg==" class="delete__icon"/>
`;
      editBtn.innerHTML = ` <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQuODUgMy4xNWEzLjkzIDMuOTMgMCAwIDAtNS41NjEgMEw0LjUwMyAxNy45MzdjLS40NC40NC0uNzYuOTg2LS45MjggMS41ODZsLTEuNTQ3IDUuNTI1YS43NS43NSAwIDAgMCAuOTI0LjkyNGw1LjUyNC0xLjU0N2EzLjYgMy42IDAgMCAwIDEuNTg3LS45MjhMMjQuODUgOC43MWEzLjkzIDMuOTMgMCAwIDAgMC01LjU2bS00LjUgMS4wNmEyLjQzMiAyLjQzMiAwIDEgMSAzLjQzOSAzLjQ0bC0xLjU0IDEuNTM5bC0zLjQzOS0zLjQ0em0tMi42IDIuNmwzLjQ0IDMuNDRMOS4wMDIgMjIuNDM3YTIuMSAyLjEgMCAwIDEtLjkzLjU0NGwtNC4yNDEgMS4xODdsMS4xODctNC4yNGEyLjEzIDIuMTMgMCAwIDEgLjU0NC0uOTN6Ii8+PC9zdmc+" class="edit__icon"/>`;

      let isDraggable = false;
      let mouseStartX = 0;
      let mouseCurrentX = 0;

      cardContent.addEventListener("mousedown", (e) => {
        isDraggable = true;
        mouseStartX = e.clientX;
      });

      cardContent.addEventListener("mousemove", (e) => {
        if (isDraggable === false) return;
        mouseCurrentX = e.clientX;
        let distanceMouseMoved = mouseCurrentX - mouseStartX;
        if (distanceMouseMoved < 0) {
          card.style.transform = `translateX ${distanceMouseMoved}px`;
        }
      });

      cardContent.addEventListener("mouseup", (e) => {
        if (isDraggable === false) return;
        mouseCurrentX = e.clientX;
        let distanceMouseMoved = mouseCurrentX - mouseStartX;
        if (distanceMouseMoved < -80) {
          card.style.transform = `translateX(-80px)`;
        } else {
          card.style.transform = `translateX(0)`;
        }
      });

      const deleteButton = deleteBtn.querySelector(".delete__icon");
      deleteButton.addEventListener("click", async function () {
        try {
          const response = await axios.delete(`${API}/deletetask/${task._id}`);

          card.remove();
        } catch (error) {
          console.log("can't be deleted");
        }
      });

      const editButton = editBtn.querySelector(".edit__icon");
      editButton.addEventListener("click", function () {
        localStorage.setItem("editTaskId", task._id);
        localStorage.setItem("editTitle", task.title);
        localStorage.setItem("editDescription", task.description);
        localStorage.setItem("editTime", task.time);

        window.location.href = "http://127.0.0.1:5500/index.html";
      });

      cardContent.appendChild(card);
      actionsContainer.appendChild(deleteBtn);
      actionsContainer.appendChild(editBtn);
      cardContent.appendChild(actionsContainer);

      cardContainer.appendChild(cardContent);
    });
  } catch (error) {
    console.log(error);
  }
}
displayTask();

searchTask.addEventListener("click", async function (e){
  console.log("have been clicked")
  const userTitle = searchTitle.value;
  console.log(userTitle)
  try {
   
      const response = await axios.get(`${API}/getsingletask/${userTitle}`)
      const foundTask = response.data;

      console.log(foundTask)
    const allTasks = document.querySelectorAll(".task");
    console.log(allTasks)

    allTasks.forEach(task => {
      if (task.dataset.id === foundTask._id) {
        task.style.display = "block"; 
      } else {
        task.style.display = "none"; 
      }
    });


  } catch (error) {
     console.log(error);
  }
})



