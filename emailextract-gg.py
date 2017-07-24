import os, re #importing Python's operating system path and regex modules

src_dir = "C:\\Users\\gutmach\\Documents\\GitHub\\HiretualClass\\"
# substitute above your folder path to where the source file can be found inside the quotation marks.
# Note the double backslashes for each folder level down.
infile = "parse-emails.txt" # name of input/source file, which must exist in folder path above
outfile = "parse-emails.csv" # name of output file; ok if it doesn't exist yet
#change these to whatever you like

file_input = os.path.join(src_dir, infile) # Save path + filename into a variable to reuse
file_output = os.path.join(src_dir, outfile) # ditto for the output

with open(file_input, "r") as fi, open(file_output, "a") as fo:
    #fi is var for file to input from, fo for file to output to
    #"r" is open for read only, "a" is append to file (won't overwrite a file as "w" can)
    for line in fi: # loop over lines in the open input file handle
        regex = re.compile("[\w\.-]+@[\w\.-]+")
        # re.findall() is a built-in library function to search all matched-pattern
        # substrings from a string. '[\w\.-]+@[\w\.-]+' is a regular expression
        matches = re.findall(regex, line)
        # If the matched-pattern substrings are found, the variable of "matches" save them
        if not matches: # We have to check if the variable is empty/null
            continue # If the variable "matches" is empty/null, ignore the following code & continue w/next loop
        # This "for loop" is to save each matched substring to a file, vs. print(match) that just prints to the screen
        for match in matches:
            fo.write(match + '\n') # append a new line to output file containing the value in variable match (email address) followed by a line return

    fo.close #always close your files when finished
    fi.close #ditto
