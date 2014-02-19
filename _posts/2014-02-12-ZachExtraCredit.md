---
layout: post
author: zbay
title: Zach's Extra Credit
date: 2014-02-12
---

Fetch me my pocket protector ‘cause I did the extra credit. I do not have Python installed on my computer and I figure that we’ll learn how to use Nitrous in class, so I figured that my effort would be best spent just writing the programs. I can only guarantee that the first one works (I ran a modified version of it on the Python console) but I am pretty confident in all of them. I had to do some research about file processing and dictionaries, and I feel like I’ve learned a decent bit.

EC1: This was straightforward. Just tokenized, removed whitespace, converted to lowercase, and filtered out the punctuation one by one.

```
searchFile = open("file.txt", "r")
#s = "GRAffiti!!@&, 			sWAAAAAg DURrrrrp^$$#@$#@ ZaCHARy 		**!@#!WiLLiams	" #test cases for modified version
punctuation = '"`~!@#$%^&*()+={[]}"\:;|//<,>./?"'
for line in searchFile:
	words = line.split(" ")
	for word in words:
    	word = word.strip()
    	word = word.lower()
    	for i in range(len(punctuation)):
    		word = word.replace(punctuation[i], "")	
    	print(word)
```

EC2: I looked at some Gutenberg text files and figured out what signified the end of a header, and at that point switched on a Boolean so I could start counting words. I figured out how to use dictionaries and mapped words to their count numbers.

```
searchFile = open("book.txt", "r")
punctuation = '"`~!@#$%^&*()+={[]}"\:;|//<,>./?"'
processThis = False
dictionary = {}
for line in searchFile:
	if line.startswith("*** END OF THIS PROJECT GUTENBERG EBOOK"):
		processThis = False
	if processThis:
		words = s.split(" ")
		for word in words:
			word = word.strip()
			word = word.lower()
			for i in range(len(punctuation)):
				word = word.replace(punctuation[i], "")
			if word in dictionary:
				dictionary[word] += 1
			else:
				dictionary[word] = 1
	else:
		if line.startswith("*** START OF THIS PROJECT GUTENBERG EBOOK"):
			processThis = True
for key in dictionary:
	print key + ": " + dictionary[key]
close()
```

EC3: I used a simple sorting algorithm to filter the top 20 most common words from the dictionary. I populated the dictionary with the first 20 words from the text, and then replaced them if a later word had more occurrences.

```
searchFile = open("book.txt", "r")
punctuation = '"`~!@#$%^&*()+={[]}"\:;|//<,>./?"'
processThis = False
dictionary = {}
top20 = {}
deleteKey = ""
for line in searchFile:
	if processThis:
		words = s.split(" ")
		for word in words:
			word = word.strip()
			word = word.lower()
			for i in range(len(punctuation)):
				word = word.replace(punctuation[i], "")
			if word in dictionary:
				dictionary[word] += 1
			else:
				dictionary[word] = 1
	else:
		if line.endswith(">>"):
			processThis = True
for key in dictionary:
	if len(top20) < 20:
		top20[key] = dictionary[key]
	else:
		for ki in top20:
			if top20[ki] < dictionary[key]:
				top20[key] = dictionary[key]
				deleteKey = ki 
	if deleteKey != "":
		del top20[deleteKey]
		deleteKey = ""
for key in top20:
	print key + ": " + top20[key]
close()
```

EC4: I made this one easy, for brevity's sake, by assuming that my words to compare against the book’s words were already formatted properly. I just made a list of words that appended words that did not appear in the book’s text.

```
searchFile = open("book.txt", "r")
wordFile = open("wordList.txt", "r")
punctuation = '"`~!@#$%^&*()+={[]}"\:;|//<,>./?"'
processThis = False
dictionary = {}
notInBook = []
for line in searchFile:
	if processThis:
		words = s.split(" ")
		for word in words:
			word = word.strip()
			word = word.lower()
			for i in range(len(punctuation)):
				word = word.replace(punctuation[i], "")
			if word in dictionary:
				dictionary[word] += 1
			else:
				dictionary[word] = 1
	else:
		if line.endswith(">>"):
for line in wordFile: #assuming that wordList is properly formatted with no punctuation, whitespace, or caps
	if line not in dictionary:
		notInBook.append(line)
for word in notInBook:
		print(word)
close()
```
