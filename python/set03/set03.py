import math

# Print the first 10 Fibonacci numbers without recursion
def fibonacciWithoutRecursion():
    max = 10

    a, b = 0, 1
    print(a)

    for _ in range(max - 1):
        print(b)
        a, b = b, a + b

# Testing: Problem 1
fibonacciWithoutRecursion()

#################################################

# Create a function that will find the nth Fibonacci number using recursion
def fibonacci(n):
    if (n == 0):
        return 0
    if (n == 1 or n == 2):
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

# Testing: Problem 2
print(fibonacci(10))
print(fibonacci(25))
print(fibonacci(40))

#################################################

# Create a function that will return a Boolean specifying if a number is prime
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

# Testing: Problem 3
print(is_prime(78888920))
print(is_prime(2345))
print(is_prime(1234))

# #################################################

# Calculate the sum of digits of a positive integer number
def sum_of_digits(num):
    sum = 0

    while(num > 0):
        sum += (num % 10)
        num //= 10
    
    return sum

# Testing: Problem 4
print(sum_of_digits(875358990765))
print(sum_of_digits(2345678987654))
print(sum_of_digits(88759866789))

# Print the first 100 prime numbers

# Create a function that will return in an array the first “p” prime numbers greater than “n”
