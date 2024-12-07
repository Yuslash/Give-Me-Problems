var addTwoNumbers = function(l1, l2) {
    
    let l1reverese = []
    let l2reverese = []
    let final = 0

    for(let i = l1.length -1; i >=0; i--) {
        l1reverese.push(l1[i])
    }

    for(let i = l2.length; i >=0; i--) {
        l2reverese.push(l2[i])
    }

    let l1value = Number(l1reverese.join(""))
    let l2value = Number(l2reverese.join(""))

    final = (l1value + l2value).toString()

    let result = []

    for(let i = final.length -1; i >=0; i--) {
        result.push(Number(final[i]))
    }

    console.log(result)

};

let l1 = [2,4,3]
let l2 = [5,6,4]

addTwoNumbers(l1, l2)
