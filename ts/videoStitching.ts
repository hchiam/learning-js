// https://leetcode.com/problems/video-stitching/

// uncomment the next line and run node videoStitching.js:
// manuallyTest();

export function videoStitching(clips: number[][], T: number): number {
  // uses DP (dynamic programming) table

  if (T === 0) return 1;
  clips.sort((a, b) => a[0] - b[0]);
  if (clips[0][0] > 0) return -1;
  const rows: number = clips.length + 1;
  const cols: number = T + 1;
  const infinity: number = Number.POSITIVE_INFINITY;
  // dp of counts, where rows = clips, and cols = time ranges:
  const dp: number[][] = new Array(rows)
    .fill(null)
    .map((row) => new Array(cols).fill(infinity));
  dp.map((row, index) => (dp[index][0] = 0));
  for (let r = 0; r < clips.length; r++) {
    // per clip
    for (let col = 1; col <= T; col++) {
      // per possible range end
      const row = r + 1;

      const useExisting: number = dp[row - 1][col];

      const currentStart: number = clips[r][0];
      const currentStop: number = clips[r][1];
      const addCurrent: number = col <= currentStop ? 1 : infinity;
      let useCurrent: number = infinity;
      if (currentStart <= T) {
        useCurrent = dp[row - 1][currentStart] + addCurrent;
      }

      // set min count in dp table:
      // console.log(useExisting, useCurrent);
      dp[row][col] = Math.min(useExisting, useCurrent);
    }
  }
  const answer: number = dp[rows - 1][cols - 1];
  if (answer === infinity) return -1;
  // console.log(answer);
  // console.log(clips);
  // console.log(dp);
  return answer;
}

export function videoStitching_v2(clips: number[][], T: number): number {
  /**
   * This alternative is based on:
   *
   * https://leetcode.com/problems/video-stitching/discuss/866265/Confused%3A-Why-DP-at-all-if-you-already-sort-them-first
   *
   * Why not just linearly iterate through clips in 1 pass after sorting?
   */

  if (T === 0) return 1;
  clips.sort((a, b) => a[0] - b[0]);
  if (clips[0][0] > 0) return -1; // the first clip(s) can't even cover 0

  let currentMax: number = 0;
  let previousMax: number = 0;
  let count: number = 0;

  // NOTE: this loop counts PREVIOUS clips for usage, and counts the LAST clip that completes the coverage:
  for (let c = 0; c < clips.length; c++) {
    const clip: number[] = clips[c];
    const start: number = clip[0];
    const end: number = clip[1];
    if (end <= currentMax) {
      continue; // skip ranges already covered (not helpful to time range coverage)
    } else if (start > currentMax) {
      return -1; // fail early because found gap in coverage
    }
    // (a clip that passes the above 2 checks can contribute to the currentMax)

    if (start > previousMax) {
      // the current clip safely contributes to the current max, but starts after the previous max,
      // (example: [ [0,4], [0,9], [5,10] ])
      // so the PREVIOUS clip needs to be used: (in the example: use [0,9], with previousMax was 4 and currentMax was 9)
      count++;
      // (it's also safe to update the previous max now) (in the example: previousMax will be 9, currentMax will be 10)
      previousMax = currentMax;
    }

    if (end >= T) {
      // the last clip already completes the coverage
      // so include the last/CURRENT clip in the count:
      count++;
      return count;
    }

    // update max if it contributes to the max (and T isn't reached yet)
    currentMax = end; // (no need to do Math.max since the first check guarantees it)
  }

  return -1; // still didn't reach T
}

function manuallyTest(): void {
  let clips = [
    [0, 2],
    [4, 6],
    [8, 10],
    [1, 9],
    [1, 5],
    [5, 9],
  ];
  let timeRange = 10;
  console.log(3 === videoStitching(clips, timeRange));
  console.log(3 === videoStitching_v2(clips, timeRange));

  clips = [
    [0, 1],
    [1, 2],
  ];
  timeRange = 5;
  console.log(-1 === videoStitching(clips, timeRange));
  console.log(-1 === videoStitching_v2(clips, timeRange));

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
  console.log(3 === videoStitching_v2(clips, timeRange));

  clips = [
    [0, 4],
    [2, 8],
  ];
  timeRange = 5;
  console.log(2 === videoStitching(clips, timeRange));
  console.log(2 === videoStitching_v2(clips, timeRange));

  clips = [[0, 0]];
  timeRange = 5;
  console.log(-1 === videoStitching(clips, timeRange));
  console.log(-1 === videoStitching_v2(clips, timeRange));

  clips = [[0, 4]];
  timeRange = 5;
  console.log(-1 === videoStitching(clips, timeRange));
  console.log(-1 === videoStitching_v2(clips, timeRange));

  clips = [[1, 5]];
  timeRange = 5;
  console.log(-1 === videoStitching(clips, timeRange));
  console.log(-1 === videoStitching_v2(clips, timeRange));

  clips = [[0, 5]];
  timeRange = 5;
  console.log(1 === videoStitching(clips, timeRange));
  console.log(1 === videoStitching_v2(clips, timeRange));

  clips = [
    [0, 5],
    [0, 7],
  ];
  timeRange = 5;
  console.log(1 === videoStitching(clips, timeRange));
  console.log(1 === videoStitching_v2(clips, timeRange));

  clips = [
    [0, 5],
    [0, 5],
  ];
  timeRange = 5;
  console.log(1 === videoStitching(clips, timeRange));
  console.log(1 === videoStitching_v2(clips, timeRange));

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
  console.log(1 === videoStitching_v2(clips, timeRange));

  clips = [[0, 0]];
  timeRange = 0;
  console.log(1 === videoStitching(clips, timeRange));
  console.log(1 === videoStitching_v2(clips, timeRange));

  clips = [[0, 1]];
  timeRange = 0;
  console.log(1 === videoStitching(clips, timeRange));
  console.log(1 === videoStitching_v2(clips, timeRange));

  clips = [
    [0, 1],
    [6, 8],
    [0, 2],
    [5, 6],
    [0, 4],
    [0, 3],
    [6, 7],
    [4, 7],
    [3, 4],
    [4, 5],
    [5, 7],
    [6, 9],
  ];
  timeRange = 9;
  console.log(3 === videoStitching(clips, timeRange));
  console.log(3 === videoStitching_v2(clips, timeRange));

  clips = [
    [0, 4],
    [2, 6],
    [4, 7],
    [6, 9],
  ];
  timeRange = 9;
  console.log(3 === videoStitching(clips, timeRange));
  console.log(3 === videoStitching_v2(clips, timeRange));

  clips = [
    [0, 4],
    [2, 5],
    [5, 6],
    [4, 7],
    [6, 9],
  ];
  timeRange = 9;
  console.log(3 === videoStitching(clips, timeRange));
  console.log(3 === videoStitching_v2(clips, timeRange));
}
