// function binarySearch(arr, element) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] == element) {
//             return mid;
//         } else if (arr[mid] < element) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
// }
// const arr = [10,20,40,70,90];// always sorted array required
// console.log(binarySearch(arr, 40))

// Recursive Approach
let arr = [10, 20, 40, 60, 70];
let start = 0;
let end = arr.length - 1;
let find = 20;

function recursiveCall(arr, start, end) {
    if (start > end) {
        return -1; // Element not found
    }
    let mid = Math.floor((start + end) / 2);
    console.log(start,end,mid)
    if (arr[mid] === find) {
        return mid;
    } else if (arr[mid] < find) {
       return  recursiveCall(arr, mid + 1, end);
    } else {
       return recursiveCall(arr, start, mid - 1);
    }
}
console.log(recursiveCall(arr, start, end))














