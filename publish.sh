#Run this from the path the book is in.

#Make the book
jupyter-book build ./

#Push to github pages
ghp-import -n -p -f _build/html
