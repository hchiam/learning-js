// https://leetcode.com/problems/rectangle-area/discuss/1615902/JavaScript-Solution-Simple-Fast-and-Explained-Without-a-bunch-of-ifelsecases

function computeAreaCoveredBy2Squares(
  left1,
  bottom1,
  right1,
  top1,

  left2,
  bottom2,
  right2,
  top2
) {
  const area1 = getArea(right1 - left1, top1 - bottom1);
  const area2 = getArea(right2 - left2, top2 - bottom2);
  let combinedArea = area1 + area2; // minus overlap

  /**
   * 5 cases for horizontal overlap:    And 1 case for NO overlap:
   *
   *   L__R    __________    L___R        ____R   L_____
   *   L__R      L___R     _________
   *                                      (Note: R L instead of L R!)
   *   _______R        L_______
   *     L_______   _______R
   */

  // x-dimension line overlap = "left-most right" - "right-most left":
  let overlapHorizontal = Math.min(right1, right2) - Math.max(left1, left2);

  // y-dimension line overlap = "bottom-most top" - "top-most bottom":
  let overlapVertical = Math.min(top1, top2) - Math.max(bottom1, bottom2);

  // Account for the fact that if there's no overlap, then overlap <= 0:
  overlapHorizontal = overlapHorizontal < 0 ? 0 : overlapHorizontal;
  overlapVertical = overlapVertical < 0 ? 0 : overlapVertical;

  const overlapArea = getArea(overlapHorizontal, overlapVertical);
  // (Note: a 2D area is 0 if either dimension is 0)

  combinedArea -= overlapArea;
  return combinedArea;
}

function getArea(width, height) {
  return width * height;
}
