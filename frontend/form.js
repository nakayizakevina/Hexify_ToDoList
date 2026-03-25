const title = document.getElementById("title");
const description = document.getElementById("description");
const time = document.getElementById("time")
const create_btn = document.getElementById("createtask_btn");

create_btn.addEventListener("click", async function (e) {

  e.preventDefault();

  const Title = title.value;
  const Description = description.value;
  const Time = time.value;

  console.log(Title)
  console.log(Description)
  console.log(Time)

  if (Title === "") {
    console.log("Title is required");
  } 
  if (Description === "") {
    console.log("Description is required");
  }

  try {
    const response = await axios.post("http://localhost:4000/api/v1/task", {
     title: Title,
      description: Description
    });
    console.log(response.data);
  } catch (error) {
    console.log("Sorry the data couldn't be fetched");
  }

  title.value = "";
  description.value = "";
  time.value="";
});
