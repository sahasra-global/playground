# Calculate 70! with high precision (all digits)
product = 1
a = 1
i = 1
while i <= 70:
    product = product*a
    a=a+1
    i+=1

print(product)