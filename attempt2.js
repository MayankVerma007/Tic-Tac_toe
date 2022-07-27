//Our basic TIC-TAC-TOE Grid
var arr = [["1:","2:","3:"],["4:","5:","6:"],["7:","8:","9:"]];
//This array is used to maintain track of positions filled in the grid 
var randarr = [1,2,3,4,5,6,7,8,9];

function printAll(arr){ 
    //This functions prints our basic grid
    for ( var i in arr){
    console.log(arr[i]);
    }
}
function inputX(arr, randarr){
    //This function takes user input and updates in main grid and also updates the 
    //position used in position grid
    var input1 = prompt("Please specify the position where you want to enter your cross:");

    arr[Math.floor((parseInt(input1)-1)/3)][((parseInt(input1)-1)%3)] = arr[Math.floor((parseInt(input1)-1)/3)][((parseInt(input1)-1)%3)] + 'X';
    randarr.splice((parseInt(input1)-1),1);
}

printAll(arr);
inputX(arr, randarr);
console.log(randarr);
printAll(arr);
