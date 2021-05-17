function preoder_traversal(root) {
    if (root) {
        console.log(root.val);
        preorder_traversal(root.left);
        preorder_traversal(root.right);
    }
}