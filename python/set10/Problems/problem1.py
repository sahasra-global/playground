# Calculate Fibonacci(500) with high precision (all digits)

sum = 0
a = 0
b = 1
i = 2
while i <= 500:
    sum = a+b
    a=b
    b=sum
    i+=1

print(sum)