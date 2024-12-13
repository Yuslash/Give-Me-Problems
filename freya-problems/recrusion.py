# Recursion
def add(n):
    return add(n - 1)
#add(5)
# so recursion means the function calling itself 

# but there is problem if there is a function that calling itself n number times it needs to be stop at one point
# so for that we are gonna give two things base case and recusive case

def main(n):
    #base case
    if(n == 1):
        return 1

    #recursive case
    return n + main(n - 1)
print(main(10))

# you see the base case wll return if the value reach the 1 then return but if the initial value is 1 then it will return 1 

