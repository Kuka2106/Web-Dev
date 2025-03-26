#1
def make_bricks(small, big, goal):
  return goal % 5 <= small and goal - big * 5 <= small

#2
def lone_sum(a, b, c):
  if a == b == c:
    return 0
  if a == b:
    return c
  if a == c:
    return b
  if b == c:
    return a
  return a + b + c

#3
def lucky_sum(a, b, c):
  if a == 13:
    return 0
  if b == 13:
    return a
  if c == 13:
    return a + b
  return a + b + c

#4
def fix_teen(n):
  if n in [13, 14, 17, 18, 19]:
    return 0
  return n

def no_teen_sum(a, b, c):
  return fix_teen(a) + fix_teen(b) + fix_teen(c)

#5
def round10(num):
  return (num + 5) // 10 * 10

def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)

#6
def close_far(a, b, c):
  close = abs(a - b) <= 1 or abs(a - c) <= 1
  far = (abs(a - b) >= 2 and abs(b - c) >= 2) or (abs(a - c) >= 2 and abs(b - c) >= 2)
  return close and far

#7
def make_chocolate(small, big, goal):
  max_big_bars = goal // 5
  big_bars_used = min(max_big_bars, big)
  remaining_weight = goal - big_bars_used * 5
  
  if remaining_weight <= small:
    return remaining_weight
  return -1
