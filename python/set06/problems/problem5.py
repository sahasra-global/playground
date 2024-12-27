# Calculate the sum of numbers received in a comma delimited string

x = input("Enter a string of numbers with a comman in between each: ").split(',')
i=0
y=0
for i in range(len(x)):
    y=y+int(x[i])
    i=+1
print(y)