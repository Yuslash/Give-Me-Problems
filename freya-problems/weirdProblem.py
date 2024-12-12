def main(n):
    if n % 2 == 1:
        print("weird")
    elif 2 <= n <= 5:
        print("Not Weird")
    elif 6 <= n <= 20:
        print("Weird")
    elif n > 20:
        print("Not Weird")

if __name__ == "__main__":
    n = int(input("Enter the number: "))
    main(n)
