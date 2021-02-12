console.log("Welcome to Game of Life")

let cnv = document.getElementById('gol');
cnv.width = innerWidth;
cnv.height = innerWidth * 9/16;
let ctx =cnv.getContext('2d')

function rec(x, y, w, h, color)
{
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function square(x, y, l, color)
{
    rec(x, y, l, l, color);
}

rec(10, 10, 10, 10, 'black')

class Game{
    constructor(array){
        this.arr = array;
    }
    draw(){
        while(42)
        {
            for (let i = 0; i < arr.length; i++)
            {
                for (let j = 0; j< arr[i].length; j++)
                    
            }
        }
    }
}

