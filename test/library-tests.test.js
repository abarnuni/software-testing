// Import testing assertion libraries
import chai from 'chai';
const expect = chai.expect;

// Import test object functions
import add from "../test-object/src/add.js";
import ceil from "../test-object/src/ceil.js";
import keys from "../test-object/src/keys.js";
import defaultToAny from "../test-object/src/defaultToAny.js";
import map from "../test-object/src/map.js";
import filter from "../test-object/src/filter.js";
import upperFirst from "../test-object/src/upperFirst.js";
import toNumber from "../test-object/src/toNumber.js";
import slice from "../test-object/src/slice.js";
import clamp from "../test-object/src/clamp.js";

// Tests to be implemented by Andrew: keys, map, clamp, filter, upperFirst
// Tests to be implemented by Gaurab: defaultToAny, ceil, toNumber, add, slice

describe("defaultToAny.js - Provides a default value from a list of potential values, when passed undefined", () => {

    it("DEFAULTTOANY1: undefined value and undefined default values", () => {
        expect(defaultToAny(undefined, NaN, NaN, null)).to.equal(null);
    });

});

describe("ceil.js - Rounds a number up with given precision", () => {

    it("CEIL1: round integer with integer precision gives integer", () => {
        expect(ceil(6, 1)).to.equal(6);
    });

    it("CEIL2: round integer with float precision gives NaN", () => {
        expect(ceil(6, 1.5)).to.deep.equal(NaN);
    });

});

describe("keys.js - Creates an array of the property names of an object", () => {

    it("KEYS1: keys of empty object gives empty array", () => {
        expect(keys({})).to.deep.equal([]);
    });

    it("KEYS2: keys of non-empty object gives correct array of keys", () => {
        const object = {
            key1: "Hello",
            key2: "World"
        };
        const expectedKeys = ["key1", "key2"];
        expect(keys(object)).to.deep.equal(expectedKeys);
    });

    it("KEYS3: keys of non object value gives empty array", () => {
        expect(keys(3.15)).to.deep.equal([]);
    });

    it("KEYS4: keys with no argument gives empty array", () => {
        expect(keys()).to.deep.equal([]);
    });

    it("KEYS5: keys of arraylike object gives array indices", () => {
        const arrayLike = "Hi!";
        const expectedKeys = ["0", "1", "2"];
        expect(keys(arrayLike)).to.deep.equal(expectedKeys);
    });

});

