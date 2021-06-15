var h, w;
var board = [
    ["", "", ""], ["", "", ""], ["", "", ""]
];
var player1 = "x",
    player2 = "o";

var currentPlayer = player1;

var winner = null;

function setup() {
    canvas = createCanvas(500, 500);
    w = width / 3;
    h = height / 3;

}

function draw() {



    background("black");
    stroke("white")
    strokeWeight(5)
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2)

    for (var j = 0; j < 3; j++) {

        for (var i = 0; i < 3; i++) {

            var x = w * i + w / 2;
            var y = h * j + h / 2;
var r = w/4;
var spot = board[i][j];

if (spot == player1){

line(x-r,y-r,x+r,y+r);
line (x+r,y-r,x-r,y+r);

} else if (spot == player2){

noFill();    
ellipse(x,y,r*2)

}

        }


    }
    checkWinner()
    console.log(winner);

}

function keyPressed(){

if (keyCode == 88){

var i = floor(mouseX/w);
var j = floor(mouseY/h);


if (currentPlayer == player1 ){

if (board[i][j] == ""){

board[i][j]=player1;
currentPlayer = player2;

}

}

}

if (keyCode == 79){


    var i = floor(mouseX/w);
    var j = floor(mouseY/h);


if (currentPlayer == player2 ){

    if (board[i][j] == ""){
    
    board[i][j]=player2;
    console.log("yes");
    currentPlayer = player1;

    }
    
    }
}

}


function compare(a,b,c){

if (a == b && a == c && a != "" ){

return true;

}

}

function checkWinner(){

// checking rows    
for (var i = 0 ; i <= 2 ; i++ ){

 if (compare(board[i][0],board[i][1],board[i][2])){

    winner = board[i][0];

 }   
 
}

// checking collums
for (var i = 0 ; i <= 2 ; i++ ){

    if (compare(board[0][i],board[1][i],board[2][i])){
   
       winner = board[0][1];
        
    }   
       

 

   }

   
// checking diagonall from right to left

if (compare(board[0][2]),board[1][1],board[2][0]){

winner = board[0][2];


}

// checking diagonall from left to right

if (compare(board[0][0],board[1][1],board[2][2])){

winner = board[0][0]

}



var   openSlot = 0; 
/*
for (var i = 0 ; i <= 2 ; i++ ){

    for (var j = 0; j <= 2 ; j++){

  if (board [i][j] == ""){

  openSlot += 1;  

  }
                        
    }
                       
}
                     
console.log(openSlot)
if (openSlot == 0 && winner == null){

return " draw "

} else {

return winner

}
*/


}

