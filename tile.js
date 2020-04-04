class Tile{
    constructor(isOccupied, x, y, color, piece){
        this.occupied = isOccupied;
        this.x = x;
        this.y = y;
        this.color=color;
        this.piece=piece[0];
    }

    getOccupied(x, y){
        return this.isOccupied;
    }
    setOccupied(){
        this.occupied = !this.occupied;
    }
    setColor(newColor){
        this.color = newColor;
    }
    getColor(){
        return this.color;
    }
    getx(){
        return this.x;
    }
    gety(){
        return this.y;
    }
    getPiece(){
        return this.piece;
    }
    setPiece(newPiece){
        this.piece = newPiece;
    }

}