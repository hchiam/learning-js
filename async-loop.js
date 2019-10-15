const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
Promise.all(items.map(async (item) => {
  // do async stuff here
  console.log(item);
}));
