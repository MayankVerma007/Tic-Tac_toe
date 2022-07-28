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
var userarr = [0,0,0,0,0,0,0,0,0];
var comparr = [0,0,0,0,0,0,0,0,0];
var w1= [[1,1,1,0,0,0,0,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1],[1,0,0,1,0,0,1,0,0],[0,1,0,0,1,0,0,1,0],[0,0,1,0,0,1,0,0,1],[1,0,0,0,1,0,0,0,1],[0,0,1,0,1,0,1,0,0]];
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

function isWinner(lis1,w1){
    for (var i = 0; i < 8; i++){
        var w = [0,0,0,0,0,0,0,0,0];
//        console.log(i);
        for (var j = 0; j < 9; j++){
//            console.log(lis1[j] && w1[i][j]);
            w[j]= lis1[j] && w1[i][j];
//            console.log(w);
        }
//        console.log('if starting');
        if (JSON.stringify(w)===JSON.stringify(w1[i])) {
//            console.log(i);
            console.log('You are the Winner');
            break;
        }   
    }
    console.log('next round');

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
    userarr[input1-1]=1;

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
    
    comparr[randomNumber-1]=1;
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
isWinner(userarr,w1);
inputO(arr, randarr);
printAll(arr);
isWinner(comparr,w1);

//third round ends

inputX(arr, randarr);
printAll(arr);
isWinner(userarr,w1);
inputO(arr, randarr);
printAll(arr);
isWinner(comparr,w1);

//fourth round ends

inputX(arr, randarr);
printAll(arr);
isWinner(userarr,w1);

//fifth round ends
