# for example: yarn test1 deepMerge
if [ $# -eq 0 ]; then
    echo "enter the first part of the JS file's name, for example: yarn test1 deepMerge"
else
    jest --bail --findRelatedTests $@.test.js
fi