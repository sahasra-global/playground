# Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

x1 , y1 = input("Enter the coordinates of the center of the first circle: ").split(",")
x2 , y2 = input("Enter the coordinates of the center of the second circle: ").split(",")
r1 = int(input("Enter the radius of first circle: "))
r2 = int(input("Enter the radius of the second circle: "))
distance = ((int(x2)-int(x1))**2 + (int(y2)-int(y1))**2)**0.5

if distance < (r1+r2):
    print("True")
else:
    print("False")
