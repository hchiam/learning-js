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

## Enable running bookmarklets quickly with your keyboard in Firefox

For even faster usage (typing instead of manually clicking), you can enable bookmarklets to show up in Firefox URL address bar search suggestions:

1. Go to the `about:config` page in Firefox (type `about:config` in the address bar and hit enter).
2. If you understand what you're doing, accept the risk and continue.
3. Carefully search for `browser.urlbar.filter.javascript`, click on the double-arrows icon to toggle it to `false`, and close the `about:config` page.
4. Go to the `about:preferences#privacy` page in Firefox, and then under "Address Bar", toggle the checkmark to enable Bookmarks. This will let bookmarklets show up in address bar suggestions.

Chrome currently includes bookmarks (and bookmarklets) in search suggestions by default. The above steps can let you set up Firefox to do the same.
