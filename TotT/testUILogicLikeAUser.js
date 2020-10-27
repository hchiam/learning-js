// https://testing.googleblog.com/2020/10/testing-on-toilet-testing-ui-logic.html

// https://docs.google.com/document/d/1j4Z_Pvr5CxqRb3kRG3hxepIoZkXN81fjDVHGZEqkhxk/edit

/**
 * GIVEN A DISABLED BUTTON:
 * <button disabled=”true” click=”$handleBuyClick(data)”>Buy</button>
 */

// BAD: (ignores disabled and clicks != user experience)

it("submits purchase request (BAD TEST EXAMPLE)", () => {
  controller = new PurchasePage();
  // Call the method that handles the "Buy" button click
  controller.handleBuyClick(data);
  expect(service).toHaveBeenCalledWith(expectedData);
});

// GOOD: (simulate user without running backend)

it("submits purchase request (GOOD TEST EXAMPLE)", () => {
  // Renders the page with the "Buy" button and its associated code.
  render(PurchasePage);
  // Tries to click the button, fails the test, and catches the bug!
  buttonWithText("Buy").dispatchEvent(new Event("click"));
  expect(service).toHaveBeenCalledWith(expectedData);
});

/**
 * MY TAKEAWAYS:
 *
 * - Test UI components != end-to-end tests.
 * = test just the COMPONENT, public API, WITHOUT BACKEND (treated as implementation detail), run as FAST AS UNIT TESTS!
 * = test STORYBOOK.js page with CYPRESS.io? test REAL USAGE but also FAST and with SEPARATION OF CONCERNS!
 *
 */
