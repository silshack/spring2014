---
author: brittany
title: Brittany's Data Structures Exercises
layout: post
---

##Below is my code for each of the four data structures exercises


###Exercise 1

*Write a program that reads a file, breaks each line into words, strips whitespace and punctuation from the words, and converts them to lowercase.*

This one wasn't too bad. The main thing I had a bit of difficulty figuring out was how to strip punctuation from the string. After a bit of googling, I came across a [stackoverflow question](http://stackoverflow.com/questions/265960/best-way-to-strip-punctuation-from-a-string-in-python) that addressed this issue

```
#!/usr/bin/python
import sys
import string

def stringManipulation(file):

'''
Tokenizes a set of text into each word, removing punctuation and making lowercase
Returns an array with all instances of words
'''

    file = open(file)
    modifiedWords = []    #variable used to store all of the stripped tokens
    for line in file.readlines():
        cleanedLine = line.strip()  #remove whitespace
        words = cleanedLine.split()  #split each line into a list of individual strings
        for word in words:
            word = word.translate(string.maketrans("",""), string.punctuation).lower() #remove punctuation and lowercase, code modified from here: http://stackoverflow.com/questions/265960/best-way-to-strip-punctuation-from-a-string-in-python
            modifiedWords = modifiedWords + [word]  #concat arrays to create one big array of all words
    return modifiedWords    #return array of all words
```


###Exercise 2
*Modify your program from the previous exercise to read the book you downloaded, skip over the header information at the beginning of the file, and process the rest of the words as before.*

This was a bit harder, because I wasn't sure how much of the header to remove (or even where the header ended and the book began). I decided to just go with all the text occurring after the * * * START OF THIS PROJECT GUTENBERG EBOOK.... * * * . This still includes some text that probably isn't desirable, but I wasn't sure what other pattern I could use to let the program know that the text was beginning. Rest of the code was almost identical to prior exercise.
Since the next step was to come up with word counts, I decided to use this function like a map function in a map-reduce problem. I added a 1 to each string, so that in the next step the totals could be easily calculated. Along the same lines, I also had to figure out how to sort the text, which was probably the most difficult part of this problem for me.


```
def stringManipulationPG(file):
'''#Goes to the beginning of a Project Gutenberg book and tokenizes text into words, removing punctuation and making lowercase. Returns a list of 'word,value' pairs for each instance of a token output to the file 'output.txt.' Sorts list in preparation for reducing step'''
    startBook = False
    totalWords = 0
    fullArray = []
    output = ''
    file = open(file)
    for line in file.readlines():
        if line.find("*** START OF THIS PROJECT GUTENBERG EBOOK") != -1:
            startBook = True
        elif line.find("*** END OF THIS PROJECT GUTENBERG EBOOK") != -1: #reached end of ebook, so stop adding lines
            startBook = False       
        elif startBook and line.find("*** START OF THIS PROJECT GUTENBERG EBOOK") == -1 and len(line) > 1:
            cleanedLine = line.strip()
            words = cleanedLine.split()
            modifiedWords = []
            for word in words:
                word = word.translate(string.maketrans("",""), string.punctuation).lower() #used code at following link: http://stackoverflow.com/questions/265960/best-way-to-strip$
                if word != "":
                    modifiedWords = modifiedWords + [word]
                    totalWords = totalWords + 1
            fullArray = fullArray + modifiedWords
    for element in sorted(fullArray):
        output = output + element+",1\n"
    with open('output.txt', 'w') as f:    #modified code here: http://stackoverflow.com/questions/2373555/how-to-save-the-output-to-a-text-file-for-a-python-script
        f.write(output)
    return 'output.txt'
 
```

###Exercise 3
*Modify the program from the previous exercise to print the 20 most frequently-used words in the book.*

I took an Intro to Big Data class last semester, so we did some basic programming for things like this. I first modified some code for a reducer, which I used to reduce the file that was output through the previous exercise's function. After that, I wrote a second function that sorted the results, getting the top 20 frequency counts. Then it found the first 20 words that had those frequency counts. The most troublesome part of this exercise for me was again the sorting, as well as getting my loops right so that the output wouldn't include multiple instances of the same value.

