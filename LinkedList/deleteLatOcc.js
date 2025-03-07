class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
  }
  deleteLastOcc(key) {
    let current = this.head;
    let arr = [];
    let count = 0;
    // Traverse to find the positions of all occurrences of the key
    while (current != null) {
      count++;
      if (current.value === key) {
        arr.push(count);
      }
      current = current.next;
    }
    // If the key is not found
    if (arr.length === 0) {
      console.log(`${key} not found in the list.`);
      return this.head;
    }
    // Get the index of the last occurrence
    let indexToDelete = arr[arr.length - 1];
    // Special case: If the last occurrence is the head
    if (indexToDelete === 1) {
      this.head = this.head.next;
      return this.head;
    }
    current = this.head;
    count = 1;
    while (count < indexToDelete - 1) {
      current = current.next;
      count++;
    }
    current.next = current.next.next;
    return this.head;
  }
}

// Example usage
const list = new LinkedList(1);
list.head.next = {
  value: 2,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 5,
        next: {
          value: 6,
          next: null,
        },
      },
    },
  },
};

console.log("Original List:");
console.log(list.head);

list.deleteLastOcc(2);

console.log("After Deleting Last Occurrence of 2:");
console.log(list.head);
