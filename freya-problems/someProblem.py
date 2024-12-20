def main(n, k, ar):
    count = 0

    for i in range(n):
        for j in range(i + 1, n):
            if(ar[i] + ar[j]) % k == 0:
                count += 1

    return count

ar = [1, 2, 3, 4, 5, 6]
n = len(ar)
k = 3 
print(main(n, k, ar))

