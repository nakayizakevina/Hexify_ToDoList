const cardContainer = document.getElementById("cards__container");

const cardDetails = [
    {
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjEgMmE4Ljk5OCA4Ljk5OCAwIDAgMC04LjYxMiAxMS42MTJMMiAyNHY2aDZsMTAuMzg4LTEwLjM4OEE5IDkgMCAxIDAgMjEgMm0wIDE2YTcgNyAwIDAgMS0yLjAzMi0uMzAybC0xLjE0Ny0uMzQ4bC0uODQ3Ljg0N2wtMy4xODEgMy4xODFMMTIuNDE0IDIwTDExIDIxLjQxNGwxLjM3OSAxLjM3OWwtMS41ODYgMS41ODZMOS40MTQgMjNMOCAyNC40MTRsMS4zNzkgMS4zNzlMNy4xNzIgMjhINHYtMy4xNzJsOS44MDItOS44MDJsLjg0OC0uODQ3bC0uMzQ4LTEuMTQ3QTcgNyAwIDEgMSAyMSAxOCIvPjxjaXJjbGUgY3g9IjIyIiBjeT0iMTAiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
    title: "Passwords",
    message: "You can't back up the application without bypassing the aptical gb bus!",
    time: "2 hours ago"
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
]

cardDetails.forEach(cards);
function cards(item){
    const card = document.createElement("div");
    card.classList="card";

    card.innerHTML = `
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
    `
     const deleteIcon = document.createElement("div");
     deleteIcon.classList="deleteIcon__container";
     deleteIcon.innerHTML = `
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNjAgMjU2SDk2YTMyIDMyIDAgMCAxIDAtNjRoMjU2Vjk2YTMyIDMyIDAgMCAxIDMyLTMyaDI1NmEzMiAzMiAwIDAgMSAzMiAzMnY5NmgyNTZhMzIgMzIgMCAxIDEgMCA2NGgtNjR2NjcyYTMyIDMyIDAgMCAxLTMyIDMySDE5MmEzMiAzMiAwIDAgMS0zMi0zMnptNDQ4LTY0di02NEg0MTZ2NjR6TTIyNCA4OTZoNTc2VjI1NkgyMjR6bTE5Mi0xMjhhMzIgMzIgMCAwIDEtMzItMzJWNDE2YTMyIDMyIDAgMCAxIDY0IDB2MzIwYTMyIDMyIDAgMCAxLTMyIDMybTE5MiAwYTMyIDMyIDAgMCAxLTMyLTMyVjQxNmEzMiAzMiAwIDAgMSA2NCAwdjMyMGEzMiAzMiAwIDAgMS0zMiAzMiIvPjwvc3ZnPg==" class="delete__icon"/>
    `
cardContainer.appendChild(card);
cardContainer.appendChild(deleteIcon)

card.addEventListener("drag", function(){
    alert("have been dragged")
});

}
