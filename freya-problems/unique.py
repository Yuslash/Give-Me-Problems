def uniqueNumber(nums):
    unique = 0

    for num in nums:
        unique ^= num
    return unique

nums = [2,1,2,1,3]
print(uniqueNumber(nums))
