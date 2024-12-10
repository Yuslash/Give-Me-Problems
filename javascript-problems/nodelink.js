// now lets get into real business

class Node {
  constructor(data, next=null) {
    this.data = data
    this.head = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Insert first
  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  // insert lastNode

  // insert at index
  
  // get at index

  // remove at index

  //clear list

  // print the list
}

const ll = new LinkedList()

ll.insertFirst(200,200)

console.log(ll)


//export default Node
//
//const n1 = {
//  data: 200
//}
//
//const n2 = {
//  data: 300
//}
//
//n1.next = n2

