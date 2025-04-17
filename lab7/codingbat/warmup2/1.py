#1
def string_times(str, n):
  return str * n

#2
def front_times(str, n):
  return str[:3]*n

#3
def string_bits(str):
  res = ""
  for i in range(0, len(str), 2):
    res += str[i]
  return res

#4
def string_splosion(str):
  res = ""
  for i in range(1, len(str)+1):
    res+=str[:i]
  return res

#5
def last2(str):
  if len(str) < 2:
      return 0
  last2_sub = str[-2:]
  count = 0
  for i in range(len(str) - 2):
      if str[i:i+2] == last2_sub:
          count += 1
  return count

#6
def array_count9(nums):
  count = 0
  for num in nums:
    if num == 9:
      count += 1
  return count

#7
def array_front9(nums):
  nums = nums[:4]
  return 9 in nums

#8
def array123(nums):
  for i in range(len(nums) - 2):
    if nums[i:i+3] == [1, 2, 3]:
      return True
  return False

#9
def string_match(a, b):
  length = min(len(a), len(b))
  count = 0
  for i in range(length - 1):
    if a[i:i+2] == b[i:i+2]:
      count += 1
  return count