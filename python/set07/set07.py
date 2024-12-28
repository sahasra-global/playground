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
# Create a function that will convert an array containing ASCII codes in a string

######################################################################################
# Implement the Caesar cypher

######################################################################################
# Implement the bubble sort algorithm for an array of numbers