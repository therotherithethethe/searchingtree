export class TreeNode {
    private _leftNode: TreeNode | null;
    private _rightNode: TreeNode | null;
    public num: number;

    constructor(num: number, leftNode: TreeNode | null = null, rightNode: TreeNode | null = null) {
        this.num = num;
        this._leftNode = leftNode;
        this._rightNode = rightNode;
    }

    /*public set leftNode(node: TreeNode) {
        if (node.num < this.num) {
            this._leftNode = node;
        } else {
            throw new Error(`leftNode (num: ${node.num}) can't be set to this node (num: ${this.num}), because it's not smaller.`);
        }
    }

    public set rightNode(node: TreeNode) {
        if (node.num > this.num) {
            this._rightNode = node;
        } else {
            throw new Error(`rightNode (num: ${node.num}) can't be set to this node (num: ${this.num}), because it's not larger.`);
        }
    }*/
    public set leftNode(node: TreeNode) {

            this._leftNode = node;

    }

    public set rightNode(node: TreeNode) {

            this._rightNode = node;

    }

    get leftNode(): TreeNode | null {
        return this._leftNode;
    }

    get rightNode(): TreeNode | null {
        return this._rightNode;
    }
    public isLeftNodeSetted(): boolean {
        return this._leftNode !== null;
    }
    public isRightNodeSetted(): boolean {
        return this._rightNode !== null;
    }
}
