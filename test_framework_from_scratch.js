// https://codeburst.io/a-simple-javascript-test-framework-from-scratch-89d6e7d22e74

const describe = (description, functionName) => {
    console.log(description);
    functionName();
};

const it = (message, functionName) => describe('  ' + message, functionName);

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
});

const expect = (actualValue) => matchers(actualValue);

function add(a, b) {
    return a + b;
}

describe('add', () => {
    it('adds two numbers', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    })
});

module.exports = {
    describe,
    it,
    matchers,
    expect
};

// tests on the test framework itself:

// const {
//     describe,
//     it,
//     expect,
//     matchers 
// } = require('./index');

let executes = 0;
const noop = () => { executes += 1 };

describe('describe', () => {
  it('executes a callback function', () => {
    const actual = describe('', noop);
    expect(executes).toBe(1);
  });
});

describe('expect', () => {
    it('returns an object', () => {
        const actual = expect(true);
        expect(typeof actual).toBe('object');
        expect(typeof actual.toBe).toBe('function');
    });
});

describe('matchers', () => {
    describe('toBe', () => {
        it('works with 1 = 1', () => {
            const actual = matchers('1').toBe('1');
            expect(actual).toBe(true);
        });
        it('works with 1 != 2', () => {
            const actual = matchers('1').toBe('2');
            expect(actual).toBe(false);
        });
    });
});
