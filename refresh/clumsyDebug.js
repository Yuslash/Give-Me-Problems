function main(n) {
  const stack = [n];
  n--;
  let index = 0;

  while (n > 0) {
    console.log(`Before operation: n=${n}, index=${index}, stack=${stack}`);
    if (index % 4 === 0) {
      const last = stack.pop();
      stack.push(last * n);
      console.log(`Multiply: ${last} * ${n} = ${last * n}`);
    } else if (index % 4 === 1) {
      const last = stack.pop();
      stack.push(Math.floor(last / n));
      console.log(`Divide: ${last} / ${n} = ${Math.floor(last / n)}`);
    } else if (index % 4 === 2) {
      stack.push(n);
      console.log(`Add: +${n}`);
    } else if (index % 4 === 3) {
      stack.push(-n);
      console.log(`Subtract: -${n}`);
    }
    n--;
    index++;
    console.log(`After operation: stack=${stack}`);
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(main(10));
