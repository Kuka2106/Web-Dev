#1
def count_evens(nums):
  return sum(1 for num in nums if num % 2 == 0)

#2
def big_diff(nums):
  return max(nums) - min(nums)

#3
def centered_average(nums):
  nums.sort()
  return sum(nums[1:-1]) // (len(nums) - 2)

#4
def sum13(nums):
  total = 0
  skip = False
  
  for num in nums:
    if num == 13:
      skip = True
    elif skip:
      skip = False
    else:
      total += num
      
  return total

#5
def sum67(nums):
  total = 0
  skip = False
  for num in nums:
    if num == 6:
      skip = True
    elif skip and num == 7:
      skip = False
    elif not skip:
      total += num
  return total

#6
def has22(nums):
  for i in range(len(nums) - 1):
    if nums[i] == 2 and nums[i + 1] == 2:
      return True
  return False
