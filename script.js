
let sizeSelectorbtns = document.querySelectorAll(".gridSize");
let colorChangebts = document.querySelectorAll(".colorChange");


function generateGrid(rows=16, columns=16){
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${rows}, calc(100%/${rows})); grid-template-rows: repeat(${columns}, calc(100%/${columns})); `);
    //console.log(`Rows ${rows} and columns ${columns}`);
    for(let i=0;i<rows*columns;i++){
        gridContainer.classList.add('grid-container');
        let griditem = document.createElement("div");
        griditem.classList.add("grid-item");
        gridContainer.appendChild(griditem);
        
    }
}

generateGrid();



function sizeSelected(e){
    //console.log(e.target.id);
    let gridContainer = document.querySelector(".grid-container");
    if(e.target.id === "small"){ 
        while (gridContainer.lastElementChild) {
            gridContainer.removeChild(gridContainer.lastElementChild);
          }
          
        generateGrid(16,16);

    }
    else if(e.target.id === 'medium'){
        while (gridContainer.lastElementChild) {
            gridContainer.removeChild(gridContainer.lastElementChild);
          }
          
        generateGrid(32,32);
    }
    else if(e.target.id === 'large'){
        while (gridContainer.lastElementChild) {
            gridContainer.removeChild(gridContainer.lastElementChild);
          }
        generateGrid(64,64);
    }
}


sizeSelectorbtns.forEach(button => {
    button.addEventListener('click', sizeSelected);
})



function getRandomColor(){
    let Colors= "0123456789abcdef"
    let color = '#';
    for(let i=0;i<6;i++){
        color += Colors[Math.floor(Math.random() * 16)]; 
    }
    return color;
}



let blackFill = document.querySelector("#black");
blackFill.addEventListener('click', function(e){
    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = "black";
        });
    })

})

let greyFill =document.querySelector("#grey");
greyFill.addEventListener('click', function(e){
    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = "grey";
        });
    })
})

let rainbowFill =document.querySelector("#rainbow");
rainbowFill.addEventListener('click', function(e){
    let gridItems =document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        });
    })

})


let colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener('change', function(e){
    //console.log(e.target.value);
    let gridItems =  document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = e.target.value;
        })
    })
})

let eraseFill =document.querySelector(".erase");
eraseFill.addEventListener('click', function(e){
    let gridItems =  document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = "white";
        })
    })
})

let clearWindow = document.querySelector(".clear");
clearWindow.addEventListener('click', () => location.reload())

