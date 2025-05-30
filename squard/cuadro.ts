function drawBinarySquare(size: number): string[] {
    const square: string[] = [];

    for (let row = 0; row < size; row++) {
        let currentRow = '';
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                currentRow += '1';
            } else {
                currentRow += '0';
            }
        }
        square.push(currentRow);
    }

    return square;
}

const square3x3 = drawBinarySquare(3);
console.log('Cuadrado 3x3:');
square3x3.forEach(row => console.log(row));

console.log('\n---');

const square5x5 = drawBinarySquare(5);
console.log('Cuadrado 5x5:');
square5x5.forEach(row => console.log(row));