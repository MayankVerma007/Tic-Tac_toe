var arr = [["1:","2:","3:"],["4:","5:","6:"],["7:","8:","9:"]];
var randarr = [1,2,3,4,5,6,7,8,9];

for ( var i in arr){
    console.log(arr[i]);
}

var input1 = prompt("Please specify the position where you want to enter your cross:");

console.log(arr[Math.floor((parseInt(input1)-1)/3)][((parseInt(input1)-1)%3)]);
arr[Math.floor((parseInt(input1)-1)/3)][((parseInt(input1)-1)%3)] = arr[Math.floor((parseInt(input1)-1)/3)][((parseInt(input1)-1)%3)] + 'X';

for ( var i in arr){
    console.log(arr[i]);
}
