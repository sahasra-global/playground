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

def deep_copy_jagged_array(jagged_array):
    if isinstance(jagged_array, list):
        return [deep_copy_jagged_array(item) for item in jagged_array]
    else:
        return jagged_array

# Problem 2: Testing
original_array = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]]
copied_array = deep_copy_jagged_array(original_array)

# Modifying the copied array to test deep copy
copied_array[1][2][0] = 99

print("Original Array:", original_array)  # Original array should remain unchanged
print("Copied Array:", copied_array)     # Copied array reflects the modification

#####################################################################################

def find_longest_word(s):
    words = s.split()  # Split the string into words
    longest_word = max(words, key=len)  # Find the word with the maximum length
    return longest_word

# Problem 3: Testing
sentence = "The quick brown fox jumped over the lazy dog"
longest = find_longest_word(sentence)
print(longest)  # Output: "jumped"

#####################################################################################

import random

def shuffle_array(arr):
    shuffled = arr[:]
    random.shuffle(shuffled)
    return shuffled

# Problem 4: Testing
array = ["apple", "banana", "cherry", "date", "elderberry"]
shuffled_array = shuffle_array(array)
print("Original Array:", array)  # Original array remains unchanged
print("Shuffled Array:", shuffled_array)

#####################################################################################

def return_random_array(n):
    # Create a list with numbers from 1 to n
    array = list(range(1, n + 1))
    
    # Shuffle the list
    random.shuffle(array)
    
    # Return the shuffled list
    return array

# Problem 5: Testing
print(return_random_array(5))

#####################################################################################

def letter_frequency(s):
    frequency = {}
    for char in s:
        if char.isalpha():
            frequency[char] = frequency.get(char, 0) + 1

    result = []
    for char, count in frequency.items():
        result.append([char, count])

    return result

# Problem 6: Testing
print(letter_frequency("hello world"))