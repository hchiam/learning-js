javascript: (function () {
  var votes = Array.from($(".voting"))
    .map((x) => $(x).text().trim())
    .map((x) => (x === "½" ? 0.5 : x))
    .filter((x) => x !== "" && !isNaN(x))
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
  var mode = [];
  var maxCount = 0;
  for (var value of Object.keys(counts)) {
    var count = counts[value];
    console.log(value, count);
    if (count > maxCount) {
      maxCount = count;
    }
  }
  for (var key of Object.keys(counts)) {
    if (counts[key] === maxCount) {
      mode.push(Number(key));
    }
  }
  console.log("mode", mode);

  var clipboardText =
    "Vote numbers: [ " +
    votes.join(", ") +
    " ]" +
    " \nMean: " +
    mean +
    " \nMedian: " +
    median +
    " \nMode(s): [ " +
    mode.join(", ") +
    " ]";

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
