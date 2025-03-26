#1
def sleep_in(weekday, vacation):
  return weekday is False or vacation is True

# 2
def monkey_trouble(a_smile, b_smile):
  return a_smile == b_smile

#3
def sum_double(a, b):
  if a == b:
    return (a + b)*2
  return a+b

#4
def diff21(n):
  if n > 21:
    return (n - 21) * 2
  return 21 - n

#5
def parrot_trouble(talking, hour):
  if talking and (hour < 7 or hour > 20):
    return True
  return False

#6
def makes10(a, b):
  return a == 10 or b == 10 or (a + b == 10)