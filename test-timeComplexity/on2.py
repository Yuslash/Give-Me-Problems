nums = [1,2,3,4]

for i in range(len(nums)):
    for j in range(len(nums)):
        print(nums[i]* nums[j])

# this is simple program how it works first iteration the nums[i] 
# will mulitply through every integer of the array
# so like 1*1, 1 * 2 and 1 * 3 and the output 1,2,3
# second iteration 2 will takes place of nums[i]
# then second iteration 2 * 1, 2 * 2 and 2 * 3 so the output is 2,4,6
# so you understand this simple concept 
# why now? 
# here the outerLoops runs n times 
# for each iteration of the outerloops  the inner loop also runs n times
# so the total operation = n x n = n2
# basically they call this o(n2)what is that actually
# they consider that this alogrith which has o(n2) will be slow
# why?
# because imagine you have an array with 10 elements or 1000 elemenets
# now 10 elements means 10 x 10 =100 operation 
# but 1000 elements means 1000 x 1000 = 1,000,000 operation so that will be slow
# how to avoid that o(n2)problem like this
# avoid nested loops when youre working on problems where you need to calculate result for every index
# instead of recalculating te product for each element using a loop inside a loop caluclate the prefix and suffix once for the entire array
# why is this important for you problem
# the optimal solution reduces it to O(n) is to using prefix and suffix tricks
