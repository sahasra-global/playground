# Rotate an array to the right 1 position
# [1,2,3] --- [3,2,1]
array = input("Enter an array of words/numbers with a space in between each: ").split(" ")
new_array = (array[len(array)-1:len(array)]+array[0:len(array)-1])
print(new_array)