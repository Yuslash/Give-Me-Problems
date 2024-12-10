// now lets get into real business

class Node {
  constructor(data, next=null) {
    this.data = data
    this.head = next
  }
}

const node = new Node(200, 390)

console.log(node)


const n1 = {
  data: 200
}

const n2 = {
  data: 300
}

n1.next = n2

