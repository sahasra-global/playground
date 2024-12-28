def find_max_in_jagged_array(jagged_array):
    max_num = float('-inf')  # Start with the smallest possible value

    def find_max(arr):
        nonlocal max_num
        for item in arr:
            if isinstance(item, list):
                find_max(item)  # Recursively find the max in nested arrays
            else:
                max_num = max(max_num, item)  # Update the maximum number

    find_max(jagged_array)
    return max_num

# Problem 1: Testing
jagged_array = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]]
print(find_max_in_jagged_array(jagged_array))

#####################################################################################





#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
