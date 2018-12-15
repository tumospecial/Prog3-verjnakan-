var side = 20
var socket = io();
var m = 20 
var n = 20
function setup() {
    frameRate(5);
    createCanvas(m * side, n * side);
    background('#acacac');
}

function drawMatrix(matrix) {

    for (var y = 0; y < n; y++) {
        for (var x = 0; x < m; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }

            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("white");
            }
            else if (matrix[y][x] == 6) {
                fill("white");
            }
            else if (matrix[y][x] == 7) {
                fill("white");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side)

        }
    }
}

socket.on("matrix", drawMatrix);





