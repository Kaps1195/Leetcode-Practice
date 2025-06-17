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
set_obj = {1, 2, 3, 4, 5}
frozenset_obj = frozenset(set_obj)
# print(set_obj)         # output: {1, 2, 3, 4, 5}
# print(frozenset_obj)  # output: frozenset({1, 2, 3, 4, 5})
# set_obj.add(6)        # modifying set => set modified
# print(set_obj)         # output: {1, 2, 3, 4, 5, 6}
# frozenset_obj.add(6)  # modifying frozenset => throws an error
# print(frozenset_obj)  # output: frozenset({1, 2, 3, 4, 5})

# List vs tuples
my_tuple = ('sara', 6, 5, 0.97)
my_list = ['sara', 6, 5, 0.97]
# print(my_tuple[0])     # output => 'sara'
# print(my_list[0])     # output => 'sara'
# my_tuple[0] = 'ansh'    # modifying tuple => throws an error
# my_list[0] = 'ansh'    # modifying list => list modified
# print(my_tuple[0])     # output => 'sara'
# print(my_list[0])     # output => 'ansh'

# List Comprehensions
my_list = [1, 2, 3, 4, 5]
sqaured_list = [x ** 2 for x in my_list]
# print(sqaured_list)  # output: [1, 4, 9, 16, 25]

# Flattening a list of lists
my_list = [[10,20,30],[40,50,60],[70,80,90]]
flattened = [x for temp in my_list for x in temp]
# print(flattened)  # output: [10, 20, 30, 40, 50, 60, 70, 80, 90]


# Example of namespaces in Python
global_var = "I am a global variable"

def my_function():
    local_var = "I am a local variable"
    print("Inside function:", local_var)
    print("Inside function:", global_var)

# my_function()
# print("Outside function:", global_var)
# print(local_var)  # This would raise a NameError

# Lambda functions in Python
mul = lambda a, b : a * b
# print(mul(2, 5))    # output => 10

# Negative indexing in Python
arr = [1, 2, 3, 4, 5, 6]
#get the last element
# print(arr[-1]) #output 6
#get the second last element
# print(arr[-2]) #output 5



# Args vs Kwargs in Python
def add(*args):
    total = 0
    for num in args:
        total += num
    return total

# print(add(1,2,3))


def add_with_kwargs(**kwargs):
    total = 0
    for key, value in kwargs.items():
        print(f"Key: {key}, Value: {value}")
        total += value
    return total

# print(add_with_kwargs(a=1, b=2, c=3))  # output: Key: a, Value: 1 \n Key: b, Value: 2 \n Key: c, Value: 3 \n 6


string = "This is a string."
string_list = string.split(' ') #delimiter is ‘space’ character or ‘ ‘
# print(string_list) #output: ['This', 'is', 'a', 'string.']
# print(' '.join(string_list)) #output: This is a string.

list = ['This', 'is', 'a', 'string.']
for i in range(len(list)):
    list[i] = list[i].upper()
print(list)  # output: ['THIS', 'IS', 'A', 'STRING.']

# print(list.index('A'))

dict = {'name': 'Kapil', 'age': 29, 'city': 'Delhi'}
print(dict.keys())  # output: dict_keys(['name', 'age', 'city'])
print(dict.values())  # output: dict_values(['Kapil', 29, 'Delhi'])
print(dict.items())  # output: dict_items([('name', 'Kapil'), ('age', 29), ('city', 'Delhi')])

