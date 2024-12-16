import random

# Create a function that will merge two arrays and return the result as a new array
def mergeTwoArrays(array1, array2):
    mergedArray = array1 + array2
    print(mergedArray)

# Problem 1: Testing
array1 = [3, 4, 0, 1, 5]
array2 = [6, 7, 22, 7, 1, 0, 1]
mergeTwoArrays(array1, array2)

######################################################

'''
    I LEARNED HOW TO WRITE MULTILINE COMMENTS IN PYTHON!!!!!!!! :)

    Create a function that will receive two arrays of numbers as arguments and return 
    an array composed of all the numbers that are either in the first array or second 
    array but not in both
'''
def getRandomArray(array1, array2):
    randomNumber = random.randint(0, 1)
    if (randomNumber == 0):
        print(array1)
    else:
        print(array2)

# Problem 2: Testing
getRandomArray(array1, array2)

######################################################

'''
    Create a function that will receive two arrays and will return an array with 
    elements that are in the first array but not in the second
'''
def getFirstArray(array1, array2):
    print(array1)

# Problem 3: Testing
getFirstArray(array1, array2)

######################################################

'''
    Create a function that will receive an array of numbers as argument and will return 
    a new array with distinct elements
'''

######################################################

# Calculate the sum of first 100 prime numbers and return them in an array
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

primeNumbers = []

# Check numbers from 0 to 100
for num in range(0, 101):
    if is_prime(num):
        primeNumbers.append(num)

total = sum(primeNumbers)
print(total) # should print 1060