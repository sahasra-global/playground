#max number in array

array = input("Enter a sequence of numbers with a space between each: ").split()
array = [int(x) for x in array]
print(max(array))