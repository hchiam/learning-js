// regex lookahead:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead

// I like my answer better:
let sampleWord = "astronaut";
let pwRegex = /^\D(?=.{5,})(?=.*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

// fancier repeat capture groups:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups

// for example:
/(\w+)\s\1/; // repeats (\w+) again at the \1

// fancier capture group swapping/replacements:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace

// for example:
"Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
// Returns "Camp Code" because group $1 and $2 are swapped in the replaceWith parameter string

// backreference with \1 \2 \3 etc: (different from replacement $1 $2 $3 etc)
// https://javascript.info/regexp-backreferences
`"This_has_matching_brackets" 'This_also_has_matching_brackets' "not_this' 'not_this_either"`.replace(
  /("|')[^"'\s]*\1/g,
  ""
); // replaces "..." and '...' but ignores "...' and '..."

// there's also named capture groups:
const [all, year, month, day] =
  /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec("2020-03-04");
console.log(all, year, month, day);

// and you can backreference named capture groups with numbers:
// just remember (?<name>) and \k<name>
`"This_has_matching_brackets" 'This_also_has_matching_brackets' "not_this' 'not_this_either"`.replace(
  /(?<quote>"|')[^"'\s]*\k<quote>/g,
  ""
);

// more to learn: https://www.smashingmagazine.com/2019/02/regexp-features-regular-expressions/
