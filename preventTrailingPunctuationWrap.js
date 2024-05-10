/**
Based on: https://www.freecodecamp.org/news/what-is-punct-in-regex-how-to-match-all-punctuation-marks-in-regular-expressions/

Example:
$('.test').innerHTML = preventTrailingPunctuationWrap(`qu'est-ce que c'est que ca? je ne sais pas<span style="white-space: nowrap;"> </span>: `.repeat(2));
// qu'est-ce que c'est que ca? je ne sais pas<span style="white-space: nowrap;"> </span>: qu'est-ce que c'est que ca? je ne sais pas<span style="white-space: nowrap;"> </span>: 
*/
function preventTrailingPunctuationWrap(text) {
  return text.replace(/\s+(\p{P}\s+?)$/gu, '<span style="white-space: nowrap;"> </span>$1');
}
