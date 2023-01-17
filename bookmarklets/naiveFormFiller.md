<!-- View on GitHub to get the convenient copy-to-clipboard button: -->

# Hover over the code to see the copy-to-clipboard button:

![animation showing how to hover to get the copy-to-clipboard button](copy-code-to-clipboard.gif)

```js
javascript: (function () {
  $('input[type="text"]:visible').val("test");
  $('input[type="radio"]:visible').prop("checked", true);
  $('input[type="checkbox"]:visible').prop("checked", true);
  $('input[type="email"]:visible').val("test@example.com");
  $("select:visible").each(function () {
    var s = $(this);
    s.val(s.find("option:last-of-type").val());
  });
})();
```
