#average of numbers in an array
array = input("Enter a sequence of numbers with a space between each: ").split()
array = [int(x) for x in array]
avg = (sum(array)/int(len(array)))
print(avg)