# Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
x = input("Enter any positive number: ")
y = input("Enter another positive number: ")
if float(x) < 0 or float(y) < 0:
    print("Either one or both the numbers is not positive.")
else:
    print(str(float(x)+float(y)))
