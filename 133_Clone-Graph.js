// DFS approach
var cloneGraph = function (node) {
    // DFS approach
    // 1. create a new node
    // 2. add the new node to the visited map
    // 3. for each neighbor of the node
    // 4.    if the neighbor is not in the visited map
    // 5.        create a new node
    // 6.        add the new node to the visited map
    // 7.    add the new node to the neighbors of the new node
    if (!node) return null;

    let dfs = (node, visited) => {
        if (visited.has(node)) return visited.get(node);
        let newNode = new Node(node.val);
        visited.set(node, newNode);
        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor, visited));
        }
        return newNode;
    }
    return dfs(node, new Map());
}

/*

// BFS approach
var cloneGraph = function (node) {
    // BFS approach
    // 1. create a new node
    // 2. add the new node to the queue
    // 3. add the new node to the visited map
    // 4. while the queue is not empty
    // 5.    get the first node from the queue
    // 6.    for each neighbor of the node
    // 7.        if the neighbor is not in the visited map
    // 8.            create a new node
    // 9.            add the new node to the queue
    // 10.           add the new node to the visited map
    // 11.       add the new node to the neighbors of the new node
    if (!node) return null;

    let newNode = new Node(node.val);
    let queue = [node];
    let visited = new Map();
    visited.set(node, newNode);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        for (let neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                let newNeighbor = new Node(neighbor.val);
                queue.push(neighbor);
                visited.set(neighbor, newNeighbor);
            }
            visited.get(currentNode).neighbors.push(visited.get(neighbor));
        }
    }
    return newNode;
};

*/