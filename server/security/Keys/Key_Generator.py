import random

abc = ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'y', 'x', 'c', 'v', 'b', 'n', 'm']
num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
key = ''
for i in range (20):
    rand = random.randint(1, 2)
    if rand == 1:
        randabc = random.choice(abc)
        key = key + randabc
    else:
        randnum = random.choice(num)
        key = key + randnum
print key
path =  'keysfile.txt'
file = open(path, 'a')
file.write(key)
file.write('\n')
file.close

