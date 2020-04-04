
class Piece{
    constructor(name, x, y, team){
        this.x=x;
        this.y=y;
        this.name=name;
        this.isAlive=true;
        this.team=team;
    }

    kill(){
        this.isAlive = false;
    }


    checkKill(x, y){
        if(Board === null){
            console.log('kill')
        }
    }

    legalMoves(){
        let x = this.getx()
        let y = this.gety()
        if(8 > x > 0 && 8 > y > 0){
            if(this.name === 'pawn'){
               return [[x + 1, y], [x + 2, y]] 
            }
            if(this.name === 'knight'){
                return [[x + 2, y + 1],[x + 2, y - 1],[x - 2, y + 1],
                    [x - 2, y - 1],[x - 1, y - 2],[x - 1, y + 2],[x + 1, y - 2]
                    [x + 1, y + 2]]
            }
            
            if(this.name === 'bishop'){
                
            }
            if(this.name === 'rook'){
                
            }
            if(this.name === 'pawn'){
                
            }
            if(this.name === 'pawn'){
                
            }
        }
    }

    toQueen(){
        this.name='queen';
    }

    getTeam(){
        return this.team;
    }

    getState(){
        return this.isAlive;
    }
    setState(newState){
        this.isAlive = newState;
    }

    getName(){
        return this.name;
    }

    getx(){
        return this.x;
    }
    setx(newPos){
        this.x = newPos;
    }
    gety(){
        return this.y;
    }
    sety(newPos){
        this.y = newPos;
    }

}