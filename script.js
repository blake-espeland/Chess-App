//import { Piece } from './piece.js';
const elem = document.getElementById('board');
// Teams: 0 = white && 1 = black

// WHITE PIECES
let king0 = new Piece('king', 7,4, 0);
let queen0 = new Piece('queen', 7,3, 0)
let rook00 = new Piece('rook', 7,0, 0);
let rook01 = new Piece('rook', 7,7, 0);
let knight00 = new Piece('knight', 7,1, 0);
let knight01 = new Piece('knight', 7,6, 0);
let bishop00 = new Piece('bishop', 7,2, 0);
let bishop01 = new Piece('bishop', 7,5, 0);
let pawn00 = new Piece('pawn', 6,0, 0);
let pawn01 = new Piece('pawn', 6,1, 0);
let pawn02 = new Piece('pawn', 6,2, 0);
let pawn03 = new Piece('pawn', 6,3, 0);
let pawn04 = new Piece('pawn', 6,4, 0);
let pawn05 = new Piece('pawn', 6,5, 0);
let pawn06 = new Piece('pawn', 6,6, 0);
let pawn07 = new Piece('pawn', 6,7, 0);
var whitePieces = [king0, queen0, rook00, rook01, knight00, knight01, bishop00, bishop01,
     pawn00, pawn01, pawn02, pawn03, pawn04, pawn05, pawn06, pawn07];
// BLACK PIECES
let king1 = new Piece('king', 0, 4, 1);
let queen1 = new Piece('queen', 0,3, 1)
let rook10 = new Piece('rook', 0,0, 1);
let rook11 = new Piece('rook', 0,7, 1);
let knight10 = new Piece('knight', 0,1, 1);
let knight11 = new Piece('knight', 0,6, 1);
let bishop10 = new Piece('bishop', 0,2, 1);
let bishop11 = new Piece('bishop', 0,5, 1);
let pawn10 = new Piece('pawn', 1,0, 1);
let pawn11 = new Piece('pawn', 1,1, 1);
let pawn12 = new Piece('pawn', 1,2, 1);
let pawn13 = new Piece('pawn', 1,3, 1);
let pawn14 = new Piece('pawn', 1,4, 1);
let pawn15 = new Piece('pawn', 1,5, 1);
let pawn16 = new Piece('pawn', 1,6, 1);
let pawn17 = new Piece('pawn', 1,7, 1);
var blackPieces = [king1, queen1, rook10, rook11, knight10, knight11, bishop10, bishop11,
    pawn10, pawn11, pawn12, pawn13, pawn14, pawn15, pawn16, pawn17];

function initBoard(white, black){
     let tiles = [];
     let pieces = white.concat(black);
     for(var x = 0; x < 8; x ++){
          for(var y = 0; y < 8; y++){
               let color = (x + y) % 2 === 0 ? 'white' : 'black';
               let piece = pieces.filter(i => (i.getx() === x && i.gety() === y));
               let occupied = piece.length == 0 ? false : true
               let temp = new Tile(occupied, x, y, color, piece);
               tiles.push(temp);
          }
     }
     console.log(tiles)
     return new Board(tiles, pieces);
}



var board = initBoard(whitePieces, blackPieces).render(elem);