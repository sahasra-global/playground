# Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number

a = [[1,2,3] , [4,5,6], [7,8,9]]
x = int(input("Enter the column number to extract: "))
print([row[x] for row in a])