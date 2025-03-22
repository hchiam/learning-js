# this is also an example of passing an argument (parameter) to a package.json script, which runs in this .sh file with the argument as $@

# for example: yarn test1 deepMerge
if [ $# -eq 0 ]; then # $# is for the number of parameters
    echo "enter the first part of the JS file's name, for example: yarn test1 deepMerge"
else
    jest --bail --findRelatedTests $@.test.js
fi