const cardContainer = document.getElementById("cards__container");

async function displayTask() {
  try {
    const response = await axios.get("http://localhost:4000/api/v1/task");
    const tasks = response.data;
    console.log(tasks);

    tasks.forEach((task) => {
      const cardContent = document.createElement("div");
      cardContent.classList = "card__container";
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
    });
  } catch (error) {
    console.log(error);
  }
}
displayTask();



