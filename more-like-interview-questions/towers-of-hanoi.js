// the key is to imagine the base case and build from there: what if there were only 1 disk? only 2 disks? -> build recursion from there.
// src -> dest: (the first 3 parameters are printed in steps)
function printHanoiTowersSolution(n, src, dest, other) {
  if (n == 0) return;
  // a disk on top needs to go to the other spot first:
  printHanoiTowersSolution(n - 1, src, other, dest);
  // move the disk to where you want:
  console.log(`${n} ${src} -> ${dest}`);
  // a disk on top needs to finally also go to the destination:
  printHanoiTowersSolution(n - 1, other, dest, src);
}
const src = "a",
  dest = "c",
  other = "b";
printHanoiTowersSolution(3, src, dest, other);
/**
 * 1 a -> c
 * 2 a -> b
 * 1 c -> b
 * 3 a -> c
 * 1 b -> a
 * 2 b -> c
 * 1 a -> c
 */
