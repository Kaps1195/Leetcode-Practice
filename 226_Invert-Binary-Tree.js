/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function helper(node) {
        if(!node) return;
     
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
    
        invertTree(node.left);
        invertTree(node.right);
    
    }
    helper(root);
    return root;
};
