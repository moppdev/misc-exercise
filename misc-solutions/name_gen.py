# import necessary libraries
import json
import random

# open the json and load it into a dict
with open("Names.txt","r") as file_of_names:
    names = json.load(file_of_names)

# generate a random number to decide if the first name will be a girl's or a boy's
first_decider = random.randint(1,2)
if first_decider == 1:
    first_name = names["boys"][random.randint(0,995)]
elif first_decider == 2:
    first_name = names["girls"][random.randint(0,995)]

# create a complete name
whole_name = first_name + " "+ names["last"][random.randint(0,998)]

# print the name
print("Name generated: " + whole_name)