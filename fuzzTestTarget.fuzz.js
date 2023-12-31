// import { FuzzedDataProvider } from 'packages/core/dist/core';
const target = require("./fuzzTestTarget.js");
describe("My describe", () => {
  it.fuzz("My fuzz test", (data) => {
    // const fuzzedDataRestrictedToNumbers = new FuzzedDataProvider(data).generateNumber();
    target.fuzzMe(data);
  });
});
