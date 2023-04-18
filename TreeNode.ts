export class TreeNode<E> {
    data: E;
    left: TreeNode<E> | null;
    right: TreeNode<E> | null;

    constructor(data: E) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}