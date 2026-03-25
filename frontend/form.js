const title = document.getElementById("title");
const description = document.getElementById("description");
const time = document.getElementById("time");
const createTask = document.getElementById("createtask_btn");
const titleAlert = document.getElementById("title_alert")
const descriptionAlert = document.getElementById("description_alert")

const model = document.getElementById("model");
const successModel = document.getElementById("savedTask")

const saveTask = document.getElementById("savetask");
const cancelTask = document.getElementById("canceltask");

const cardContainer = document.getElementById("cards__container");

let Title;
let Description;
let Time;

const cardDetails = [];

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
    descriptionAlert.style.display = "block"
    return
  }

  model.style.display = "block";
});

saveTask.addEventListener("click", async function (e) {
  try {
    const response = await axios.post("http://localhost:4000/api/v1/task", {
      title: Title,
      description: Description,
      time:Time

    });

  cardDetails.push({
  title: Title,
  message: Description,
  time: Time,
  image: "yourImagePathHere"
});

successModel.style.display = "block"

setTimeout( window.location.href = "http://127.0.0.1:5500/frontend/tasks.html", 80000)



    cardDetails.forEach(content);
    function content(item) {
      const cardContent = document.createElement("div");
      cardContent.classList = "card__container";
      const card = document.createElement("div");
      card.classList = "card__details";
      card.innerHTML = `
    <div class="card">
    <div class="icon__container">
     <img src=${item.image} class="icon"/>
    </div>
    <div class="card__content">
        <h4>${item.title}</h4>
        <p class="message">${item.message}</p>
        <div class="duration">
            <p class="time">${item.time}</p>
        </div>
    </div>
    </div>
`;
      const deleteBtn = document.createElement("div");
      deleteBtn.classList = "deleteIcon__container";
      deleteBtn.innerHTML = ` 
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNjAgMjU2SDk2YTMyIDMyIDAgMCAxIDAtNjRoMjU2Vjk2YTMyIDMyIDAgMCAxIDMyLTMyaDI1NmEzMiAzMiAwIDAgMSAzMiAzMnY5NmgyNTZhMzIgMzIgMCAxIDEgMCA2NGgtNjR2NjcyYTMyIDMyIDAgMCAxLTMyIDMySDE5MmEzMiAzMiAwIDAgMS0zMi0zMnptNDQ4LTY0di02NEg0MTZ2NjR6TTIyNCA4OTZoNTc2VjI1NkgyMjR6bTE5Mi0xMjhhMzIgMzIgMCAwIDEtMzItMzJWNDE2YTMyIDMyIDAgMCAxIDY0IDB2MzIwYTMyIDMyIDAgMCAxLTMyIDMybTE5MiAwYTMyIDMyIDAgMCAxLTMyLTMyVjQxNmEzMiAzMiAwIDAgMSA2NCAwdjMyMGEzMiAzMiAwIDAgMS0zMiAzMiIvPjwvc3ZnPg==" class="delete__icon"/>
`;

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
      deleteButton.addEventListener("click", function () {
        console.log("have been deleted");
        card.remove();
      });

      cardContent.appendChild(card);
      cardContent.appendChild(deleteBtn);

      cardContainer.appendChild(cardContent);
    }

    console.log(response.data);


   
  } catch (error) {
    console.log("Sorry the data couldn't be saved");
  }

  title.value = "";
  description.value = "";
  time.value = "";

  model.style.display = "none";
});

cancelTask.addEventListener("click", function () {
  title.value = "";
  description.value = "";
  time.value = "";

  model.style.display = "none";
});
