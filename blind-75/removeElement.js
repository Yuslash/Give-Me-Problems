class Node {
    constructor(data, next = null) {
        this.data = data
        this.head = next
    }
}

const node = new Node(200)
console.log(node)