# Rotate an array to the left 1 position

array = input("Enter an arrat with a space between each word/number: ").split()
new_array = []
for x in range(len(array)):
    new_array = array[x-1:]
    new_array.append(array[0])

print(new_array)
