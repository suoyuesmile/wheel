function preoder_traversal(root) {
    if (root) {
        preorder_traversal(root.left);
        console.log(root.val);
        preorder_traversal(root.right);
    }
}