function deleteElement(arr,position){
for(let i=position; i<arr.length-1; i++){
    arr[i]=arr[i+1];
}
arr.length= arr.length-1;
return arr;
}
let arr = [10,11,20,30];
console.log(deleteElement(arr,0))
//in-build function
arr.splice(1,1)
console.log(arr)         

