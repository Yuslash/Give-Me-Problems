from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()  # Sort the array to make it easier to avoid duplicates and use two-pointer technique
        result = []
        
        for i in range(len(nums)):
            # Skip duplicate elements for the first number
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            
            # Two-pointer approach
            left, right = i + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    # Move pointers and skip duplicates
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
        
        return result

# Example Usage
solution = Solution()
nums1 = [-1, 0, 1, 2, -1, -4]
nums2 = [0, 1, 1]
nums3 = [0, 0, 0]

print(solution.threeSum(nums1))  # Output: [[-1, -1, 2], [-1, 0, 1]]
print(solution.threeSum(nums2))  # Output: []
print(solution.threeSum(nums3))  # Output: [[0, 0, 0]]
