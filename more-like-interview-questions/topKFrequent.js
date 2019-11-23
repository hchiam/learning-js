/* eslint-disable require-jsdoc */

function topKFrequent(words, k) {
  // // O(n log k) with max heap (but seems slower on leetcode):

  // const answer = [];
  // const ht = {};
  // const heap = new MaxHeap();

  // for (const word of words) {
  //   if (word in ht) {
  //     ht[word]++;
  //   } else {
  //     ht[word] = 1;
  //   }
  // }

  // for (const key of Object.keys(ht)) {
  //   if (!ht.hasOwnProperty(key)) continue;
  //   const num = ht[key];
  //   const val = key;
  //   heap.insert({num, val});
  // }

  // for (let i = 0; i < k; i++) {
  //   answer.push(heap.remove());
  // }

  // return answer.sort((a, b) => {
  //   if (a.num !== b.num) {
  //     return b.num - a.num;
  //   }
  //   return a.val.localeCompare(b.val);
  // }).map((x) => x.val);

  // O(n log n):

  const sortedWords = words.sort();
  const ht = new Map(); // can be used instead of {}
  for (const word of sortedWords) {
    if (ht.get(word)) {
      ht.set(word, ht.get(word) + 1);
    } else {
      ht.set(word, 1);
    }
  }
  const keys = ht.keys();
  const arrayOfObjects = [];
  for (const key of keys) {
    arrayOfObjects.push({word: key, count: ht.get(key)});
  }
  const topK = arrayOfObjects.sort((a, b) => {
    if (a.count === b.count) {
      return a.word.localeCompare(b.word);
    }
    return b.count - a.count;
  }).slice(0, k);
  const output = topK.map((x) => x.word);
  return output;
}

// function MaxHeap() {
//   const heap = [null];

//   this.print = function() {
//     return heap;
//   };

//   this.getLength = function() {
//     return heap.length;
//   };

//   this.insert = function({num, val}) {
//     heap.push({num, val});
//     // bubble up:
//     if (heap.length > 2) {
//       let idx = heap.length - 1;
//       while (heap[idx].num > heap[Math.floor(idx/2)].num ||
//       (heap[idx].num === heap[Math.floor(idx/2)].num &&
//       heap[idx].val < heap[Math.floor(idx/2)].val)) {
//         if (idx >= 1) {
//           [heap[Math.floor(idx/2)], heap[idx]] =
//             [heap[idx], heap[Math.floor(idx/2)]];
//           if (Math.floor(idx/2) > 1) {
//             idx = Math.floor(idx/2);
//           } else {
//             break;
//           }
//         }
//       }
//     }
//   };

//   this.remove = function() {
//     const smallest = heap[1];
//     if (heap.length < 2) { // last one
//       return null;
//     } else if (heap.length == 2) { // keep one more
//       heap.splice(1, 1);
//       return smallest;
//     } else if (heap.length > 2) {
//       // move last to top:
//       heap[1] = heap[heap.length - 1];
//       heap.splice(heap.length - 1);
//       // trivial case:
//       if (heap.length == 3) {
//         if (heap[1].num < heap[2].num ||
//         (heap[1].num === heap[2].num && heap[1].val > heap[2].val)) {
//           [heap[1], heap[2]] = [heap[2], heap[1]];
//         }
//         return smallest;
//       }
//       // bubble down:
//       let i = 1;
//       let left = 2 * i;
//       let right = 2 * i + 1;
//       while ((heap[i] && heap[left] && heap[i].num < heap[left].num ||
//       (heap[i] && heap[left] && heap[i].num === heap[left].num &&
//       heap[i].val > heap[left].val)) ||
//       (heap[i] && heap[right] && heap[i].num < heap[right].num) ||
//       (heap[i] && heap[right] && heap[i].num === heap[right].num &&
//       heap[i].val > heap[right].val)) {
//         if (heap[left].num > heap[right].num ||
//         (heap[left].num === heap[right].num &&
//         heap[left].val < heap[right].val)) {
//           [heap[i], heap[left]] = [heap[left], heap[i]];
//           i = 2 * i;
//         } else {
//           [heap[i], heap[right]] = [heap[right], heap[i]];
//           i = 2 * i + 1;
//         }
//         left = 2 * i;
//         right = 2 * i + 1;
//         if (heap[left] == undefined || heap[right] == undefined) {
//           break;
//         }
//       }
//       return smallest;
//     }
//   };
// };

module.exports = {
  topKFrequent,
};
