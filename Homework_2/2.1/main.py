import time

def prime_check (number):
    if number == 0 or number == 1:
        return False
    count = 0
    for i in range(1, round(number ** 0.5) + 1):
        if number % i == 0:
            count += 1
        if count > 1:
            return False
    return True

def func_prim(number):
    mass = []
    j = 2
    while number != len(mass):
        if prime_check(j):
            mass.append(j)
        j += 1
    return mass


start = time.time()
print(func_prim(100000))
finish = time.time() - start
print(finish)