#Run this from the path the book is in.

#Make the book
jupyter-book build ./

#Inject the chattutor code into the html
#python ./chattutor_setup/install.py

#Push to github pages
ghp-import -n -p -f _build/html

