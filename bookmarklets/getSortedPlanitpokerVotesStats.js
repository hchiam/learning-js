javascript: (function () {
  var votes = Array.from($(".voting"))
    .map((x) => $(x).text().trim())
    .filter((x) => x !== "")
    .map((x) => Number(x))
    .sort((a, b) => a - b);
  console.log(votes);

  var mean = votes.reduce((a, b) => a + b, 0) / votes.length;
  console.log("mean", mean);

  var middleIndex = (votes.length - 1) / 2;
  var median = votes[middleIndex];
  if (median === undefined)
    median = (votes[middleIndex - 0.5] + votes[middleIndex + 0.5]) / 2;
  console.log("median", median);

  var counts = {};
  for (var i = 0; i < votes.length; i++) {
    var voteOption = votes[i];
    if (voteOption in counts) {
      counts[voteOption]++;
    } else {
      counts[voteOption] = 1;
    }
  }

  var mode = votes[0];
  var maxCount = 0;
  for (var value of Object.keys(counts)) {
    var count = counts[value];
    console.log(value, count);
    if (count > maxCount) {
      mode = Number(value);
      maxCount = count;
    }
  }
  console.log("mode", mode);

  var clipboardText =
    "Votes: [" +
    String(votes) +
    "]" +
    " \nMean: " +
    mean +
    " \nMedian: " +
    median +
    " \nMode: " +
    mode;

  var textarea = document.createElement("textarea");
  selection = document.getSelection();
  textarea.textContent = clipboardText;
  document.body.appendChild(textarea);
  selection.removeAllRanges();
  textarea.select();
  document.execCommand("copy");
  selection.removeAllRanges();
  document.body.removeChild(textarea);
})();
