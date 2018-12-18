var side = 20
var socket = io();
var m = 20
var n = 20
var weather = "garun";

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
                fill("#778899");
            }
            else if (matrix[y][x] == 6) {
                fill("#778899");
            }
            else if (matrix[y][x] == 7) {
                fill("#778899");
            }
            else if (matrix[y][x] == 0) {
                if (weather == "garun") {
                    fill("#9BF77E")
                }
                else if (weather == "amar") {
                    fill("#F7A27E")
                }
                else if (weather == "ashun") {
                    fill("#FF9DE9")
                }
                else if (weather == "dzmer") {
                    fill("#D0E1F8")
                }
            }
            rect(x * side, y * side, side, side)

        }
    }
}

socket.on("matrix", drawMatrix);
socket.on("exanak", function (w) {
    weather = w;
});





