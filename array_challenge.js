// // 1. Always hungry
// function alwaysHungry(arr) {
//     var foodcount = 0;
//     for (i = 0; i<arr.length; i++){
//         if(arr[i] == "food"){
//             console.log("yummy");
//             foodcount++;
//         }
//     }
//     if(foodcount == 0){
//         console.log("I'm hungry")
//     }
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);


// // 2. High Pass Filter
// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (i=0; i < arr.length; i++){
//         if (arr[i] > cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// // 3. Better than average
// function betterThanAverage(arr) {
//     var sum = 0;
//     for (var i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     var avg = sum / arr.length;
//     var count = 0;
//     // count how many values are greated than the average
//     for (var i = 0; i<arr.length; i++){
//         if (arr[i] > avg){
//             count++;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4


// // 4. Array Reverse
// function reverse(arr) {
//     var left = 0;
//     var right = arr.length - 1;
//     while (left < right){
//         var temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }
   
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5. Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i = 1; i<n-1; i++){
        fibArr.push(fibArr[i]+fibArr[i-1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// #5 alternate solution

function fibonacciArray(n){
    var fibArr = [ 0, 1];
    while (fibArr.length < n){
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);