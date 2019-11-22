/* eslint-disable require-jsdoc */

const {topKFrequent} = require('./topKFrequent.js');

describe('index', () => {
  it('works', () => {
    let k = 2;
    let a = topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], k);
    expect(a).toEqual(expect.arrayContaining(['i', 'love']));
    expect(a.length).toBe(k);
    k = 4;
    a = topKFrequent([
      'the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is',
    ], k);
    expect(a).toEqual(expect.arrayContaining(['the', 'is', 'sunny', 'day']));
    expect(a.length).toBe(k);
    k = 2;
    a = topKFrequent(['love', 'love', 'i', 'leetcode', 'i', 'coding'], k);
    expect(a).toEqual(expect.arrayContaining(['i', 'love']));
    expect(a.length).toBe(k);
    k = 1;
    a = topKFrequent([
      'plpaboutit', 'jnoqzdute', 'sfvkdqf', 'mjc', 'nkpllqzjzp',
      'foqqenbey', 'ssnanizsav', 'nkpllqzjzp', 'sfvkdqf', 'isnjmy',
      'pnqsz', 'hhqpvvt', 'fvvdtpnzx', 'jkqonvenhx', 'cyxwlef',
      'hhqpvvt', 'fvvdtpnzx', 'plpaboutit', 'sfvkdqf', 'mjc',
      'fvvdtpnzx', 'bwumsj', 'foqqenbey', 'isnjmy', 'nkpllqzjzp',
      'hhqpvvt', 'foqqenbey', 'fvvdtpnzx', 'bwumsj', 'hhqpvvt',
      'fvvdtpnzx', 'jkqonvenhx', 'jnoqzdute', 'foqqenbey', 'jnoqzdute',
      'foqqenbey', 'hhqpvvt', 'ssnanizsav', 'mjc', 'foqqenbey',
      'bwumsj', 'ssnanizsav', 'fvvdtpnzx', 'nkpllqzjzp', 'jkqonvenhx',
      'hhqpvvt', 'mjc', 'isnjmy', 'bwumsj', 'pnqsz', 'hhqpvvt',
      'nkpllqzjzp', 'jnoqzdute', 'pnqsz', 'nkpllqzjzp', 'jnoqzdute',
      'foqqenbey', 'nkpllqzjzp', 'hhqpvvt', 'fvvdtpnzx', 'plpaboutit',
      'jnoqzdute', 'sfvkdqf', 'fvvdtpnzx', 'jkqonvenhx', 'jnoqzdute',
      'nkpllqzjzp', 'jnoqzdute', 'fvvdtpnzx', 'jkqonvenhx', 'hhqpvvt',
      'isnjmy', 'jkqonvenhx', 'ssnanizsav', 'jnoqzdute', 'jkqonvenhx',
      'fvvdtpnzx', 'hhqpvvt', 'bwumsj', 'nkpllqzjzp', 'bwumsj',
      'jkqonvenhx', 'jnoqzdute', 'pnqsz', 'foqqenbey', 'sfvkdqf',
      'sfvkdqf',
    ],
    k);
    // not ["jnoqzdute"]
    expect(a).toEqual(expect.arrayContaining(['fvvdtpnzx']));
    expect(a.length).toBe(k);
  });
});
