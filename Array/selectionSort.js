// function selectionSort(arr){
// for(let i=0;i<arr.length;i++){
//     let midId=i;
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[j] < arr[midId]){//Ascending order, descending order: >
//         midId=j;
//       }
//     }
//     let temp =arr[i];
//     arr[i]=arr[midId];
//     arr[midId]=temp;
// }
// return arr;
// }
// const arr=[20,12,53,3]
// console.log(selectionSort(arr))



// Initial Array: [20, 12, 53, 3]

// First Iteration (i = 0):

// minId = 0 (current element: 20)
// Inner Loop:
// Compare 12 (arr[1]) with 20: 12 is smaller, so minId = 1.
// Compare 53 (arr[2]) with 12: 12 is smaller, so minId remains 1.
// Compare 3 (arr[3]) with 12: 3 is smaller, so minId = 3.
// Swap arr[0] and arr[3]:
// Before Swap: [20, 12, 53, 3]
// After Swap: [3, 12, 53, 20]
// Array after 1st pass: [3, 12, 53, 20]
// Second Iteration (i = 1):

// minId = 1 (current element: 12)
// Inner Loop:
// Compare 53 (arr[2]) with 12: 12 is smaller, so minId remains 1.
// Compare 20 (arr[3]) with 12: 12 is smaller, so minId remains 1.
// No Swap needed as 12 is already in the correct position.
// Array after 2nd pass: [3, 12, 53, 20]
// Third Iteration (i = 2):

// minId = 2 (current element: 53)
// Inner Loop:
// Compare 20 (arr[3]) with 53: 20 is smaller, so minId = 3.
// Swap arr[2] and arr[3]:
// Before Swap: [3, 12, 53, 20]
// After Swap: [3, 12, 20, 53]
// Array after 3rd pass: [3, 12, 20, 53]
// Fourth Iteration (i = 3):

// minId = 3 (current element: 53)
// No inner loop needed as there are no more elements to compare.
// No Swap needed as 53 is already in the correct position.
// Array after 4th pass: [3, 12, 20, 53]



