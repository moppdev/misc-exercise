# modules used
import sys
import math

# BMI Calculator

def main():
    print("Welcome to the BMI calculator!")

    # get the weight and height of the user, check for valid input as well
    try:
        weight = int(input("Please enter your weight in kilograms: "))
    except ValueError:
        print("Please enter a valid weight in numeric format")
        sys.exit(1)

    try:
        height = float(input("Please enter your height in metres: "))
    except ValueError:
        print("Please enter a valid height in numeric format")
        sys.exit(1)
    
    # calculate the BMI and return it to the user
    BMI = round(weight / math.pow(height, 2))
    print(f"Your BMI is: {BMI}")

main()