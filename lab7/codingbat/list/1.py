#1
def first_last6(nums):
  return nums[0] == 6 or nums[-1] == 6

#2
def same_first_last(nums):
  if len(nums)>=1:
    return nums[0] == nums[-1]
  return False

#3
def make_pi():
  return [3, 1, 4]

#4
def common_end(a, b):
  return a[0]==b[0] or a[-1]==b[-1]

#5
def sum3(nums):
  return nums[0]+nums[1]+nums[2]

#6
def rotate_left3(nums):
  res = nums[1:]
  res.append(nums[0])
  return res

#7
def reverse3(nums):
  return nums[::-1]

#8
def max_end3(nums):
  maxx = max(nums[0], nums[2])
  return [maxx, maxx, maxx]

#9
def sum2(nums):
  return sum(nums[:2])

#10
def middle_way(a, b):
  return [a[1], b[1]]

#11
def make_ends(nums):
  return [nums[0], nums[-1]]

#12
def has23(nums):
  return 2 in nums or 3 in nums
