#!/bin/bash

# Exit on error
set -e
# Echo commands
set -x

# Build the target 
polymer build

cd build/github
git init .
git checkout -b gh-pages
git add -A
git commit -m "Publish to gh-pages"
git remote add origin git@github.com:doctor-g/tsqr.git
git push --force -u origin gh-pages
