const container = document.querySelector("#container");
const body = document.querySelector("body");

for(let i = 0; i < 16; i++) {
  for(let j = 0; j <16; j++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("squares");
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseover", (event) => {
    newDiv.style.backgroundColor = 'black';
    });
  }
};

const button = document.createElement("button");
button.textContent = "restart";
button.classList.add("restart");
body.appendChild(button);

button.addEventListener("click", (event) => {
  let gridSquares = Number(prompt("How many squares do you want? (Under 100)"));

  while (container.firstChild) {
    if(container.firstChild !== button) {
      container.removeChild(container.firstChild);
    } else {
      break;
    }
  };

  if (gridSquares >= 100) {
    alert("Too many squares.");
  } else {
    container.style.display = 'flex';
    container.style.width = `${(gridSquares * 20) + ((gridSquares - 1) * 1)}px`;
    for(let i = 0; i < gridSquares; i++) {
      for (let j = 0; j < gridSquares; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("squares");
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseover", (event) => {
        newDiv.style.backgroundColor = 'black';
        
        })
      }
    }
  } 
});

