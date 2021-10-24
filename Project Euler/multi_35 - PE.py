import sys

def main():
	limit = input("Up until what number would you like to sum the multiples of 3 and 5?")
	try:
		limit = int(limit)
	except ValueError:
		print("Please enter a valid value")
		sys.exit(1)
	if limit < 0:
		print("Negative Numbers are not allowed")
		sys.exit(1)
	sum = sum_multiples_3_5(limit)
	print(f"The sum of the multiples of 3 and 5 below {limit} is: {sum}")
	sys.exit(0)
	
def sum_multiples_3_5(number):
	sum = 0
	for i in range(0, number):
		if i % 3 == 0 or i % 5 == 0:
			sum = sum + i
	return sum

main()