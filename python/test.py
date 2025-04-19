numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums = numbers[1 : : 2]
# print(nums)  #output : [2, 4, 6, 8, 10]
# print(numbers)

# Multi-line comment
""" djsanjkdnass
    mdklsamdksmas
"""

obj:dict = {}

obj['name'] = 'kapil'
obj['details'] = {
    'age': 29
}

# print(obj['details']['age'])

# Set vs frozenset


# List vs tuples

my_tuple = ('sara', 6, 5, 0.97)
my_list = ['sara', 6, 5, 0.97]
print(my_tuple[0])     # output => 'sara'
print(my_list[0])     # output => 'sara'
my_tuple[0] = 'ansh'    # modifying tuple => throws an error
my_list[0] = 'ansh'    # modifying list => list modified
print(my_tuple[0])     # output => 'sara'
print(my_list[0])     # output => 'ansh'

