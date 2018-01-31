
/*
paint
 */
const Color = {
    Black: 'Black',
    White: 'White',
    Yellow: 'Yellow',
    Red: 'Red',
    Green: 'Green'
}

class PaintColor {

    PrintColor( c) {
        switch(c) {
            case 'Black':
                return "B";
            case 'White':
                return "W";
            case 'Red':
                return "R";
            case 'Yellow':
                return "Y";
            case 'Green':
                return "G";
        }
        return "X";
    }

    PrintScreen( screen ) {
        for (let i = 0; i < screen.length; i++) {
            let str = ""
            for (let j = 0; j < screen[0].length; j++) {
                str += this.PrintColor( screen[i][j] );
            }
            console.log(str);
        }
    }

    randomInt( n) {
        return parseInt( Math.random() * n );
    }

    paintFill( screen, x, y, oColor, nColor) {

        if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
            return false;
        }
        if (screen[y][x] == oColor) {

            screen[y][x] = nColor;

            this.paintFill(screen, x - 1, y, oColor, nColor); // left
            this.paintFill(screen, x + 1, y, oColor, nColor); // right
            this.paintFill(screen, x, y - 1, oColor, nColor); // top
            this.paintFill(screen, x, y + 1, oColor, nColor); // bottom
        }
        return true;
    }

    startPaint(screen, x, y, nColor) {
        if (screen[y][x] == nColor) {
            return false;
        }
        return this.paintFill(screen, x, y, screen[y][x], nColor);
    }
}


let N = 10;
let screen = [];
for (let i = 0; i < N; i++) {
    screen.push( new Array( N).fill(Color.Black));
}

let paint= new PaintColor();
for (let i = 0; i < 100; i++) {
    screen[paint.randomInt(N)][paint.randomInt(N)] = Color.Green;
}


paint.PrintScreen(screen);
paint.startPaint(screen, 2, 2, Color.White);
console.log( "\n *** new paint screen *** ")
paint.PrintScreen(screen);