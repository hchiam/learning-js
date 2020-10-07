// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_function_parameter

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

/**
 * Example with named parameter instead of doing userId(user.id)
 * @param {object} id
 * @return {number} id
 */
function userId({ id }) {
  return id;
}

/**
 * Example with named parameters and even a direct "child parameter" value
 * @param {object} parameters
 * @return {string}
 */
function whois({ displayName, fullName: { firstName: name } }) {
  // instead of whois(user.displayName, user.fullName.firstName)
  // or return `${user.displayName} is ${user.fullName.firstName}`
  return `${displayName} is ${name}`; // (fullName.firstName won't work here)
}

/**
 * Example with named parameters but with named key instead of the value
 * @param {object} parameters
 * @return {string}
 */
function whois2({ displayName, fullName: { firstName } }) {
  return `${displayName} is ${firstName}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe is John"
console.log(whois2(user)); // "jdoe is John"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Setting_a_function_parameters_default_value

/**
 * Example with optional parameters
 * = {} lets it work even with no input parameters
 * @param {object} parameters
 */
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
}); // big {x: 18, y: 30} 30

// more: https://github.com/hchiam/learning-js/blob/master/spread-operator.js

const [message, status] = user
  ? ["Push Token updated", 200]
  : ["User not found", 404];

console.log({ message }); // -> { message: 'Push Token updated' }
