# new to the programming:

n = 5

if n <= 2:
    print(n) 

dp = [0] * (n + 1) # this will print 6 0's in array
dp[1], dp[2] = 1,2

for i in range(3, n + 1):
    dp[i] = dp[i - 1] + dp[i - 2] # recurrence relation that formula ways[i] = ways[i - 1] + ways[i - 2]

print(dp[n])

