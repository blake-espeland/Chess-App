class Board{
    constructor(tiles, pieces){
        this.gameState = true;
        this.tiles=tiles;
        this.pieces=pieces;
        this.turn=0;
    }
    getTiles(){
        return this.tiles;
    }
    setTiles(newTiles){
        this.tiles = newTiles;
    }
    getPieces(){
        return pieces;
    }
    setPieces(newPieces){
        this.pieces = newPieces
    }
    newTurn(){
        this.turn = turn===0 ? turn++ : turn--;
    }
    update(){
        /*
        This function updates the board for piece moves,
        highlights, and captures
        */

    }
    highlight(legal){
        for (let i of legal){
            for (let j of this.getTiles()){
                if(j.getPiece().getx() === i[0] && j.getPiece().gety() === i[1]){
                    j.setColor('yellow');
                }
            }
        }
    }
    render(element){
        element.style.borderStyle = 'solid';
        element.style.borderWidth = '1px';
        element.style.borderColor = 'black';
        for (var x = 0; x < 8; x++){
            let row = document.createElement("div");
            row.style.width = '100%';
            row.style.height = '12.5%';
            row.style.margin = '0 auto';
            row.style.display = 'flex';
            for(var y = 0; y < 8; y++){
                let index = (x * 8) + y
                var tile = document.createElement('div');
                tile.style.width = '12.5%'
                tile.style.height = '100%';
                tile.style.textAlign = 'center';
                let background
                tile.style.backgroundColor = background = this.tiles[index].getColor();
                tile.style.color = background === 'white' ? 'black' : "white" 
                tile.innerHTML = this.tiles[index].getPiece() ? this.tiles[index].getPiece().getName() : ''
                var {tiles: temp, highlight } = this
                console.log(highlight)
                tile.addEventListener('click', function(){
                    highlight([this, temp[index].getPiece().legalMoves()])
                })
                row.appendChild(tile);
            }
        element.appendChild(row);
    }
        
    }

}