# Bookmarklets

Only use a bookmarklet after you read and understand its code!

More info: https://en.wikipedia.org/wiki/Bookmarklet

![example bookmarks](ExampleBookmarks.png)

An alternative to bookmarklets are [Chrome Snippets](https://developer.chrome.com/docs/devtools/javascript/snippets/).

## Tips for converting from normal JS to bookmarklet

- wrap it in `javascript:(function(){` … `})();`
- encode `%` as `%25`, so console.log `%c` becomes `%25c`
- remove comments that use `//`

Or just use https://bookmarklet-generator.surge.sh

## Minimizing diffs between the JS version and bookmarklet version

- you can keep the wrapping `javascript:(function(){` … `})();` in the JS (still works in browser console)
- change `%25c` back to `%c` inside console.log
- (but you’ll likely want to put back the comments)

## There's also the possibility of HTML

For example `data:text/html,<html></html>`: https://github.com/hchiam/learning-js/blob/main/bookmarklets/notepad.html
