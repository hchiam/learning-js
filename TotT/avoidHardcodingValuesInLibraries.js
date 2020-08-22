// https://testing.googleblog.com/2020/08/testing-on-toilet-avoid-hardcoding.html

// https://docs.google.com/document/d/1YPg8KK1w-fsKCYupdVkE9MvDezlaSYSfASGKW46GKrw/edit

function badExample(image) {
  const sizes = [128, 480, 576]; // hard-coding means you're stuck with these values
  return sizes.map((s) => new DemoImageObject(image, s));
}

function goodExample(image, sizes = publicApi.defaultSizes) {
  // optional fallback values so user don't have to type anything,
  // but advanced users can set their own customizations
  return sizes.map((s) => new DemoImageObject(image, s));
}

var publicApi = {
  defaultSizes: [128, 480, 576], // publicly available so users don't have to type it
  otherStuff: {},
};

function DemoImageObject(image, size) {
  this.image = image;
  this.size = size;
}

console.log(
  "advanced users can set customizations:\n",
  JSON.stringify(goodExample("a", [128, 700, 1200, 5240]))
);

console.log(
  "but defaults require no extra typing:\n",
  JSON.stringify(goodExample("a"))
);
