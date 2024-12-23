s = "pwwkew"

count = 0

for i in range(len(s)):

    is_unqiue = True
    
    for j in range(len(s)):
        if i != j and s[i] == s[j]:
            is_unqiue = False
            break
        
    if is_unqiue:
        count += 1

print(count)
