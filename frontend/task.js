const cardContainer = document.getElementById("cards__container");

async function displayTask() {
  try {
    const response = await axios.get("http://localhost:4000/api/v1/task");
    const tasks = response.data.tasks;

    tasks.forEach((task) => {
      const cardContent = document.createElement("div");
      cardContent.classList = "card__container";
      const card = document.createElement("div");
      card.classList = "card__details";
      card.innerHTML = `
    <div class="card">
    <div class="icon__container">
     <img src=${task.image} class="icon"/>
    </div>
    <div class="card__content">
        <h4>${task.title}</h4>
        <p class="message">${task.description}</p>
        <div class="duration">
            <p class="time">${task.time}</p>
        </div>
    </div>
    </div>
`;
      cardContent.appendChild(card);
      cardContent.appendChild(deleteBtn);

      cardContainer.appendChild(cardContent);
    });
  } catch (error) {
    console.log("Sorry the data couldn't be saved");
  }
}

displayTask;
