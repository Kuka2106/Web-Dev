#A
a = int(input())
b = int(input())
if a>b:
    print(a)
else:
    print(b)

#B
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("YES")
else:
    print("NO")

#C
x = int(input())
ans = int(input())
is_symmetric = (x >= 1000 and (x % 10 == x // 1000) and ((x % 100) // 10 == (x // 100) % 10))
if is_symmetric:
    if ans == 1:
        print("YES")
    else:
        print("NO")
else:
    if ans != 1:
        print("YES")
    else:
        print("NO")

#D
x = int(input())
if x == 0:
    print(0)
elif x > 0:
    print(1)
else:
    print(-1)

#E
a = int(input())
b = int(input())
if a == b:
    print(0)
elif a > b:
    print(1)
else:
    print(2)