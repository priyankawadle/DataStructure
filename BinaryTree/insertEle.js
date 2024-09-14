// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }
//     makeTree(val) {
//         let newNode = new Node(val);
//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root, newNode) {
//         if (root.value > newNode.value) {
//             if (root.left === null) {
//                 root.left = newNode;
//             } else {
//                 this.insertNode(root.left, newNode);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode;
//             } else {
//                 this.insertNode(root.right, newNode);
//             }
//         }
//     }

//     searchNode(root, value) {
//         if (root === null) {
//             return "tree is empty";
//         }
//         if (root.value === value) {
//             return "value is matched"
//         } else if (root.value > value) {
//             return this.searchNode(root.left, value)
//         } else {
//             return this.searchNode(root.right, value)
//         }
//     }

//     preOrder(root) {
//         if (root) {
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }

//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }

//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     bfsTraversing() {
//         let queue = [];
//         queue.push(this.root);
//         while (queue.length) {
//             let current = queue.shift();
//             if (current.left) {
//                 queue.push(current.left);
//             }
//             if (current.right) {
//                 queue.push(current.right);
//             }
//             console.log(current.value);
//         }
//     }

//     minValue(root) {
//         if (!root.left) {
//             return root.value;
//         } else {
//             return this.minValue(root.left);
//         }
//     }

//     maxValue(root) {
//         if (!root.right) {
//             return root.value;
//         } else {
//             return this.maxValue(root.right);
//         }
//     }

// }
// let tree = new BST();
// tree.makeTree(10);
// tree.makeTree(20)
// tree.makeTree(30);
// tree.makeTree(40);
// tree.makeTree(50);
// // console.log(tree.searchNode(tree.root, 10))
// tree.preOrder(30);
// // console.log(tree)











class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    makeTree(val) {
        let newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode;
        } else {
            return this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    searchNode(root, findNode) {
        if (root === null) {
            return false
        } else if (root.value === findNode) {
            return true
        } else if (root.value > findNode) {
            return this.searchNode(root.left, findNode)
        } else {
            return this.searchNode(root.right, findNode)
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.value)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)

            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    bstTree(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
           let current=queue.shift();
           if(current.left){
            queue.push(current.left)
           }
           if(current.right){
            queue.push(current.right)
           }
           console.log(current.value)
        }

    }
}
let tree = new BST()
tree.makeTree(10)
tree.makeTree(4)
tree.makeTree(13)
tree.makeTree(2)
tree.makeTree(15)
tree.makeTree(7)
tree.makeTree(9)
tree.makeTree(6)
tree.makeTree(11)
tree.makeTree(12)
// tree.preOrder(tree.root)
// tree.inOrder(tree.root)
// tree.postOrder(tree.root)
tree.bstTree()
// console.log(tree)
// console.log(tree.searchNode(tree.root, 350))








