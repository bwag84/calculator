#pseudocode #odin


We are making a calculator in the browser.
# Forbidden code

- Do not use the eval() function
- Do not use new Function()


# UX

Use Tailwind CSS to style the calculator.html file.
Make sure to use external CSS styling
Center the calculator
Make sure the keyboard can be used for all the operations.
The operations are add, subtract, multiply and divide. We also want = visualized to execute the operation.

Make the "screen" of the calculator look old school with blocky 8 bit numbers in bright green to a brownish background color.

# Functionality
- Create a function to add
- Create a function to subtract
- Create a function to multiply
- Create a function to divide
- Add a button for users to create decimals, it has a dot (.).
	- Disable this button if there already is a decimal on the "screen"


- The calculator needs to visualize the first number entered, the operator and the second number before executing the calculation

- Name the function that executed the calculation operate

- Make sure to store the numbers entered temporarily

- Never allow the calculator to accept more than 2 numbers. Always perform the calculation when a third is entered. For example 2+2, when the user hits + again, add up to get to 4, then add the third to that. In other words, only evaluate a single pair of numbers at a time.

- Round answers to maximum 2 decimals

- Account for errors caused by pressing the = button prematurely

- Add a C button for clear, that should reset the calculator completely
- If the user tries to divide by 0, message "ERROR" and reset the calculator


* Phases

0. write the test! 


1. Add simple calculus functions
2. expand function by function



