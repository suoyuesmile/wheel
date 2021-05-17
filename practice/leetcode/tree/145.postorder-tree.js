function preoder_traversal(root) {
    if (root) {
        preorder_traversal(root.left);
        preorder_traversal(root.right);
        console.log(root.val);
    }
}