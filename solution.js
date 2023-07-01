class TreeNode {
    constructor(val, left, right) {
        this.val = val !== undefined ? val : 0;
        this.left = left !== undefined ? left : null;
        this.right = right !== undefined ? right : null;
    }
}

const sortedArrayToBST = (nums) => {
    if (!nums.length) {
        return null;
    }

    const mid = Math.floor(nums.length / 2);

    // Create a new node with the middle element of the array
    const root = new TreeNode(nums[mid]);

    // Recursively construct the left and right subtrees
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};

// Example usage:
const nums = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(nums);

// Print the tree
const printTree = (node) => {
    if (!node) {
        return;
    }
    console.log(node.val);
    printTree(node.left);
    printTree(node.right);
};

printTree(root);
                                          
