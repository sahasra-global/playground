# Create a function to calculate the distance between two points defined by their x, y coordinates
x1 ,y1 = input("Enter the coordinates of the first point: ").split(",")
x2 , y2 = input("Enter the coordinates of the second point: ").split(",")
distance = ((int(x2) - int(x1))**2 + (int(y2) - int(y1))**2)**0.5

print(distance)