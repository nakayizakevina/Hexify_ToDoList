const cardContainer = document.getElementById("cards__container");

const cardDetails = [
  {
    image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTUuNjggMTQuNTg3YzMuNDkgMCA2LjMyLTIuODE4IDYuMzItNi4yOTRTMTkuMTcgMiAxNS42OCAyUzkuMzYzIDQuODE4IDkuMzYzIDguMjkzYzAgMS42MS43MzQgMi43ODEuNzM0IDIuNzgxbC03LjY0MiA3LjYxYy0uMzQzLjM0Mi0uODIzIDEuMjMgMCAyLjA1bC44ODIuODc4Yy4zNDMuMjkzIDEuMjA1LjcwMyAxLjkxIDBsMS4wMy0xLjAyNGMxLjAyOCAxLjAyNCAyLjIwNC40MzkgMi42NDUtLjE0N2MuNzM0LTEuMDI0LS4xNDctMi4wNDktLjE0Ny0yLjA0OWwuMjk0LS4yOTNjMS40MSAxLjQwNiAyLjY0NS41ODYgMy4wODYgMGMuNzM1LTEuMDI0IDAtMi4wNDkgMC0yLjA0OWMtLjI5NC0uNTg1LS44ODItLjU4NS0uMTQ3LTEuMzE3bC44ODItLjg3OGMuNzA1LjU4NSAyLjE1NS43MzIgMi43OTIuNzMyWiIvPjxwYXRoIGQ9Ik0xNy44ODUgOC4yOTRhMi4yIDIuMiAwIDAgMS0yLjIwNCAyLjE5NWEyLjIgMi4yIDAgMCAxLTIuMjA0LTIuMTk1YTIuMiAyLjIgMCAwIDEgMi4yMDQtMi4xOTZhMi4yIDIuMiAwIDAgMSAyLjIwNCAyLjE5NloiLz48L2c+PC9zdmc+",
    title: "Passwords",
    message:
      "You can't back up the application without bypassing the aptical gb bus!",
    time: "2 hours ago",
  },
    {
      image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCA2aDl2Mkg4eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMCAySDZDNC4zNSAyIDMgMy4zNSAzIDV2MTRjMCAxLjY1IDEuMzUgMyAzIDNoMTV2LTJINmMtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMWgxNGMuNTUgMCAxLS40NSAxLTFWM2MwLS41NS0uNDUtMS0xLTFtLTYgMTRINmMtLjM1IDAtLjY5LjA3LTEgLjE4VjVjMC0uNTUuNDUtMSAxLTFoMTN2MTJ6Ii8+PC9zdmc+",
      title: "Books",
      message: "We need to parese the cross platform ip sensor!",
      time: "10 hours ago"
     },
      {
      image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMS4yNWE5Ljc1IDkuNzUgMCAwIDAtNi44OTQgMTYuNjQ0YS43NS43NSAwIDEgMCAxLjA2LTEuMDZhOC4yNSA4LjI1IDAgMSAxIDExLjY2OCAwYS43NS43NSAwIDAgMCAxLjA2IDEuMDZBOS43NSA5Ljc1IDAgMCAwIDEyIDEuMjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgNS4yNWE1Ljc1IDUuNzUgMCAwIDAtNC45OCA4LjYyNWEuNzUuNzUgMCAwIDAgMS4zLS43NWE0LjI1IDQuMjUgMCAxIDEgNy4zNiAwYS43NS43NSAwIDEgMCAxLjMuNzVBNS43NSA1Ljc1IDAgMCAwIDEyIDUuMjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgOC43NWEyLjI1IDIuMjUgMCAxIDAgMCA0LjVhMi4yNSAyLjI1IDAgMCAwIDAtNC41bTAgNS41YTIuMjUgMi4yNSAwIDAgMC0yLjI1IDIuMjV2NGEyLjI1IDIuMjUgMCAwIDAgNC41IDB2LTRBMi4yNSAyLjI1IDAgMCAwIDEyIDE0LjI1Ii8+PC9zdmc+",
      title:"Podcasts",
      message:"We need to reboot the open source ram system",
      time: "16 hours ago"
     },
     {
      image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTMuNSAzLjV2MTJhMiAyIDAgMCAwIDIgMkgxN20tMTAuNS02djNtNC02djZtNC05djkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
      title: "Numbers",
      message: "We need to connect the auxiliary hdd program!",
      time: "yesterday"
     }
];

cardDetails.forEach(content);
function content(item) {
  const cardContent = document.createElement("div");
  cardContent.classList = "card__container";
  const card = document.createElement("div");
  card.classList = "card__details"
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
`
const deleteBtn = document.createElement("div");
deleteBtn.classList = "deleteIcon__container"
deleteBtn.innerHTML = ` 
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNjAgMjU2SDk2YTMyIDMyIDAgMCAxIDAtNjRoMjU2Vjk2YTMyIDMyIDAgMCAxIDMyLTMyaDI1NmEzMiAzMiAwIDAgMSAzMiAzMnY5NmgyNTZhMzIgMzIgMCAxIDEgMCA2NGgtNjR2NjcyYTMyIDMyIDAgMCAxLTMyIDMySDE5MmEzMiAzMiAwIDAgMS0zMi0zMnptNDQ4LTY0di02NEg0MTZ2NjR6TTIyNCA4OTZoNTc2VjI1NkgyMjR6bTE5Mi0xMjhhMzIgMzIgMCAwIDEtMzItMzJWNDE2YTMyIDMyIDAgMCAxIDY0IDB2MzIwYTMyIDMyIDAgMCAxLTMyIDMybTE5MiAwYTMyIDMyIDAgMCAxLTMyLTMyVjQxNmEzMiAzMiAwIDAgMSA2NCAwdjMyMGEzMiAzMiAwIDAgMS0zMiAzMiIvPjwvc3ZnPg==" class="delete__icon"/>
`

    let isDraggable = false;
    let mouseStartX = 0;
    let mouseCurrentX = 0;
    
    cardContent.addEventListener("mousedown",(e) => {
        isDraggable = true;
        mouseStartX = e.clientX;
    });

    cardContent.addEventListener("mousemove", (e) => {
        if( isDraggable === false) return;
        mouseCurrentX = e.clientX;
        let distanceMouseMoved = mouseCurrentX - mouseStartX;
        if(distanceMouseMoved < 0){
            card.style.transform = `translateX ${distanceMouseMoved}px`;
        }
    });

    cardContent.addEventListener("mouseup", (e) =>{
        if(isDraggable === false) return;
        
        let distanceMouseMoved = mouseCurrentX - mouseStartX;
        if(distanceMouseMoved < -80 ){
            card.style.transform = `translateX(-80px)`;

        }else{
            card.style.transform = `translateX(0)`;
        }
    })

   const deleteButton = deleteBtn.querySelector(".delete__icon");
   deleteButton.addEventListener("click", function(){
    console.log("have been deleted")
    card.remove();
    });

    cardContent.appendChild(card)
    cardContent.appendChild(deleteBtn)

  cardContainer.appendChild(cardContent);
}
