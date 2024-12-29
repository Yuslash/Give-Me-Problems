from typing import List

class Solution:
    def numWays(self, words: List[str], target: str) -> int:
        MOD = 10**9 + 7
        m, n = len(target), len(words[0])
        
        # Count the frequency of each character at each column
        freq = [[0] * 26 for _ in range(n)]
        for word in words:
            for i, char in enumerate(word):
                freq[i][ord(char) - ord('a')] += 1
        
        # Dynamic programming table
        dp = [0] * (m + 1)
        dp[0] = 1  # Base case: 1 way to form an empty target
        
        for i in range(n):
            for j in range(m - 1, -1, -1):
                dp[j + 1] += dp[j] * freq[i][ord(target[j]) - ord('a')]
                dp[j + 1] %= MOD
        
        return dp[m]
