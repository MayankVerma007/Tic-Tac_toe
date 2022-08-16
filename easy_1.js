function allEqual(ekarray){
//Thi function takes an array and compares whether all elements are equal or not    
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
    
    if(randarr.includes(input1)){
        //var gridpoint = "_" + toString(input1);
    
        //grid.gridpoint = 'X';
        userarr[input1-1]=1;

        arr[Math.floor((input1-1)/3)][((input1-1)%3)] = arr[Math.floor((input1-1)/3)][((input1-1)%3)] + 'X';
        randarr.splice((randarr.indexOf(input1)),1);
    }
//    if(input1 === NaN){
//        console.log("You haven't entered anything thus we are ending the game")
//        win_tracker = 1;
//    }
    else{
        console.log("You entered wrong input");
        console.log("Please enter again");
        inputX(arr, randarr);
    }
}

function inputO(arr, randarr){
    console.log("Grid after Computer Move");
    
    var randomIndex = Math.floor(Math.random() * randarr.length);
    var randomNumber = randarr[randomIndex] ;
    
    //var gridpoint = "_" + toString(randomNumber);
    
    //grid.gridpoint = 'O';
    
    comparr[randomNumber-1]=1;
    arr[Math.floor((randomNumber-1)/3)][((randomNumber-1)%3)] = arr[Math.floor((randomNumber-1)/3)][((randomNumber-1)%3)] + 'O';
    randarr.splice(randarr.indexOf(randomNumber),1);
}

function isWinner(lis_user,lis_comp,win_combos){
//This function takes all the winning combos in Tic-Tac-Toe in the variable win_combos
//While lis1 is a list of the positions where the user or computer have their inputs
//This function is run seperately for user and computer
    for (var i = 0; i < 8; i++){
        var w_1 = [0,0,0,0,0,0,0,0,0];
        for (var j = 0; j < 9; j++){
            w_1[j]= lis_user[j] && win_combos[i][j];
        }
        //console.log(w_1);
        //console.log(JSON.stringify(w_1)===JSON.stringify(win_combos[i]));
        if (JSON.stringify(w_1)===JSON.stringify(win_combos[i])){
            console.log('You are the Winner');
            win_tracker = 1;
            break;
        }   
    }
    for (var y = 0; y < 8; y++){
        var w_2 = [0,0,0,0,0,0,0,0,0];
        for (var z = 0; z < 9; z++){
            w_2[z]= lis_comp[z] && win_combos[y][z];
        }
        //console.log(w_2);
        //console.log(JSON.stringify(w_2)===JSON.stringify(win_combos[y]));
        if (JSON.stringify(w_2)===JSON.stringify(win_combos[y])){
            console.log('Computer is the Winner');
            win_tracker = 1;
            break;
        }   
    }
}

//import {allEqual, printAll, inputX, inputO, isWinner} from './Funtions';

//Our basic TIC-TAC-TOE Grid
var arr = [["1:","2:","3:"],["4:","5:","6:"],["7:","8:","9:"]];
//This array is used to maintain track of positions filled in the grid 
var randarr = [1,2,3,4,5,6,7,8,9];

var userarr = [0,0,0,0,0,0,0,0,0];
var comparr = [0,0,0,0,0,0,0,0,0];
var win_combos = [[1,1,1,0,0,0,0,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1],[1,0,0,1,0,0,1,0,0],[0,1,0,0,1,0,0,1,0],[0,0,1,0,0,1,0,0,1],[1,0,0,0,1,0,0,0,1],[0,0,1,0,1,0,1,0,0]];


var win_tracker = 0;
var round_tracker = 1;

console.log("Tic-Tac-Toe Grid will look like this");
printAll(arr);

while(win_tracker === 0 ){
    console.log("Round Number: " + round_tracker.toString());
    round_tracker = round_tracker + 1;
    inputX(arr,randarr);
    printAll(arr);
    inputO(arr, randarr);
    printAll(arr);
    isWinner(userarr,comparr,win_combos);
}
