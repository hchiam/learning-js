// https://codeburst.io/a-simple-javascript-test-framework-from-scratch-89d6e7d22e74

const describe = (description, functionName) => {
    console.log(description);
    functionName();
}

const it = (message, functionName) => describe('  ' + message, functionName)

const matchers = (actualValue) => ({
    toBe: (expectedValue) => {
        if (actualValue === expectedValue) {
            console.log('pass');
            return true;
        } else {
            console.log('fail');
            return false;
        }
    }
    // TODO: more matchers besides toBe()
})

const expect = (actualValue) => matchers(actualValue);

function add(a, b) {
return a + b;
}

describe('add', () => {
    it('adds two numbers', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    })
})

module.exports = {
    describe,
    it,
    matchers,
    expect
}