describe("map.js - Applies a function to each element of an array and returns an array of the results", () => {
    const oneArgFunction = x => x + "!";
    const invalidFunction = "potato";

    const nonEmptyArray = [1, "yellow", false];
    const mappedNonEmptyArray = ["1!", "yellow!", "false!"];
    const invalidArray = 5;

    it("MAP1: map an empty array with a function with 1 argument gives empty array", () => {
        expect(map([], oneArgFunction)).to.deep.equal([]);
    });

    it("MAP2: map an empty array with an invalid function throws error", () => {
        expect(function(){ map([], invalidFunction) }).to.throw(TypeError);
    });

    it("MAP3: map an empty array without a function argument throws error", () => {
        expect(function(){ map([]) }).to.throw(TypeError);
    });

    it("MAP4: map a non-empty array with an invalid function throws error", () => {
        expect(function(){ map(nonEmptyArray, invalidFunction) }).to.throw(TypeError);
    });

    it("MAP5: map a non-empty array without a function argument throws error", () => {
        expect(function(){ map(nonEmptyArray) }).to.throw(TypeError);
    });

    it("MAP6: map a non-empty array with a function with 1 argument is mapped correctly", () => {
        expect(map(nonEmptyArray, oneArgFunction)).to.deep.equal(mappedNonEmptyArray);
    });

    // MAP7: Test case removed

    it("MAP8: map an invalid array with a function with 1 argument throws error", () => {
        expect(function(){ map(invalidArray, oneArgFunction) }).to.throw(TypeError);
    });

    // MAP9: Test case removed

    it("MAP10: map with no arguments throws error", () => {
        expect(function(){ map() }).to.throw(TypeError);
    });

    describe("Composition testing of map with other functions in the test suite", () => {
        
        it("MAP11: map a non-empty array with defaultToAny() gives correct mapping", () => {
            const inputArray = ["ok", "", 3, false, undefined, {}, null];
            const outputArray = ["ok", "", 3, false, "default", {}, "default"];
            expect(map(inputArray, (x) => defaultToAny(x, "default"))).to.deep.equal(outputArray);
        });

        it("MAP12: map a non-empty array with ceil() gives correct mapping", () => {
            const inputArray = [1, 4.5, 6.54, 12.02341];
            const outputArray = [1.00, 4.50, 6.54, 12.03];
            expect(map(inputArray, (x) => ceil(x, 2))).to.deep.equal(outputArray);
        });

        it("MAP13: map a non-empty array with toNumber() gives correct mapping", () => {
            const inputArray = [1, '4.5', "-6.54", 12.02341];
            const outputArray = [1, 4.5, -6.54, 12.02341];
            expect(map(inputArray, toNumber)).to.deep.equal(outputArray);
        });

        it("MAP14: map a non-empty array with add() gives correct mapping", () => {
            const inputArray = [1, 4.5, -6.54, 12.02341];
            const outputArray = [3, 6.5, -4.54, 14.02341];
            expect(map(inputArray, (x) => add(x, 2))).to.deep.equal(outputArray);
        });

        it("MAP15: map a non-empty array with clamp() gives correct mapping", () => {
            const inputArray = [1, 4.5, -6.54, 12.02341];
            const outputArray = [2, 4.5, -6.54, 7];
            expect(map(inputArray, (x) => clamp(x, 2, 7))).to.deep.equal(outputArray);
        });

        it("MAP16: map a non-empty array with upperFirst() gives correct mapping", () => {
            const inputArray = ["one", "TWO", "Three", "fOuR!"];
            const outputArray = ["One", "TWO", "Three", "FOuR!"];
            expect(map(inputArray, upperFirst)).to.deep.equal(outputArray);
        });

        it("MAP17: map a non-empty array with keys() gives correct mapping", () => {
            const inputArray = [{ key1: "one" }, { key2: "TWO", key3: "Three" }, {}];
            const outputArray = [["key1"], ["key2", "key3"], []];
            expect(map(inputArray, keys)).to.deep.equal(outputArray);
        });

        it("MAP18: map output of keys() with a function with 1 argument gives correct mapping", () => {
            const inputObject = { key2: "TWO", key3: "Three" };
            const outputArray = ["key2!", "key3!"];
            expect(map(keys(inputObject), oneArgFunction)).to.deep.equal(outputArray);
        });

        it("MAP19: map output of slice() with a function with 1 argument gives correct mapping", () => {
            const inputArray = ["one", "TWO", "Three", "fOuR!"];
            const outputArray = ["TWO!", "Three!"];
            expect(map(slice(inputArray, 1, 3), oneArgFunction)).to.deep.equal(outputArray);
        });

        it("MAP20: map output of filter() with a function with 1 argument gives correct mapping", () => {
            const inputArray = ["one", "TWO", "Three", "fOuR!"];
            const predicate = x => x.length > 3;
            const outputArray = ["Three!", "fOuR!!"];
            expect(map(filter(inputArray, predicate), oneArgFunction)).to.deep.equal(outputArray);
        });

        it("MAP21: map output of previous map() call with a function with 1 argument gives correct mapping", () => {
            const inputArray = ["one", "TWO", "Three", "fOuR!"];
            const outputArray = ["one!!", "TWO!!", "Three!!", "fOuR!!!"];
            expect(map(map(inputArray, oneArgFunction), oneArgFunction)).to.deep.equal(outputArray);
        });

    });

});

describe("toNumber.js - Converts the given value to a number", () => {

    it("TONUMBER1: converts a string representing a number", () => {
        expect(toNumber("32.5")).to.equal(32.5);
    });

});

describe("add.js - Adding 2 numbers", () => {

    it("ADD1: adds 2 positive integers", () => {
        expect(add(1, 2)).to.equal(3);
    });

    it("ADD5: add positive integer to illegal value", () => {
        expect(function(){add(1, "LOL")}).to.throw(TypeError);
    });

});

describe("slice.js - Converts the given value to a number", () => {

    it("SLICE1: empty array with positive integer start and end", () => {
        expect(slice([], 1, 2)).to.deep.equal([]);
    });

});

