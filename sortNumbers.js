n = [1, 30, 4, 21, 100000];
n.sort(); // [ 1, 100000, 21, 30, 4 ]
n.sort((a,b)=>a-b); // [ 1, 4, 21, 30, 100000 ]
