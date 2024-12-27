# Create a function that will convert a string containing a binary number into a number

binary_string = input("Enter a binary number in 1's and 0's: ")

if not all(char in '01' for char in binary_string):
    print("Error: Input string must contain only '0' and '1'.")
else:
    decimal_number = int(binary_string, 2)
    print(decimal_number)