// https://testing.googleblog.com/2019/12/testing-on-toilet-tests-too-dry-make.html

// https://docs.google.com/document/d/1mqIk9nrlySviWOP3yZfRpj6HQivXHYzeiI0bi4QdmBk/edit

var data = {};

function assertTrue(statement) {
  console.log(statement === true);
}

console.log("DRY:");
setup();
testAllWordsStartWithA_DRY();

console.log("DAMP:");
testAllWordsStartWithA_DAMP();

function setup() {
  data.words = ["add", "ada", "abc"];
}

function testAllWordsStartWithA_DRY() {
  // concise but makes reader think hard
  // but tests don't have tests, so tests should be easy to inspect for correctness

  for (let word of data.words) {
    assertTrue(word[0] === "a");
  }
}

function testAllWordsStartWithA_DAMP() {
  // less concise but easier to inspect for correctness
  // for tests, we should emphasize readability over uniqueness

  const word1 = "add";
  const word2 = "ada";
  const word3 = "abc";

  assertTrue(word1[0] === "a");
  assertTrue(word2[0] === "a");
  assertTrue(word3[0] === "a");
}
