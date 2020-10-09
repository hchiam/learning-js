"use strict";
// https://leetcode.com/problems/video-stitching/
exports.__esModule = true;
function videoStitching(clips, T) {
    if (T === 0)
        return 1;
    clips.sort(function (a, b) { return a[0] - b[0]; });
    if (clips[0][0] > 0)
        return -1;
    var rows = clips.length + 1;
    var cols = T + 1;
    var infinity = Number.POSITIVE_INFINITY;
    // dp of counts, where rows = clips, and cols = time ranges:
    var dp = new Array(rows)
        .fill(null)
        .map(function (row) { return new Array(cols).fill(infinity); });
    dp.map(function (row, index) { return (dp[index][0] = 0); });
    for (var r = 0; r < clips.length; r++) {
        // per clip
        for (var col = 1; col <= T; col++) {
            // per possible range end
            var row = r + 1;
            var useExisting = dp[row - 1][col];
            var currentStart = clips[r][0];
            var currentStop = clips[r][1];
            var addCurrent = col <= currentStop ? 1 : infinity;
            var useCurrent = infinity;
            if (currentStart <= T) {
                useCurrent = dp[row - 1][currentStart] + addCurrent;
            }
            // set min count in dp table:
            // console.log(useExisting, useCurrent);
            dp[row][col] = Math.min(useExisting, useCurrent);
        }
    }
    var answer = dp[rows - 1][cols - 1];
    if (answer === infinity)
        return -1;
    // console.log(answer);
    // console.log(clips);
    // console.log(dp);
    return answer;
}
exports.videoStitching = videoStitching;
// uncomment the next line and run node videoStitching.js:
// manuallyTest();
function manuallyTest() {
    var clips = [
        [0, 2],
        [4, 6],
        [8, 10],
        [1, 9],
        [1, 5],
        [5, 9],
    ];
    var timeRange = 10;
    console.log(3 === videoStitching(clips, timeRange));
    clips = [
        [0, 1],
        [1, 2],
    ];
    timeRange = 5;
    console.log(-1 === videoStitching(clips, timeRange));
    clips = [
        [0, 1],
        [6, 8],
        [0, 2],
        [5, 6],
        [0, 4],
        [0, 3],
        [6, 7],
        [1, 3],
        [4, 7],
        [1, 4],
        [2, 5],
        [2, 6],
        [3, 4],
        [4, 5],
        [5, 7],
        [6, 9],
    ];
    timeRange = 9;
    console.log(3 === videoStitching(clips, timeRange));
    clips = [
        [0, 4],
        [2, 8],
    ];
    timeRange = 5;
    console.log(2 === videoStitching(clips, timeRange));
    clips = [[0, 0]];
    timeRange = 5;
    console.log(-1 === videoStitching(clips, timeRange));
    clips = [[0, 4]];
    timeRange = 5;
    console.log(-1 === videoStitching(clips, timeRange));
    clips = [[1, 5]];
    timeRange = 5;
    console.log(-1 === videoStitching(clips, timeRange));
    clips = [[0, 5]];
    timeRange = 5;
    console.log(1 === videoStitching(clips, timeRange));
    clips = [
        [0, 5],
        [0, 7],
    ];
    timeRange = 5;
    console.log(1 === videoStitching(clips, timeRange));
    clips = [
        [0, 5],
        [0, 5],
    ];
    timeRange = 5;
    console.log(1 === videoStitching(clips, timeRange));
    clips = [
        [5, 7],
        [1, 8],
        [0, 0],
        [2, 3],
        [4, 5],
        [0, 6],
        [5, 10],
        [7, 10],
    ];
    timeRange = 5;
    console.log(1 === videoStitching(clips, timeRange));
}
