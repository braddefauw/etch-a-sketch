let container = document.getElementById("innerDiv");
let clearButton = document.getElementById("clear");
let bwButton = document.getElementById("bw");
let colorButton = document.getElementById("color");
let color = 1;

clearButton.addEventListener("click", clearGrid);
colorButton.addEventListener("click", colorGrid);
bwButton.addEventListener("click", bwGrid);

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", paint);
    }
}

function paint(){
    if(color == 1){
        this.style.backgroundColor = "black";
    }else if(color = 2){
        let random1 = Math.floor(Math.random()*256);
        let random2 = Math.floor(Math.random()*256);
        let random3 = Math.floor(Math.random()*256);
        this.style.backgroundColor = "rgb("+random1+", "+random2+", "+random3+")";
        console.log(this.style.backgroundColor);
    }
}

function colorGrid(){
    let newGrid = prompt("Please enter desired grid size (e.g. 16 will result in a 16x16 grid)");
    newGrid = parseInt(newGrid);
    container.innerHTML = "";
    while(!newGrid || newGrid > 64 || newGrid < 1){
        alert("Try again. Must enter an integer between 1 and 64.");
        newGrid = prompt("Please enter desired grid size.");
    }
    makeRows(newGrid, newGrid);
    color = 2;
}

function bwGrid(){
    let newGrid = prompt("Please enter desired grid size (e.g. 16 will result in a 16x16 grid)");
    newGrid = parseInt(newGrid);
    container.innerHTML = "";
    while(!newGrid || newGrid > 64 || newGrid < 1){
        alert("Try again. Must enter an integer between 1 and 64.");
        newGrid = prompt("Please enter desired grid size.");
    }
    makeRows(newGrid, newGrid);
    color = 1;
}

makeRows(16,16);

function clearGrid() {
    let newGrid = prompt("Please enter desired grid size (e.g. 16 will result in a 16x16 grid)");
    newGrid = parseInt(newGrid);
    container.innerHTML = "";
    while(!newGrid || newGrid > 64 || newGrid < 1){
        alert("Try again. Must enter an integer between 1 and 64.");
        newGrid = prompt("Please enter desired grid size.");
    }
    makeRows(newGrid, newGrid);
}