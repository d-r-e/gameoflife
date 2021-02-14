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
arr[5][4] = 1
arr[4][5] = 1
arr[4][4] = 1
arr[6][4] = 1
arr[6][5] = 1
class Game {
    constructor(arr) {
        this.arr = [...arr];
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
                    if (this.arr[i][j] === 1 && i != j && i != col)
                        alive += 1;
                }
            }
        }

        return alive;
    }
    step() {
        let nextarr = [...this.arr]
            //console.log(nextarr);
        let neigh = 8;
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[0].length; j++) {
                neigh = this.count_alive_neighbours(i, j);
                if (neigh < 2)
                    nextarr[i][j] = 0;
                else if (neigh >= 2 && neigh <= 3 && arr[i][j] === 1) {
                    nextarr[i][j] = 1;
                } else if (neigh > 3) {
                    console.log("buf")
                    nextarr[i][j] = 0;
                } else if (arr[i][j] === 0 && neigh === 3)
                    nextarr[i][j] = 1;
            }
        }
        this.arr = [...nextarr]
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async loop() {
        while (42) {
            await this.sleep(500);

            this.draw();
            this.step();
        }
    }
}

let game = new Game(arr);
game.loop();