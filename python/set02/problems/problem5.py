#takes an array as an argument and returns with only positive values
def positive(array):
    result = []
    for x in array:
        if x > 0:
            result.append(x)
    print(result);
arr = input("Enter an array with a space in between each number: ").split()
arr = [int(x) for x in arr]
positive(arr)