```

def reducer(file):

'''
Reduces the file produced by stringManipulationPG.py, returning a single total for each token. 
Returns output in plain text file, 'output.txt'. 
Code recycled from INLS690: Intro to Big Data & NoSQL, Erik Scott (modified delimeter from "\t" to ",")
'''

    output = ''
    (last_key, sum_val) = (None, 0)
    file = open(file)
    for line in file.readlines():
        (key, val) = line.strip().split(",") #use "," as delimiter instead of '\t'
        if last_key and last_key != key:
            output = output + last_key+","+str(sum_val)+"\n"
            (last_key, sum_val) = (key, int(val))
        else:
            (last_key, sum_val) = (key, sum_val + int(val))

    if last_key:
        output = output + last_key + "," + str(sum_val) + "\n"
    with open('output.txt','w') as f:
        f.write(output)
    return 'output.txt'
    
def printTopWords(file):

'''
Finds top 20 most frequently occurring terms in a file. 
Input file expected to come from reducer.py output. Returns output in plain text file, 'output.txt' 
'''
    fullArray = []
    numArray = []
    file = open(file)
    for line in file.readlines():
        line = line.strip()
        fullArray = fullArray + [line]    #create list with all lines as elements
    for element in sorted(fullArray):
        numArray = numArray + [int(element[element.find(",")+1:])]    #extract numbers from elements
    numArray.sort(reverse=True)      #sort numbers into descending order
    for element in fullArray:
        for num in numArray[0:19]:    #find items in fullarray whose final digits match those of the first 20 of the numarray     
            if int(element[element.find(",")+1:]) == num:    
                if element in fullArray:
                    fullArray.remove(element)    #remove element in order to prevent multiple instances of the same element being printed
                    print element               
```

###Exercise 4

*Modify the previous program to read a word list (see Section 9.1) and then print all the words in the book that are not in the word list. How many of them are typos? How many of them are common words that should be in the word list, and how many of them are really obscure?*

