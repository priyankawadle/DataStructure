let arr = [];
let front = 0; // remove
let rear = 0; // insert
function enqueue(ele){
arr[rear]=ele;
rear++;
return arr;
}

function dequeue(){
const removeEle = arr[front];
front++;
return removeEle
}
function getQueue() {
    console.log(front,rear)
    return arr.slice(front, rear); // Return only the current queue elements
}
console.log(enqueue(10));
console.log(enqueue(20));
console.log(enqueue(30));
console.log(enqueue(40));
console.log(dequeue(),getQueue());
console.log(dequeue(),getQueue());
console.log(dequeue(),getQueue());
