#1
def double_char(string):
  return ''.join(char * 2 for char in string)

#2
def count_hi(string):
  return string.count('hi')

#3
def cat_dog(string):
  return string.count('cat') == string.count('dog')

#4
def count_code(string):
  count = 0
  for i in range(len(string) - 3):
    if string[i:i+2] == 'co' and string[i+3] == 'e':
      count += 1
  return count

#5
def end_other(a, b):
  a = a.lower()
  b = b.lower()
  return a.endswith(b) or b.endswith(a)

#6
def xyz_there(str):
  return str.replace('.xyz', '').count('xyz') > 0
