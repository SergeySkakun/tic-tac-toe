class TicTacToe {
    constructor() {
        this.array = [[null, null, null],[null, null, null],[null, null, null]];
        this.symbol = 'x';
        this.leftTturns = 9;
    }

    getCurrentPlayerSymbol() {

        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.array[rowIndex][columnIndex]) return this;

        this.array[rowIndex][columnIndex] = this.symbol;
        this.leftTturns--;

        if(this.symbol == 'x')
        {
            this.symbol = 'o';
        }
        else this.symbol = 'x';

        return this;
    }

    isFinished() {
        if (this.isDraw() || this.getWinner()) return true;
        return false;
    }

    getWinner() {
        if (this.leftTturns > 4) return null; // самая быстрая победа возможна на 5 ходу
        //проверка строк
        for (var i = 0; i < 3; i++){
            if (this.array[i][0] == this.array[i][1] &&
                this.array[i][0] == this.array[i][2]) {
                return this.array[i][0];
            }
        }
        //проверка столбцов
        for (var l = 0; l < 3; l++){
            if (this.array[0][l] == this.array[1][l] &&
                this.array[0][l] == this.array[2][l]) {
                return this.array[0][l];
            }
        //проверка диагоналей
        if (this.array[0][0] == this.array[1][1] &&
            this.array[0][0] == this.array[2][2]) return this.array[0][0];

        if (this.array[0][2] == this.array[1][1] &&
            this.array[0][2] == this.array[2][0]) return this.array[0][2];
         }
        return null;
    }

    noMoreTurns() {
        if (this.leftTturns  > 0) return false;
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()) return true;

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
