import math

# Print numbers from 1 to 10
# For Loop
for i in range(10):
    print(i)

# While Loop
count = 1
while count <= 10:
    print(count)
    count += 1
    
print() # New Line

# Print the odd numbers less than 100
oddNumber = 1
while (oddNumber < 100):
    if oddNumber % 2 == 1:
        print(oddNumber)
    oddNumber += 1

# Print the multiplication table with 7
num = 1
multiple = 1
while (num <= 10):
    # converting int's to strings, to make it easy to print
    multiple = 7 * num

    # Printing the multiplcation tables in format
    print (f"7 * {num} = {multiple}") 
    num += 1


# Print all the multiplication tables with numbers from 1 to 10
num = 1
numMultipliedBy = 1

while (num <= 10) :
    while numMultipliedBy <= 10: 
        print (f"{num} * {numMultipliedBy} = {num * numMultipliedBy}") 
        numMultipliedBy += 1
    else:
        num += 1
        continue

# Calculate the sum of numbers from 1 to 10
sum = 0
for i in range(11):
    sum += i
    i += 1
print(sum)

# Calculate 10!
num = 10
result = math.factorial(num)
print(result)

# Calculate the sum of even numbers greater than 10 and less than 30
number = 11
sum = 0

while number < 30:
    if (number % 2 == 0) :
        sum += number
    number += 1

print(sum)