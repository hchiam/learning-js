# Copy template folder with color theme from selected image

## TL;DR

```bash
node run.js
```

Files you need: `run.js`, `png-node.js`, an image, and a template folder.

## Notes to self: two options

1. website (libraries acceptable, since no need to manually install)

   - choose png + choose folder
   - generate copy of folder by recursively copying files and folders
   - generate theme by (1) reading png using a library (2) editing all css files with user-provided strings to match for primary and secondary colours
   - downside is complicated work to do recursive file system access even with the [File System Access API](https://web.dev/file-system-access)

2. node script version (it's easier to write the code to copy folders)

   - figure out how to get the colour from png without library (avoid making devs install stuff)

```bash
# I think I got this one working
node run.js
```

or

```bash
# I didn't finish this because the other one is working
cd test_web_version && parcel index.html
```
