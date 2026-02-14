# Bookmarklets

What's a bookmarklet? A bookmark that runs JavaScript code! More info here: <https://en.wikipedia.org/wiki/Bookmarklet>

Only use a bookmarklet after you read and understand its code!

![animation showing how to hover to get the copy-to-clipboard button](copy-code-to-clipboard.gif)

![example bookmarks](ExampleBookmarks.png)

An alternative to bookmarklets are [Chrome Snippets](https://developer.chrome.com/docs/devtools/javascript/snippets/).

## Using bookmarklets

1. copy the code of a bookmarklet

2. create a bookmark in Chrome, paste the code you just copied into the URL field, and ideally name that bookmark with a unique name or a unique sequence of letters that's different from your other bookmarks (this helps minimize the number of keys you'll have to press later on)

3. now you can do this in Chrome:

- mac: <kbd>command</kbd> + <kbd>L</kbd>, then type to search for the bookmark name, then hit enter --> the code in the bookmarklet will be run
- pc: <kbd>Ctrl</kbd> + <kbd>L</kbd>, then type to search for the bookmark name, then hit enter --> the code in the bookmarklet will be run

## You can also set up and use bookmarklets on mobile devices

- <https://support.start.me/en/articles/9182868-bookmarklet-install-on-your-mobile-device>
- <https://paul.kinlan.me/use-bookmarklets-on-chrome-on-android/>

## Tips for converting from normal JS to bookmarklet

- wrap it in `javascript:(function(){` … `})();`
- encode `%` as `%25`, so console.log `%c` becomes `%25c`
- remove comments that use `//`, or replace them with `/* ... */` comments
- **_NOTE_**: there's a rough limit of [2000 characters](https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers).

Or just use <https://bookmarklet-generator.surge.sh>

## Minimizing diffs between the JS version and bookmarklet version

- you can keep the wrapping `javascript:(function(){` … `})();` in the JS (still works in browser console)
- change `%25c` back to `%c` inside console.log
- turn `//` comments into `/* ... */` comments

## There's also the possibility of HTML

For example `data:text/html,<html contenteditable></html>`: <https://github.com/hchiam/learning-js/blob/main/bookmarklets/notepad.html>

## Enable running bookmarklets quickly with keyboard shortcuts

Chrome currently includes bookmarks (and bookmarklets) in search suggestions by default. Hit `Ctrl+L` -> type part of the bookmarklet name -> hit Enter to run.

- If you find Chrome suggesting tabs or history annoying, you can disable a flag: chrome://flags/#omnibox-grouping-framework-non-zps

For Firefox: `Ctrl+B` -> type a search -> tab to bookmarklet -> spacebar to select -> Enter to run.

## Example bookmarklet project

<https://github.com/hchiam/basic-page-editor-bookmarklet>
