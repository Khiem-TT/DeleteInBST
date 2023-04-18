import {TreeNode} from "./TreeNode";

export class BST<E> {
    root: TreeNode<E> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    insert(data: E): TreeNode<E> {
        if (!this.root) {
            this.root = new TreeNode<E>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }

    searchByData(data: E) {
        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.data) {
                return currentNode;
            }
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else currentNode = currentNode.right;
        }
        console.log('Can not find the node with this data');
    }

    searchParentNode(data: E) {
        let parentNode = this.root;
        while (parentNode) {
            if (parentNode.left && parentNode.left.data === data) {
                return parentNode;
            } else if (parentNode.right && parentNode.right.data === data) {
                return parentNode;
            }
            if (data < parentNode.left.data || data < parentNode.data && data > parentNode.left.data) {
                parentNode = parentNode.left;
            } else if (data < parentNode.right.data && data > parentNode.data || data > parentNode.right.data) {
                parentNode = parentNode.right;
            }
        }
        console.log('Can not find the parent node with this data');
    }

    deleteByData(data: E) {
        let currentNode = this.searchByData(data);
        if (currentNode) {
            if (!currentNode.left) {
                if (currentNode.data === this.root.data) {
                    if (!currentNode.right) {
                        currentNode.data = null;
                        this.totalNode--;
                    } else {
                        currentNode.data = this.root.right.data;
                        if (this.root.right.left) currentNode.left = this.root.right.left;
                        if (this.root.right.right) currentNode.right = this.root.right.right;
                        this.totalNode--;
                    }
                } else {
                    let parentNode = this.searchParentNode(data);
                    if (parentNode.left && parentNode.left.data === currentNode.data) {
                        parentNode.left = currentNode.right;
                        this.totalNode--;
                    } else if (parentNode.right && parentNode.right.data === currentNode.data) {
                        parentNode.right = currentNode.right;
                        this.totalNode--;
                    }
                }
            } else {
                let rightMost = currentNode.left;
                while (rightMost.right) {
                    rightMost = rightMost.right;
                }
                let parentOfRightMost = this.searchParentNode(rightMost.data);
                if (currentNode.left.data === rightMost.data) {
                    currentNode.data = rightMost.data;
                    if (rightMost.left) {
                        currentNode.left = rightMost.left;
                    } else currentNode.left = null;
                } else {
                    currentNode.data = rightMost.data;
                    if (rightMost.left) {
                        parentOfRightMost.right = rightMost.left;
                    } else parentOfRightMost.right = null;
                }
                this.totalNode--;
            }
        }
    }
}