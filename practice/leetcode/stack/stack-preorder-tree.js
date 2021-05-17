function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function Node(name) {
    this.name = name;
    this.child = new TreeNode();
}

function preorder_trasersal(root) {
    const res = [];
    if (!root) {
        return res;
    }

    const stack = [];
    stack.push(new Node('go', root));

    while (stack.length) {
        const currentNode = stack[0];
        stack.pop();

        if (currentNode.name === 'log') {
            res.push(currentNode.child.val);
        } else if(currentNode.name === 'go') {
            if (currentNode.child.right) {
                res.push(currentNode.right);
            }
            if (currentNode.child.left) {
                res.push(currentNode.left);
            }
            res.push(currentNode.child)
        }


    }
}