My main issue here was figuring out the logic of the loops that I included at the end of the code. The nested for-loops, figuring out if I needed to break out of them, etc was tricky. I tried breaking at different spots, triggering the boolean at different points, etc and running to see what my output was. I tested in this way until the output was what I expected. I also found the need for two files (the 'dictionary' and whatever input used) to be a bit difficult. I assumed that the [words.txt file](http://thinkpython.com/code/words.txt) was something already on the user's machine, but perhaps I should have just included it as an argument of the function. Figuring out how to use file inputs was one of the big things I didn't know how to do before I did all of these exercises, so I had to do a bit of searching to figure that out. I was used to using sys.stdin() and issuing command line statements like 'cat file.txt | python program.py > output.txt'.

```

def checkForWords(file):

'''
Compares words in an input document file to a master word list, 'words.txt'. 
Prints words that are not present
'''

    file = open(file)
    allWords = open('words.txt')
    dictionary = [line.rstrip('\r\n') for line in allWords] #modified code found here: http://stackoverflow.com/questions/14535619/remove-line-break-from-each-element-in-python
    for line in file.readlines():
        line = line.strip()
        words = line.split()
        for word in words:
            word = word[0:word.find(",")]
            found = False
            index = 0
            for element in dictionary:
                if found:
                    break
                if word == element:
                    found = True
                    break
                elif word != element and index < len(dictionary)-1:
                    index = index + 1
                else:
                    print "The word " + word + " is not in the dictionary"
                    break
```


##FULL PROGRAM WITH EXAMPLE COMMANDS
I used the following file as my book.txt input: [http://www.gutenberg.org/cache/epub/44848/pg44848.txt](http://www.gutenberg.org/cache/epub/44848/pg44848.txt)
The words input was taken from the following link: [http://thinkpython.com/code/words.txt](http://thinkpython.com/code/words.txt)

```
#!/usr/bin/python
import sys
import string


def stringManipulation(file):

'''
Tokenizes a set of text into each word, removing punctuation and making lowercase. 
Returns an array with all instances of words
'''

    file = open(file)
    modifiedWords = []
    for line in file.readlines():
        cleanedLine = line.strip()
        words = cleanedLine.split()
        for word in words:
            word = word.translate(string.maketrans("",""), string.punctuation).lower()
            modifiedWords = modifiedWords + [word]
    return modifiedWords


def stringManipulationPG(file):

'''
Goes to the beginning of a Project Gutenberg book and tokenizes text into words, removing punctuation and making lowercase. 
Returns a list of 'word,value' pairs for each instance of a token output to the file 'output.txt'. 
Sorts list in preparation for reducing step
'''

    startBook = False
    totalWords = 0
    fullArray = []
    output = ''
    file = open(file)
    for line in file.readlines():
        if line.find("*** START OF THIS PROJECT GUTENBERG EBOOK") != -1:
            startBook = True
        elif line.find("*** END OF THIS PROJECT GUTENBERG EBOOK") != -1: #reached end of ebook, so stop adding lines
            startBook = False           
        elif startBook and line.find("*** START OF THIS PROJECT GUTENBERG EBOOK") == -1 and len(line) > 1:
            cleanedLine = line.strip()
            words = cleanedLine.split()
            modifiedWords = []
            for word in words:
                word = word.translate(string.maketrans("",""), string.punctuation).lower() #used code at following link: http://stackoverflow.com/questions/265960/best-way-to-strip$
                if word != "":
                    modifiedWords = modifiedWords + [word]
                    totalWords = totalWords + 1
            fullArray = fullArray + modifiedWords
    for element in sorted(fullArray):
        output = output + element+",1\n"
    with open('output.txt', 'w') as f:    #modified code here: http://stackoverflow.com/questions/2373555/how-to-save-the-output-to-a-text-file-for-a-python-script
        f.write(output)
    return 'output.txt'


def reducer(file):

'''
Reduces the file produced by stringManipulationPG.py, returning a single total for each token. 
Returns output in plain text file, 'output.txt'. 
Code recycled from INLS690: Intro to Big Data & NoSQL (modified delimeter from "\t" to ",")
'''

    output = ''
    (last_key, sum_val) = (None, 0)
    file = open(file)
    for line in file.readlines():
        (key, val) = line.strip().split(",") #was \t
        if last_key and last_key != key:
            output = output + last_key+","+str(sum_val)+"\n"
            (last_key, sum_val) = (key, int(val))
        else:
            (last_key, sum_val) = (key, sum_val + int(val))

    if last_key:
        output = output + last_key+","+str(sum_val)+"\n"
    with open('output.txt','w') as f:
        f.write(output)
    return 'output.txt'

def printTopWords(file): 

'''
Finds top 20 most frequently occurring terms in a file. 
Input file expected to come from reducer.py output. Returns output in plain text file, 'output.txt'. 
'''

    fullArray = []
    numArray = []
    lowest = 0
    topItem = ''
    file = open(file)
    for line in file.readlines():
        line = line.strip()
        fullArray = fullArray + [line]
    for element in sorted(fullArray):
        numArray = numArray + [int(element[element.find(",")+1:])]
    numArray.sort(reverse=True)
    print numArray[0:19]
    for element in fullArray:
        for num in numArray[0:19]:
            if int(element[element.find(",")+1:]) == num:
                if element in fullArray:
                    fullArray.remove(element)
                    print element

def checkForWords(file):

'''
Compares words in an input document file to a master word list, 'words.txt'. 
Prints words that are not present
'''

    file = open(file)
    allWords = open('words.txt')
    dictionary = [line.rstrip('\r\n') for line in allWords] #modified code found here: http://stackoverflow.com/questions/14535619/remove-line-break-from-each-element-in-python
    for line in file.readlines():
        line = line.strip()
        words = line.split()
        for word in words:
            word = word[0:word.find(",")]
            found = False
            index = 0
            for element in dictionary:
                if found:
                    break
                if word == element:
                    found = True
                    break
                elif word != element and index < len(dictionary)-1:
                    index = index + 1
                else:
                    print "The word " + word + " is not in the dictionary"
                    break

def readFile(file):

'''
used to print output files
'''

    file = open(file)
    for line in file.readlines():
        line = line.strip()
        print line


print stringManipulation('book.txt')
readFile(reducer(stringManipulationPG('book.txt')))
printTopWords(reducer(stringManipulationPG('book.txt')))
checkForWords(reducer(stringManipulationPG('book.txt')))

```
