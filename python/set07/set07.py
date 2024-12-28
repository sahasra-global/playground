def extract_words(text):
    return text.split()

# Problem 1: Testing
text = "This is a sample text with several words."
print(extract_words(text))

######################################################################################
def csv_to_array(csv_text):
    # Split the text into lines
    lines = csv_text.strip().split("\n")

    # Split each line into values
    array = [line.split(",") for line in lines]
    
    return array

# Problem 2: Testing
csv_text = "name,age,city\nJohn,30,New York\nJane,25,Los Angeles"
print(csv_to_array(csv_text))

######################################################################################

def string_to_array(s):
    return list(s)

# Problem 3: Testing
text = "hello"
print(string_to_array(text))  # Output: ['h', 'e', 'l', 'l', 'o']

######################################################################################
# Create a function that will convert a string in an array containing the ASCII codes of each character

def convertingStringToASCII(words):
    words = str.split(" ")
    for word in words:
        first_letter = word[0]
        if 'A' <= first_letter <= 'Z':
            first_letter = chr(ord(first_letter) + 32)
        elif 'a' <= first_letter <= 'z':
            first_letter = chr(ord(first_letter) - 32)
        
        print(first_letter + word[1:], end=' ')

# Problem 4: Testing
s = "This is a test of string manipulation"
print(convertingStringToASCII(s))

######################################################################################

def ascii_array_to_string(ascii_array):
    return ''.join(chr(code) for code in ascii_array)

# Problem 5: Testing
ascii_array = [72, 101, 108, 108, 111]
print(ascii_array_to_string(ascii_array))  # Output: "Hello"

######################################################################################

def caesar_cipher(text, shift):
    result = []
    for char in text:
        if char.isupper():
            result.append(chr((ord(char) - 65 + shift) % 26 + 65))
        elif char.islower():
            result.append(chr((ord(char) - 97 + shift) % 26 + 97))
        else:
            result.append(char)
    return ''.join(result)

# Problem 6: Testing
print(caesar_cipher("Hello World", 3))  # Output: "Khoor Zruog"

######################################################################################

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap arr[j] and arr[j + 1]
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Problem 7: Testing
array = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(array))  # Output: [11, 12, 22, 25, 34, 64, 90]