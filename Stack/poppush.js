let arr = [];
let size = 0;
function pushElement(element) {
    arr[size] = element;
    size++;
    return arr;
}
function popElement() {
    if (arr.length === 0) {
        return "array is empty"
    } else {
        let popEle = arr[size - 1];
        size--;
        arr.length = size;
        return popEle
    }

}
console.log(pushElement(40))
console.log(pushElement(50))
console.log(pushElement(60))
console.log(popElement(), arr)
console.log(popElement(), arr)