import math

#A
a = int(input())
b = int(input())
for i in range(a, b+1):
    if i % 2 == 0:
        print(i, end=" ")

#B
a = int(input())  
b = int(input())  
c = int(input())  
d = int(input())
for i in range(a, b+1):
    if i % d == c:
        print(i, end=" ")

#C
a = int(input())  
b = int(input())  

for i in range(a, b + 1):
    if int(math.sqrt(i)) ** 2 == i:
        print(i)

#D
x = input()
d = int(input())
res = 0
for i in x:
    if str(d) == i:
        res+=1
print(res)

#E
x = input()
res = 0
for i in x:
    res += int(i)
print(res)

#F
print(int(input()[::-1]))

#G
x = int(input())
for i in range(2, x+1):
    if x % i == 0:
        print(i)
        break

#H
x = int(input())
for i in range(1, x+1):
    if x % i == 0:
        print(i, end = " ")

#I
res = 0
x = int(input())
for i in range(1, int(math.sqrt(x)) + 1):
    if x % i == 0:
        res += 1
        if i != x // i:
            res += 1

print(res)

#J
res = 0
for i in range(100):
    a = int(input())
    res+= a
print(res)

#K
x = int(input())
res = 0
for i in range(x):
    a = int(input())
    res+= a
print(res)

#L
b = input()
d = int(b, 2)
print(d)

#M
x = int(input())
res = 0
for i in range(x):
    a = int(input())
    if (a == 0):
        res+= 1
print(res)