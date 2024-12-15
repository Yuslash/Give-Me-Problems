def main(n):
    stack = []
    countedStack = []
    for i in range(n + 1):
        stack.append(bin(i)[2:])
    for j in range(len(stack)):
       countedStack.append(bin(j)[2:].count('1'))
    print(countedStack)

n = 5
main(n)
