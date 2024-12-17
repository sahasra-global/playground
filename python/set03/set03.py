# Print the first 10 Fibonacci numbers without recursion
# def fibonacciWithoutRecursion():


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

# Create a function that will return a Boolean specifying if a number is prime

# Calculate the sum of digits of a positive integer number

# Print the first 100 prime numbers

# Create a function that will return in an array the first “p” prime numbers greater than “n”
