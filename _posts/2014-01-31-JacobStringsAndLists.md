---
layout: post
author: jacobthill
title: Strings & Lists Exercises
---

###Python String Exercises 

#String Exercise 6

```

def reverse(astring):
	bstring = astring[::-1]
	return bstring

print(reverse("chicken"), )

```

#String Exercise 7

```

def reverse(astring):
	bstring = astring[::-1]
	return bstring

def mirror(astring):
	bstring = astring[::-1]
	return astring + bstring
	
print(mirror("good"), )
	
```


#String Exercise 11

```

def remove(sub_str, the_str):
	find = the_str.find(sub_str)
		if find < 0: # the string isn't found
			return the_str
	return_str = the_str[:find] + the_str[find + len(sub_str):]
	return return_str
	
print(remove('an', 'banana'), )
	
```

#String Exercise 12

```

sentence = "This is a practice sentence."
remove_list = ['practice']
word_list = sentence.split()
print(' '.join([i for i in word_list if i not in remove_list]))
	
```

###Python List Exercises

#List Exercise 7

```

def odd_count(number):
	# make a counting variable
	count_total = 0
	# is it odd?
	for i in number:
		if i % 2 == 1:
			count_total += 1
			
	return count_total

print(odd_count([1,3,4,3,5,6,6,7,3,4]))
	
```

#List Exercise 8

```

def even_sum(number):
	# make a counting variable
	count_total = 0
	# is it even?
	for i in number:
		if i % 2 == 0:
			count_total = count_total + i
	return count_total
	
print(even_sum([2,4,3,5,6,5,4,7]))
	
```

#List Exercise 9

```

def neg_sum(number):
	# make a counting variable
	count_total = 0
	# is it negative?
	for i in number:
		if i < 0:
			count_total = count_total + i
	return count_total
	
print(neg_sum([2,3,1,4,5,6,4,8,9]))
	
```

#List Exercise 14

```

def replace_word(a_text, old, new):
	a_text = a_text.replace(old, new)
	return a_text
	
print(replace_word("this is a test script.", "test", "working"))
	
```

	




