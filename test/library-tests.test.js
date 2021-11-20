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

    it("CEIL1: round integer with integer precision", () => {
        expect(ceil(6, 1)).to.equal(6);
    });

    it("CEIL2: round integer with float precision", () => {
        expect(ceil(6, 1.5)).to.deep.equal(NaN);
    });

});

describe("keys.js - Creates an array of the property names of an object", () => {

    it("KEYS1: keys of empty object", () => {
        expect(keys({})).to.deep.equal([]);
    });

    it("KEYS2: keys of non-empty object", () => {
        const object = {
            key1: "Hello",
            key2: "World"
        };
        const expectedKeys = ["key1", "key2"];

        expect(keys(object)).to.deep.equal(expectedKeys);
    });

    it("KEYS3: keys of non object value", () => {
        expect(keys(3.15)).to.deep.equal([]);
    });

    it("KEYS4: keys with no argument", () => {
        expect(keys()).to.deep.equal([]);
    });

    it("KEYS5: keys of arraylike object", () => {
        const arrayLike = "Hi!";
        const expectedKeys = ["0", "1", "2"];

        expect(keys(arrayLike)).to.deep.equal(expectedKeys);
    });

});

describe("map.js - Applies a function to each element of an array and returns an array of the results", () => {

    const oneArgFunction = x => x + "!";

    it("MAP1: map a function with 1 argument to an empty array", () => {
        expect(map([], oneArgFunction)).to.deep.equal([]);
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

    it("FILTER1: filter an empty array with a predicate taking 1 argument", () => {
        expect(filter([], oneArgPredicate)).to.deep.equal([]);
    });

});

describe("clamp.js - Clamps a number within an inclusive upper and lower bound", () => {

    it("CLAMP1: number in between lower and upper (in correct order)", () => {
        expect(clamp(4, 2, 7)).to.equal(4);
    });

});

describe("upperFirst.js - Converts the first character of a string to uppercase", () => {

    it("UPPERFIRST1: converts string starting with lowercase letter to start with upper case", () => {
        expect(upperFirst("potato")).to.equal("Potato");
    });

});

