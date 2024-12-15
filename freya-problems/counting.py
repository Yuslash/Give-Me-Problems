def main(n):
    stack = []
    for i in range(n + 1):
        stack.append(bin(i)[2:])
    print(stack)
n = 5
main(n)
