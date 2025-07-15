const container = document.querySelector("#container");

for(let i = 0; i < 16; i++) {
  for(let j =0; j <16; j++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("squares");
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseover", (event) => {
    newDiv.style.backgroundColor = 'black';
    });
  }
};

const button = document.createElement("button");