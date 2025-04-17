#A
n = int(input())
arr = list(map(int, input().split()))
for i in range(0, n, 2):
    print(arr[i], end=' ')


#B
n = int(input())
arr = list(map(int, input().split()))
for i in arr:
    if i % 2 == 0:
        print(i, end=' ')

#C
n = int(input())
res = 0
arr = list(map(int, input().split()))
for i in arr:
    if i > 0:
        res += 1
print(res)

#D
n = int(input())
res = 0
arr = list(map(int, input().split()))
for i in range(1, len(arr)):
    if arr[i] > arr[i-1]:
        res+= 1
print(res)

#E
n = int(input())
res = False
arr = list(map(int, input().split()))
for i in range(1, len(arr)):
    if (arr[i] > 0 and arr[i-1] > 0) or (arr[i] < 0 and arr[i-1] < 0):
        res = True
        break
if res:
    print("YES")
else:
    print("NO")

#F
n = int(input())
res = 0
arr = list(map(int, input().split()))
for i in range(1, len(arr)-1):
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
        res += 1
print(res)

#G
n = int(input())
arr = list(map(int, input().split()))
for i in range(n // 2):
    arr[i], arr[n - i - 1] = arr[n - i - 1], arr[i]
print(*arr)