describe("filter.js - Applies a predicate (test) to each element of an array and returns an array containing the elements for which the predicate was true", () => {

    const oneArgPredicate = (x) => typeof x === 'number';
    const invalidPredicate = "potato";
    const nonEmptyArray = [1, "yellow", false];
    const invalidArray = 42;

    it("FILTER1: filter an empty array with a predicate taking 1 argument gives empty array", () => {
        expect(filter([], oneArgPredicate)).to.deep.equal([]);
    });

    it("FILTER2: filter an empty array with an invalid predicate throws error", () => {
        expect(function(){ filter([], invalidPredicate) }).to.throw(TypeError);
    });

    it("FILTER3: filter an empty array without predicate throws error", () => {
        expect(function(){ filter([]) }).to.throw(TypeError);
    });

    it("FILTER4: filter a non-empty array with an invalid predicate throws error", () => {
        expect(function(){ filter(nonEmptyArray, invalidPredicate) }).to.throw(TypeError);
    });

    it("FILTER5: filter a non-empty array without predicate throws error", () => {
        expect(function(){ filter(nonEmptyArray) }).to.throw(TypeError);
    });

    it("FILTER6: filter a non-empty array with a predicate taking 1 argument gives filtered array", () => {
        expect(filter(nonEmptyArray, oneArgPredicate)).to.deep.equal([1]);
    });

    // FILTER7: Test case removed

    it("FILTER8: filter an invalid array with a predicate taking 1 argument throws error", () => {        
        expect(function(){ filter(invalidArray, oneArgPredicate) }).to.throw(TypeError);
    });

    it("FILTER9: filter with no arguments throws error", () => {        
        expect(function(){ filter() }).to.throw(TypeError);
    });

    describe("Composition testing of map with other functions in the test suite", () => {

        it("FILTER10: filter a non-empty array with a predicate involving defaultToAny() gives filtered array", () => {
            const inputArray = [1, "yellow", false, null];
            const outputArray = [1, "yellow", null];
            expect(filter(inputArray, x => defaultToAny(x, "hi"))).to.deep.equal(outputArray);
        });

        it("FILTER11: filter a non-empty array with a predicate involving ceil() gives filtered array", () => {
            const inputArray = [1, 2.6, 2.71, 2.75, 3];
            const outputArray = [2.71, 2.75, 3];
            expect(filter(inputArray, x => ceil(x, 1) > 2.75)).to.deep.equal(outputArray);
        });

        it("FILTER12: filter a non-empty array with a predicate involving toNumber() gives filtered array", () => {
            const inputArray = [1, '4.5', "-6.54", 12.02341];
            const outputArray = ['4.5', 12.02341];
            expect(filter(inputArray, x => toNumber(x) > 2.75)).to.deep.equal(outputArray);
        });

        it("FILTER13: filter a non-empty array with a predicate involving add() gives filtered array", () => {
            const inputArray = [1, 4.5, -6.54, 12.02341];
            const outputArray = [4.5, 12.02341];
            expect(filter(inputArray, x => add(x, 1) > 2.75)).to.deep.equal(outputArray);
        });

        it("FILTER14: filter a non-empty array with a predicate involving clamp() gives filtered array", () => {
            const inputArray = [1, 4.5, -6.54, 12.02341];
            const outputArray = [1, 4.5];
            expect(filter(inputArray, x => clamp(x, 0, 5) === x)).to.deep.equal(outputArray);
        });

        it("FILTER15: filter a non-empty array with a predicate involving upperFirst() gives filtered array", () => {
            const inputArray = ["one", "TWO", "Three", "fOuR!"];
            const outputArray = ["TWO", "Three"];
            expect(filter(inputArray, x => upperFirst(x) === x)).to.deep.equal(outputArray);
        });

        it("FILTER16: filter a non-empty array with a predicate involving keys() gives filtered array", () => {
            const inputArray = [{ key1: "one" }, { key2: "TWO", key3: "Three" }, {}];
            const outputArray = [{ key1: "one" }, {}];
            expect(filter(inputArray, x => keys(x).length < 2)).to.deep.equal(outputArray);
        });

        it("FILTER17: filter results from keys() with a predicate taking 1 argument gives filtered array", () => {
            const inputObject = { key2: "TWO", key3000: "Three", k4: "yo" };
            const outputArray = ["key2", "k4"];
            expect(filter(keys(inputObject), x => x.length < 5)).to.deep.equal(outputArray);
        });

        it("FILTER18: filter results from slice() with a predicate taking 1 argument gives filtered array", () => {
            const inputArray = ["one", "TWO", "Three", "fOuR!"];
            const outputArray = ["one", "TWO"];
            expect(filter(slice(inputArray), x => x.length < 5)).to.deep.equal(outputArray);
        });

        it("FILTER19: filter results from map() with a predicate taking 1 argument gives filtered array", () => {
            const inputArray = ["one", "TWO!", "Th", "fOuR!"];
            const outputArray = ["one!", "Th!"];
            const oneArgFunction = x => x + "!";
            expect(filter(map(inputArray, oneArgFunction), x => x.length < 5)).to.deep.equal(outputArray);
        });

        it("FILTER20: filter results from previous call to filter() with predicates taking 1 argument gives filtered array", () => {
            const inputArray = [1, 4.5, -6.54, 12.02341];
            const outputArray = [1, 4.5];
            const predicate1 = x => x > 0;
            const predicate2 = x => x < 10;
            expect(filter(filter(inputArray, predicate1), predicate2)).to.deep.equal(outputArray);
        });

    });


});

