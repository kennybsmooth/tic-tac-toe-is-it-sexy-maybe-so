var player1Name="" , player2Name="", turn = "";
var grid =  [[0,0,0],[0,0,0],[0,0,0]];
var hasWinner = 0, moveCount=0;

function boardMsg(x){
    return $("#board").text(x);
}

//
