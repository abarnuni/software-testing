// Import testing assertion libraries
import chai from 'chai';
const expect = chai.expect;

// Import test object functions
import add from "../test-object/src/add.js";
import ceil from "../test-object/src/ceil.js";
import keys from "../test-object/src/keys.js";
import defaultToAny from "../test-object/src/defaultToAny.js";


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

    it("KEY1: keys of empty object", () => {
        expect(keys({})).to.deep.equal([]);
    });

    it("KEY1: keys of non-empty object", () => {

        const object = {
            key1: "Hello",
            key2: "World"
        };

        const array = ["key1", "key2"];


        expect(keys(object)).to.deep.equal(array);
    });

})


describe("add.js - Adding 2 numbers", () => {

    it("ADD1: adds 2 positive integers", () => {
        expect(add(1, 2)).to.equal(3);
    });

    it("ADD5: add positive integer to illegal value", () => {
        expect(function(){add(1, "LOL")}).to.throw(TypeError);
    });

});

