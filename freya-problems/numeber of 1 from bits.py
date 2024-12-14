class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count('1')

solution = Solution()
result = solution.hammingWeight(11)
print(result)
