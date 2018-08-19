const DEFAULT_GRID_SIZE = 16; // Sets to default size of grid to 16x16
var numOfTiles = 0;

var container = document.querySelector("#container");

function drawGrid() {
     //var sizeOfTiles = (100/gridsize);
    if(!numOfTiles) {
        numOfTiles = DEFAULT_GRID_SIZE;
    }
    var gridSize = 100 / numOfTiles;
    for(i = 0; i < Math.pow(numOfTiles, 2); i++) {
        var div = document.createElement("div");
        div.id = `${i}`;
        div.classList.add('tile');
        div.style.width = gridSize + "%";
        div.style.height = gridSize + "%";
        div.style.opacity = "0.3";
        document.getElementById("container").appendChild(div);
    }
}

function clearGrid () {
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.style.opacity = "0.3";
        tile.style.background = `rgb(255,255,255)`;
    });
    numOfTiles = prompt("What size grid would you like?", "16");
    container.innerHTML = '';
    drawGrid();
    colorGrid();
}

function colorGrid () {
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.addEventListener('mouseenter', (e) => {
        let shade = tile.style.opacity;
        if(parseInt(shade) < 1) {
            shade = (parseFloat(shade) + 0.1).toString();
            tile.style.opacity = shade;
        }
        let r = randomNumber(256);
        let g = randomNumber(256);
        let b = randomNumber(256);
        if(parseInt(tile.style.opacity) < 1) {
            tile.style.background = `rgb(${r},${g},${b})`;
        } else {
            tile.style.background = `rgb(0,0,0)`;
        }
        });
    });
}

function randomNumber (number) {
    return Math.floor(Math.random() * number);
}

drawGrid();
colorGrid();