def birthday(s, d, m):
    # Initialize count for the number of ways to divide the chocolate
    count = 0

    # Iterate through the array, checking each segment of length m
    for i in range(len(s) - m + 1):
        # Check if the sum of the current segment equals d
        if sum(s[i:i+m]) == d:
            count += 1
    
    return count

# Example usage
squares = [1, 2, 1, 3, 2]
day = 3
month = 2

print(birthday(squares, day, month))  # Output: 2
