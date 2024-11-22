const container = document.querySelector("#container");

const buttonGridSize = document.querySelector("#buttonGridSize");

buttonGridSize.addEventListener("click", changeGridSize);

let gridSize = 10;


function changeGridSize () {

  //aks user for grid size
  gridSize = prompt("Insert Grid Size: ");

  //delete old grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  //create new grid
for (let i = 1; i <= (gridSize*gridSize); i++) {
    console.log(i);
    const newDiv = document.createElement("div");

    //eigene class erstellen, sonst verändert dieses div auch das CONTAINER-div!!!
    newDiv.classList.add("gridItem")

    //die größe jedes gridItems ermitteln um style verändern zu können
    let newSideLength = (100 / gridSize); //in prozent
    let a = newSideLength.toString(); //in string umwandeln, damit das attribut gesetzt werden kann
    let a2 = a+"%"; //% dazuhängen

    newDiv.style.height = a2; //das attribut verändern
    newDiv.style.width = a2; //das attribut verändern
    
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseenter", changeColor);


  //change grid item sizes according to gridSize:
  //const gridItem = document.querySelector(".gridItem");

  //gridItem.style.width = "25%";
  //gridItem.style.height = "25%";
}

}

function changeColor () {
    this.style["background-color"] = "green";

}