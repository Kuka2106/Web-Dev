#7
def near_hundred(n):
  return (n >= 90 and n <= 110) or (n >= 190 and n <= 210)

#8
def pos_neg(a, b, negative):
  if not negative:
    return a * b < 0
  else:
    return a < 0 and b < 0

#9
def not_string(str):
  if str.startswith("not ") or str == "not":
    return str
  else:
    return "not "+str

#10
def missing_char(str, n):
  return str[:n]+str[n+1:]

#11
def front_back(str):
  if len(str) < 2:
    return str
  return str[-1]+str[1:-1]+str[0]

#12
def front3(str):
  return str[:3] * 3

#13
