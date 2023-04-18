import {BST} from "./BST";

let binarySearchTree = new BST();

binarySearchTree.insert(50);
binarySearchTree.insert(40);
binarySearchTree.insert(60);
binarySearchTree.insert(30);
binarySearchTree.insert(42);
binarySearchTree.insert(55);
binarySearchTree.insert(65);

console.log(binarySearchTree);

binarySearchTree.deleteByData(60);
binarySearchTree.deleteByData(55);
binarySearchTree.deleteByData(65);
binarySearchTree.deleteByData(50);

console.log(binarySearchTree);