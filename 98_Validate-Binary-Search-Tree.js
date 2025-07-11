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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let validity = true;

    function helper(node, min, max) {
        if(!node) return;

        if(
            (min != null && node.val <= min) ||
            (max != null && node.val >= max)
        ) {
            validity = false;
            return;
        }

        helper(node.left, min, node.val);
        helper(node.right, node.val, max);
    }

    helper(root, null, null);
    return validity;
};