console.log("Welcome to Game of Life")

let cnv = document.getElementById('gol');
cnv.width = innerWidth * 0.8;
cnv.height = innerWidth * 9 / 16 * 0.8;
let ctx = cnv.getContext('2d')

function rec(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function square(x, y, l, color) {
    rec(x, y, l, l, color);
}

let size =
    arr = [];
for (let i = 0; i < 45; i++) {
    arr[i] = []
    for (let j = 0; j < 80; j++) {
        arr[i][j] = 0
    }
}
arr[5][5] = 1
arr[4][4] = 1
arr[6][4] = 1
arr[6][3] = 1
class Game {
    constructor(arr) {
        this.arr = arr;
        this.hsize = 80;
        this.vsize = this.hsize * 9 / 16;
        this.state = 'pause'
    }
    draw() {
        let color = 'white';
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {

                if (arr[i][j] === 1)
                    color = 'teal'
                else
                    color = 'white'
                square(j * cnv.width / this.hsize, i * cnv.height / this.vsize, cnv.width / this.hsize, color)
            }
        }
    }
    count_alive_neighbours(row, col) {
        let alive = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && j >= 0 && i < this.arr.length && j < this.arr[0].length) {
                    if (j === row && j === col && i === j)
                        continue
                    if (this.arr[i][j] === 1)
                        alive += 1;
                }
            }
        }
        return alive;
    }
    step() {
        let nextarr = [...this.arr]
        console.log(nextarr);
        for (let i = 0; i < this.hsize; i++) {
            for (let j = 0; j < this.wsize; i++) {
                let neigh = this.count_alive_neighbours(i, j);
                if (i === 5 && j === 5)
                    console.log(neigh)
                if (neigh < 2)
                    nextarr[i][j] = 0;
                else if (neigh < 4) {

                    nextarr[i][j] = 1;
                } else {
                    nextarr[i][j] = 0;
                    console.log("i die!")
                }
                if (arr[i][j] === 0 && neigh === 3)
                    nextarr[i][j] = 1;
                console.log(i, j)
            }
        }
        this.arr = nextarr;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async loop() {
        while (42) {
            await this.sleep(1000);
            this.step();
            this.draw();
        }
    }
}

let game = new Game(arr);
game.loop();