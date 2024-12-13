# in javascript we got the wrong value i think maybe the logic is not right but we are gonna do the same thing in python check are we getting the same value

def main(n):
    stack = [n]
    n -= 1
    index = 0

    while n > 0:
        if index % 4 == 0:
            stack.append(stack.pop() * n)
        elif index % 4 == 1:
            stack.append(int(stack.pop() / n))
        elif index % 4 == 2:
            stack.append(n)
        elif index % 4 == 3:
            stack.append(-n)
        n -= 1
        index += 1

    return sum(stack)

print(main(10))
