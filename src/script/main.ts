import {TreeNode} from "./TreeNode";


let array = [79, 44, 49, 76, 81, 9, 48, 53, 86, 45, 30, 31, 66, 71, 3, 10, 16, 64, 80,
    60, 28, 11, 4, 25, 6, 73, 98, 33, 41, 34, 28, 49, 46, 42, 42, 89];
let mainTreeNode: TreeNode = new TreeNode(0);
let treeBypassText = "";

// @ts-ignore
window['convertArrayToTree'] = () => {
    let newArr = Array.from(array);
    let sortedClearedArray =  deleteDuplicates(newArr.sort((a, b) => a-b));
    // @ts-ignore
    mainTreeNode = ArrToTree(sortedClearedArray, mainTreeNode);
    console.log("complete");

}
const deleteDuplicates = (arr: number[]) => {
    arr.forEach((i, indexI) => {
        arr.forEach((j, indexJ) => {
            if(i === j && indexI !== indexJ) {
                arr.splice(indexI, 1);
            }
        })
    })
    return arr;
}
/*
const ArrToTree = (arr: number[], treeNode: TreeNode) => {
    if(arr.length === 0) {
        return treeNode;
    }

    const middleIndex = Math.floor(arr.length / 2);
    treeNode.num = arr[middleIndex];

    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex + 1);
    treeNode.leftNode = new TreeNode(0);
    treeNode.rightNode = new TreeNode(Number.MAX_SAFE_INTEGER);
    ArrToTree(leftArr, treeNode.leftNode);
    ArrToTree(rightArr, treeNode.rightNode);
}*/
const ArrToTree = (arr: number[], treeNode: TreeNode) => {
    if (arr.length === 0) {
        return null;
    }

    const middleIndex = Math.floor(arr.length / 2);
    treeNode.num = arr[middleIndex];

    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex + 1);

    if (leftArr.length > 0) {
        treeNode.leftNode = new TreeNode(0);
        ArrToTree(leftArr, treeNode.leftNode);
    }

    if (rightArr.length > 0) {
        treeNode.rightNode = new TreeNode(0);
        ArrToTree(rightArr, treeNode.rightNode);
    }

    return treeNode;
};
const reverseDirectTreeBypass = (treeNode: TreeNode) => {
    if(treeNode.isLeftNodeSetted()) {
        reverseDirectTreeBypass(<TreeNode>treeNode.leftNode);
    }
    if(treeNode.isRightNodeSetted()) {
        reverseDirectTreeBypass(<TreeNode>treeNode.rightNode);
    }
    treeBypassText+=`${treeNode.num} `;


}
const directDirectTreeBypass = (treeNode: TreeNode) => {
    treeBypassText+=`${treeNode.num} `;

    if(treeNode.isLeftNodeSetted()) {
        reverseDirectTreeBypass(<TreeNode>treeNode.leftNode);
    }
    if(treeNode.isRightNodeSetted()) {
        reverseDirectTreeBypass(<TreeNode>treeNode.rightNode);
    }


}
const symDirectTreeBypass = (treeNode: TreeNode) => {


    if(treeNode.isLeftNodeSetted()) {
        reverseDirectTreeBypass(<TreeNode>treeNode.leftNode);
        treeBypassText += `${treeNode.num} `;
    }

    if(treeNode.isRightNodeSetted()) {
        reverseDirectTreeBypass(<TreeNode>treeNode.rightNode);
        //treeBypassText += `${treeNode.num} `;
    }
    if(!treeNode.isRightNodeSetted() && !treeNode.isLeftNodeSetted()) {
        treeBypassText += `${treeNode.num} `;
    }

}
// @ts-ignore
window['displayText'] = () => {
    reverseDirectTreeBypass(mainTreeNode);
    console.log("reverse bypass: " + treeBypassText);
    treeBypassText = "";

    directDirectTreeBypass(mainTreeNode);
    console.log("direct bypass: " + treeBypassText);
    treeBypassText = "";

    symDirectTreeBypass(mainTreeNode);
    console.log("symmetr bypass: " + treeBypassText);
    treeBypassText = "";
}