/* eslint-disable require-jsdoc */

const { videoStitching } = require("./videoStitching.js");

describe("the solution", () => {
  it("works", () => {
    const clips = [
      [0, 2],
      [4, 6],
      [8, 10],
      [1, 9],
      [1, 5],
      [5, 9],
    ];
    const timeRange = 10;
    expect(videoStitching(clips, timeRange)).toEqual(3);
  });

  it("works", () => {
    const clips = [
      [0, 1],
      [1, 2],
    ];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(-1);
  });

  it("works", () => {
    const clips = [
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
    const timeRange = 9;
    expect(videoStitching(clips, timeRange)).toEqual(3);
  });

  it("works", () => {
    const clips = [
      [0, 4],
      [2, 8],
    ];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(2);
  });

  it("works", () => {
    const clips = [[0, 0]];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(-1);
  });

  it("works", () => {
    const clips = [[0, 4]];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(-1);
  });

  it("works", () => {
    const clips = [[1, 5]];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(-1);
  });

  it("works", () => {
    const clips = [[0, 5]];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(1);
  });

  it("works", () => {
    const clips = [
      [0, 5],
      [0, 7],
    ];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(1);
  });

  it("works", () => {
    const clips = [
      [0, 5],
      [0, 5],
    ];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(1);
  });

  it("works", () => {
    const clips = [
      [5, 7],
      [1, 8],
      [0, 0],
      [2, 3],
      [4, 5],
      [0, 6],
      [5, 10],
      [7, 10],
    ];
    const timeRange = 5;
    expect(videoStitching(clips, timeRange)).toEqual(1);
  });
});
