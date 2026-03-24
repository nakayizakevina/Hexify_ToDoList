const title = document.getElementById("title");
const description = document.getElementById("description");
const create_btn = document.getElementById("createtask_btn");

create_btn.addEventListener("click", async function (e) {
  e.preventDefault();

  const Title = title.value;
  const Description = description.value;

  if (Title === "") {
    console.log("Title is required");
  } else if (Description === "") {
    console.log("Description is required");
  }

  try {
    const response = await fetch("http://localhost:4000/api/v1/task", {
      method: "post",
      "Content-Type": "application/json",
    });
    const fetchedData = await response.json();
    console.log(fetchedData);
  } catch (error) {
    console.log("Sorry the data couldn't be fetched");
  }

  Title.value = "";
  Description.value = "";
});
