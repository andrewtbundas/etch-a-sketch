//create 16x16 grid
//First create a row, then fill with 16 divs to represent columns

let currMode = 'black';


const GRID = document.querySelector('#grid')
const RAINBOW = document.getElementById('rainbow')
const BLACK = document.getElementById('black');

document.getElementById('reset').addEventListener('click',resetGrid)
RAINBOW.addEventListener('click', event => {
    changeMode('rainbow');
    RAINBOW.classList.add('active-mode')
    document.querySelectorAll('.space').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = randomColor();
        })
    })
})

BLACK.addEventListener('click', event => {
    changeMode('black')
    BLACK.classList.add('active-mode');
    document.querySelectorAll('.space').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = 'black';
        })
    })
})

function changeMode(newMode){
    if (currMode == 'black'){
        BLACK.classList.remove('active-mode')
    }

    else if (currMode == 'rainbow'){
        RAINBOW.classList.remove('active-mode')
    }
    currMode = newMode;
}

function createRow(n,dim){
    let div_row = document.createElement('div')
    console.log(GRID)


    let div_column 
    div_row.classList.add("row-" + n)
    GRID.appendChild(div_row)

    for (i=0;i<dim;i++){
        div_column = document.createElement('div')
        div_column.classList.add("col-" + i, 'space')
        div_row.appendChild(div_column)
    } 
    
}


function generateGrid(dim){
    for (x=0; x<dim; x++){
        createRow(x,dim)
    }

    if (currMode == 'black'){
    document.querySelectorAll('.space').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = 'black';
        })
    });
}

    else if (currMode == 'rainbow'){
        document.querySelectorAll('.space').forEach(item => {
            item.addEventListener('mouseover', event => {
                item.style.backgroundColor = randomColor();
            })
        })
    }
    
}

generateGrid(16);

function deleteGrid(){
    while (GRID.firstChild){
        GRID.removeChild(GRID.firstChild);
    }
}

function resetGrid(){
    let gridSize = parseInt(prompt("Enter a new grid size (1-100): "))

    if (gridSize>100){
        gridSize = 100;
    }

    deleteGrid()
    generateGrid(gridSize)
}

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

