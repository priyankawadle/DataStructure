function mergeArray(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3[i] = arr1[i];
    }
    for(let i=0;i<arr2.length;i++){
        arr3[arr1.length+i]=arr2[i];
    }
    return arr3;
}
let arr1 = [10, 20, 30, 40];
let arr2 = [50, 60, 70,90];
console.log(mergeArray(arr1, arr2))
//in-build function
console.log([...arr1,...arr2])
