furniture = ['table', 'chair', 'rack', 'shelf']

# Normal for loop
# for item in furniture:
#     print(item)


# Iterating with index and value
# for index, item in enumerate(furniture):
#     print(index, item)


# Print 0 to 3 ele's of furniture
# print(furniture[0:3])

# Add to end of the list
# furniture.append('sofa')


# Length of list
# print(len(furniture))

# Swap elements in a list
# furniture[2] = furniture[1]


# In and not in
# print('rack' not in ['table', 'chair', 'rack', 'shelf'])
# print('bed' in ['table', 'chair', 'rack', 'shelf'])


# Swapping variables
# a, b = 'table', 'chair'
# a, b = b, a
# print(a, b)


# Index of value in a list
# print(furniture.index('chair'))


# Insert at specific index
# furniture.insert(1, 'bed')


# Removing Values
# del furniture[2]
# furniture.remove('chair')



animals = ['cat', 'bat', 'rat', 'elephant']

# Pop removes last value and returns it
# animals.pop()


# Sorting a list of numbers
numbers = [2, 5, 3.14, 1, -7]

# numbers.sort()
# numbers.sort(reverse=True)


# Tuples vs Lists
# The key difference between tuples and lists is that, 
# while tuples are immutable objects, lists are mutable. 
# This means that tuples cannot be changed while the lists can be modified.
# Tuples are more memory efficient than the lists.


# furniture = ('table', 'chair', 'rack', 'shelf')
# tuple(['cat', 'dog', 5])
# list(('cat', 'dog', 5))


# print(numbers)





# Python Dictionaries
# my_cat = {
#     'size': 'fat',
#     'color': 'gray',
#     'disposition': 'loud'
# }

# my_cat['age_years'] = 2

# for value in my_cat.values():
#     print(value)

# for key, val in my_cat.items():
#     print(key, val)

# del my_cat['age_years']


# Merge two dictionaries
# dict_a = {'a': 1, 'b': 2}
# dict_b = {'b': 3, 'c': 4}

# dict_c = {**dict_a, **dict_b}



# Python Sets
# s = {1, 2, 3}
# print(type(s))

# nums = [1, 2, 3, 4, 5, 6]
# new_list = [num*2 if num % 2 == 0 else num for num in nums]

# print(new_list)



# b = {"abc", "def"}
# c = {s.upper() for s in b}

# print(c)

# c = {'name': 'Pooka', 'age': 5}
# d = {v: k for k, v in c.items()}
# e = ["{}:{}".format(k.upper(), v) for k, v in c.items()]

# print(d, e)






# spam = 'Hello world!'
# print(spam[0:5])



# greet = 'Hello world!'
# print(greet.upper())
# print(greet.lower())


# print('Hello world!'.startswith('Hello'))
# print('abc123'.endswith('12'))


# print(''.join(['My', 'name', 'is', 'Simon']))
# print(', '.join(['cats', 'rats', 'bats']))


# A generator function that yields 1 for first time,
# 2 second time and 3 third time
# def simpleGeneratorFun():
#     yield 1            
#     yield 2            
#     yield 3            
 
# Driver code to check above generator function
# for value in simpleGeneratorFun(): 
#     print(value)


# class MyCustomException(Exception):
#     pass

# raise MyCustomException('A custom message for my custom exception')

# def sample():
#     try:
#         raise MyCustomException('A custom message for my custom exception')
#     except:
#         print("hello")

# sample()


# def some_function(*args):
#     print(args)
#     # print(type(args))
#     pass

# some_function(1,2,"yo")

# def some_function_2(**kwargs):
#     print(kwargs)
#     pass

# some_function_2(name="kpas",some="helow", random="argument")



# cache = [ [float("Inf")] * (len("acd") + 1) for i in range(len("abd") + 1) ]

# print(cache)