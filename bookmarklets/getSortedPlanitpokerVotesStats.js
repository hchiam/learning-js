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

  var mode = [];
  var counts = {};
  for (var i = 0; i < votes.length; i++) {
    var voteOption = votes[i];
    if (voteOption in counts) {
      counts[voteOption]++;
    } else {
      counts[voteOption] = 1;
    }
  }
  var maxCount = 0;
  for (var value of Object.keys(counts)) {
    var count = counts[value];
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
    "Scraped from planITpoker: \n\n" +
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

  alert(clipboardText);
  copyToClipboard(clipboardText);

  function copyToClipboard(text) {
    try {
      navigator.clipboard.writeText(text).catch(function (err) {
        alert(
          "Could not automatically copy to clipboard. \n\n Manually copy this text instead: \n\n" +
            text
        );
        console.log(err);
      });
    } catch (e) {
      try {
        var temp = document.createElement("input");
        document.body.append(temp);
        temp.value = text;
        temp.select();
        document.execCommand("copy");
        temp.remove();
      } catch (err) {
        alert(
          "Could not automatically copy to clipboard. \n\n Manually copy this text instead: \n\n" +
            text
        );
        console.log(err);
      }
    }
  }
})();
