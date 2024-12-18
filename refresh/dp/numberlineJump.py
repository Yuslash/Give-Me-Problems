# x1 = 2
# v1 = 1
# final = x1 + v1
#
# x2 = 1
# v2 = 2
#
# sefinal = x2 + v2
#
# if(x1 + v1 == final) and (x2 + v2 == sefinal):
#     return("YES")
# else:
#     return("NO")

def main(x1,x2,v1,v2):
    if v1 == v2:
       return "YES" if x1 == x2 else "NO"

    if (x1 - x2) % (v1 - v2) == 0 and (x1 - x2) / (v1- v2) > 0:
        return "YES" 

    return "NO"

x1 = 2
x2 = 1
v1 = 2
v2 = 1
print(main(x1, x2, v1, v2))

