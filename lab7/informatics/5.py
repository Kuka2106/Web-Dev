#A
def min(a, b, c, d):
    if a <= b and a <= c and a <= d:
        return a
    elif b <= a and b <= d and b <= d:
        return b
    elif c <= a and c <= b and c <= d:
        return c
    elif d <= a and d <= b and d <= c:
        return d
a = list(map(int, input().split()))
print(min(a[0], a[1], a[2], a[3]))

#B
def power(a, n):
    res = 1
    for i in range(n):
        res *= a
    return res

a = input().split()
print(power(float(a[0]), int(a[1])))

#C
def Xor(a, b):
    return (a+b) % 2

a = input().split()
print(Xor(int(a[0]), int(a[1])))