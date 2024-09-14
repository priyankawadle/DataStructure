function insertElement(arr, position, element) {
    if (position >= arr.length) {// at the end of array
        arr[arr.length] = element
    } else {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (i >= position) {// at beginning as well as in between
                arr[i + 1] = arr[i]
                if (position === i) {
                    arr[i] = element
                }
            }
        }

    }
    return arr
}
let arr= [10, 20, 40, 50, 60]
console.log(insertElement(arr, 4, 70))

//using in-build function
// splice(index,count,element want to add)
arr.splice(6,0,11)//want to add new element then second parameter should be 0, if want to replace them second parameter should be 1
console.log(arr)