describe("clamp.js - Clamps a number within an inclusive upper and lower bound", () => {

    it("CLAMP1: clamp with valid inputs and number < lower < upper gives lower", () => {
        expect(clamp(2, 4, 7)).to.equal(4);
    });

    it("CLAMP2: clamp with valid inputs and number < lower and lower > upper throws range error", () => {
        expect(function(){ clamp(2, 7, 4) }).to.throw(RangeError);
    });

    it("CLAMP3: clamp with valid number < lower, but invalid upper throws type error", () => {
        expect(function(){ clamp(2, 7, "potato") }).to.throw(TypeError);
    });

    it("CLAMP4: clamp with valid inputs and lower < number < upper gives number", () => {
        expect(clamp(4, 2, 7)).to.equal(4);
    });

    it("CLAMP5: clamp with valid inputs and lower < upper < number gives upper", () => {
        expect(clamp(9, 2, 7)).to.equal(7);
    });

    it("CLAMP6: clamp with valid inputs and lower < number and lower > upper throws range error", () => {
        expect(function(){ clamp(7, 4, 2) }).to.throw(RangeError);
    });

    it("CLAMP7: clamp with valid number > lower, but invalid upper throws type error", () => {
        expect(function(){ clamp(7, 2, "potato") }).to.throw(TypeError);
    });

    it("CLAMP8: clamp with valid number < upper, but invalid lower throws type error", () => {
        expect(function(){ clamp(2, "potato", 7) }).to.throw(TypeError);
    });

    it("CLAMP9: clamp with valid number > upper, but invalid lower throws type error", () => {
        expect(function(){ clamp(7, "potato", 2) }).to.throw(TypeError);
    });

    it("CLAMP10: clamp with valid lower < upper, but invalid number throws type error", () => {
        expect(function(){ clamp("potato", 2, 7) }).to.throw(TypeError);
    });

    it("CLAMP11: clamp with valid lower > upper, but invalid number throws type error", () => {
        expect(function(){ clamp("potato", 7, 2) }).to.throw(TypeError);
    });

    it("CLAMP12: clamp with valid number < lower, but missing upper throws type error", () => {
        expect(function(){ clamp(2, 7) }).to.throw(TypeError);
    });

    it("CLAMP13: clamp with valid number > lower, but missing upper throws type error", () => {
        expect(function(){ clamp(7, 2) }).to.throw(TypeError);
    });

    it("CLAMP14: clamp with valid number, but missing lower and upper throws type error", () => {
        expect(function(){ clamp(7) }).to.throw(TypeError);
    });

    it("CLAMP15: clamp with all arguments missing throws type error", () => {
        expect(function(){ clamp() }).to.throw(TypeError);
    });

});

describe("upperFirst.js - Converts the first character of a string to uppercase", () => {

    it("UPPERFIRST1: converts string starting with lowercase letter to start with upper case", () => {
        expect(upperFirst("potato")).to.equal("Potato");
    });

    it("UPPERFIRST2: string starting with uppercase letter stays the same", () => {
        expect(upperFirst("Potato")).to.equal("Potato");
    });

    it("UPPERFIRST3: string starting with non letter stays the same", () => {
        expect(upperFirst("9otato")).to.equal("9otato");
    });

    it("UPPERFIRST4: empty string stays the same", () => {
        expect(upperFirst("")).to.equal("");
    });

    it("UPPERFIRST5: non string input throws type error", () => {
        expect(function(){ upperFirst(["Potato", "with", "gravy"]) }).to.throw(TypeError);
    });

    it("UPPERFIRST5: no arguments throws type error", () => {
        expect(function(){ upperFirst() }).to.throw(TypeError);
    });

});

