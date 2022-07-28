//Our basic TIC-TAC-TOE Grid
var arr = [["1:","2:","3:"],["4:","5:","6:"],["7:","8:","9:"]];
//This array is used to maintain track of positions filled in the grid 
var randarr = [1,2,3,4,5,6,7,8,9];

var grid = {
    _1:"",
    _2:"",
    _3:"",
    _4:"",
    _5:"",
    _6:"",
    _7:"",
    _8:"",
    _9:"",
}

function allEqual(ekarray){
    var j = ekarray[0];
    for(var i = 0; i < ekarray.length; i++){
        if(j==ekarray[i]){
            continue;    
        }
        else{
            return false;
        }
    }
    return true;
}

function isWinner(grid){
    
    var row1 = [grid._1 , grid._2 , grid._3];
    var row2 = [grid._4 , grid._5 , grid._6];
    var row3 = [grid._7 , grid._8 , grid._9];
    var col1 = [grid._1 , grid._4 , grid._7];
    var col2 = [grid._2 , grid._5 , grid._8];
    var col3 = [grid._3 , grid._6 , grid._9];
    var diag1 = [grid._1 , grid._5 , grid._9];
    var diag2 = [grid._7 , grid._5 , grid._3];
    
    if(allEqual(row1)) {
        console.log("WE HAVE A WINNER!!");
    }
    else if(allEqual(row2)){
        console.log("WE HAVE A WINNER!!");
    }
    else if(allEqual(row3)){
        console.log("WE HAVE A WINNER!!");
    }
    else if(allEqual(col1)){
        console.log("WE HAVE A WINNER!!");
    }
    else if(allEqual(col2)){
        console.log("WE HAVE A WINNER!!");
    }
    else if(allEqual(col3)){
        console.log("WE HAVE A WINNER!!");
    }
    else if(allEqual(diag1)){
        console.log("WE HAVE A WINNER!!");
    }
    else if(allEqual(diag2)){
        console.log("WE HAVE A WINNER!!");
    }
    else{
        console.log("Next round");
    }
}

function printAll(arr){ 
    //This functions prints our basic grid
    for ( var i in arr){
    console.log(arr[i]);
    }
}
function inputX(arr, randarr){
    //This function takes user input and updates in main grid and also updates the 
    //position used in position grid
    var input1 = parseInt(prompt("Please specify the position where you want to enter your cross:"));
    
    var gridpoint = "_" + toString(input1);
    
    grid.gridpoint = 'X';

    arr[Math.floor((input1-1)/3)][((input1-1)%3)] = arr[Math.floor((input1-1)/3)][((input1-1)%3)] + 'X';
    randarr.splice((randarr.indexOf(input1)),1);
}

printAll(arr);
inputX(arr, randarr);
//console.log(randarr);
printAll(arr);

function inputO(arr, randarr){
    
    var randomIndex = Math.floor(Math.random() * randarr.length);
    var randomNumber = randarr[randomIndex] ;
    
    var gridpoint = "_" + toString(randomNumber);
    
    grid.gridpoint = 'O';

    arr[Math.floor((randomNumber-1)/3)][((randomNumber-1)%3)] = arr[Math.floor((randomNumber-1)/3)][((randomNumber-1)%3)] + 'O';
    randarr.splice(randarr.indexOf(randomNumber),1);
}
inputO(arr, randarr);
printAll(arr);

//first round ends

inputX(arr, randarr);
printAll(arr);
inputO(arr, randarr);
printAll(arr);

//second round ends

inputX(arr, randarr);
printAll(arr);
isWinner(grid);
inputO(arr, randarr);
printAll(arr);
isWinner(grid);

//third round ends

inputX(arr, randarr);
printAll(arr);
isWinner(grid);
inputO(arr, randarr);
printAll(arr);
isWinner(grid);

//fourth round ends

inputX(arr, randarr);
printAll(arr);
isWinner(grid);

//fifth round ends

