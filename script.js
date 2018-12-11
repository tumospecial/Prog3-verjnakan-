var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var zombieArr = [];
var generatorArr = [];
var generator1Arr = [];
var generator2Arr = [];

var side = 20

function RadInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}

var matrix = [];
var n = 20
var m = 20
for (var i = 0; i <= n; ++i) {
    matrix[i] = [];
}
for (var y = 0; y <= n; y++) {
    for (var x = 0; x <= m; x++) {
        matrix[y][x] = Math.round(Math.random());
    }
}

var tokos1 = 3;
var tokos2 = 2;
var tokos3 = 1;
var tokos4 = 1;
var tokos5 = 0.1;
var tokos6 = 0.1;
var tokos7 = 0.1;

var qanak1 = n * m * tokos1 / 100;
var qanak2 = n * m * tokos2 / 100;
var qanak3 = n * m * tokos3 / 100;
var qanak4 = n * m * tokos4 / 100;
var qanak5 = n * m * tokos5 / 100;
var qanak6 = n * m * tokos5 / 100;
var qanak7 = n * m * tokos5 / 100;


for (var z = 0; z < qanak1; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 2;
}

for (var z = 0; z < qanak2; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 3;
}

for (var z = 0; z < qanak3; ++z) {
    var xx = RadInt(0, m);
    var yy = RadInt(0, n);
    matrix[xx][yy] = 4;
}

var xx = RadInt(0, m);
var yy = RadInt(0, n);
matrix[xx][yy] = 5;

var xx = RadInt(0, m);
var yy = RadInt(0, n);
matrix[xx][yy] = 6;

var xx = RadInt(0, m);
var yy = RadInt(0, n);
matrix[xx][yy] = 7;



function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr = new Xotaker(x, y);
                xotakerArr.push(gr);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y);
                gishatichArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var zombie = new Zombie(x, y);
                zombieArr.push(zombie);
            }
            else if (matrix[y][x] == 5) {
                var generator = new Generator(x, y);
                generatorArr.push(generator);
            }
            else if (matrix[y][x] == 6) {
                var generator1 = new Generator1(x, y);
                generator1Arr.push(generator1);
            }
            else if (matrix[y][x] == 7) {
                var generator2 = new Generator2(x, y);
                generator2Arr.push(generator2);
            }
        }
    }
}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
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


    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }



    for (var i in gishatichArr) {
        gishatichArr[i].mult()
        gishatichArr[i].move()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }
    for (var i in zombieArr) {
        zombieArr[i].move()
        zombieArr[i].eat()
        zombieArr[i].eat1()
        zombieArr[i].eat2()
    }
    for (var i in generatorArr) {
        generatorArr[i].Generacnel()
    }
    for (var i in generator1Arr) {
        generator1Arr[i].Generacnel1()
    }
    for (var i in generator2Arr) {
        generator2Arr[i].Generacnel2()
    }
}



