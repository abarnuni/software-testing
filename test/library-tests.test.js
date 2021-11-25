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
        expect(defaultToAny(null, undefined, undefined, undefined)).to.equal(undefined);
    });

    it("DEFAULTTOANY2: values with first defined value as an empty array", () => {
        const values = [];
        const object = {};
        const str = '';
        expect(defaultToAny(undefined, values, object, str)).to.equal(values);
    });

    it("DEFAULTTOANY3: values with first defined value as an int", () => {
        expect(defaultToAny(undefined, 1, 10, 20)).to.equal(1);
    });

    it("DEFAULTTOANY4: values with first defined value as an empty object", () => {
        const object = {};
        const values = [];    
        const str = "cat";
        expect(defaultToAny(object, values, str, null)).to.equal(object);
    });

    it("DEFAULTTOANY5: values with first defined value as an empty string", () => {
        const str = '';
        const values = [1, 2, 3];
        const object = {}
        expect(defaultToAny(str, values, NaN, object)).to.equal(str);
    });

    it("DEFAULTTOANY6: values with first defined value as false", () => {
        const values = false;
        const str = '';
        const object = {
            item : "chair",
            room : "living room"
        };
        expect(defaultToAny(values, undefined, null, object)).to.equal(values);
    });

    it("DEFAULTTOANY7: values with first defined value as array with elements", () => {
        const values = [1, 2, 3];
        const object = {};
        expect(defaultToAny(values, 1,object, undefined)).to.equal(values);
    });

    it("DEFAULTTOANY8: values with first defined value as object with elements", () => {
        const car = {
            model: "Toyota",
            color: "Silver"
        };
        const str = "yellow";
        const values = {};
        expect(defaultToAny(car, NaN, str, values)).to.equal(car);
    });

    it("DEFAULTTOANY9: values with first defined value as array lists", () => {
        const lists = ["a", "b", "c"];
        const car = {};
        const str = "yellow";
        expect(defaultToAny(lists, car, undefined, str)).to.equal(lists);
    });

    it("DEFAULTTOANY10: empty inputs", () => {     
        expect(function () {defaultToAny()}).to.throw(Error);
    });

    it("DEFAULTTOANY11: undefined values and undefined default value", () => {

        expect(defaultToAny(NaN, undefined, null)).to.equal(null);
    });

    it("DEFAULTTOANY12: values with first defined value as an empty array", () => {
        const values = [];
        const str = '';
        expect(defaultToAny(undefined, values, str)).to.equal(values);
    });

    it("DEFAULTTOANY13: values with first defined value as array with elements", () => {
        const lists = [1, "car", ''];
        expect(defaultToAny(null, lists, 15)).to.equal(lists);
    });

    it("DEFAULTTOANY14: values with first defined value as an empty string", () => {
        const str = '';
        const object = {};
        expect(defaultToAny(str, object, undefined)).to.equal(str);
    });

    it("DEFAULTTOANY15: values with first defined value as an empty object", () => {
        const object = {};
        expect(defaultToAny(object, 25, NaN)).to.equal(object);
    });

    it("DEFAULTTOANY16: values with first defined value as an empty array", () => {
        const lists = [];
        const str = '';
        expect(defaultToAny(lists, NaN, str)).to.equal(lists);
    });

    it("DEFAULTTOANY17: values with first defined value as an int", () => {
        const lists = [5, 10, 20, 0];
        const object = {};
        expect(defaultToAny(1, lists, object)).to.equal(1);
    });

    it("DEFAULTTOANY18: values with first defined value as an object", () => {
        const car = {
            model: "Toyota",
            color: "Silver"
        };
        const lists = [5, 10, 20, 0];
        expect(defaultToAny(car, undefined, lists)).to.equal(car);
    });

    it("DEFAULTTOANY19: values with first defined value as a string", () => {
        const str = false;
        const objects = {};
        const lists = [{}, {}, {}];
        expect(defaultToAny(str, objects, lists)).to.equal(str);
    });

    it("DEFAULTTOANY20: undefined values and undefined default values", () => {
        expect(defaultToAny(null, NaN)).to.deep.equal(NaN);
    });

    it("DEFAULTTOANY21: undefined value and empty value", () => {
        const object = {};
        expect(defaultToAny(undefined, object)).to.equal(object);
    });

    it("DEFAULTTOANY22: undefined value and defined array", () => {
        const lists = [5, 10, 20, 0];
        expect(defaultToAny(NaN, lists)).to.equal(lists);
    });

    it("DEFAULTTOANY23: defined empty object and defined empty array", () => {
        const object = {};
        const lists = [];
        expect(defaultToAny(object, lists)).to.equal(object);
    });

    it("DEFAULTTOANY24: defined empty str and defined empty array", () => {
        const str = "";
        const lists = ['a', 2, 'red'];
        expect(defaultToAny(str, lists)).to.equal(str);
    });

    it("DEFAULTTOANY25: defined empty array and undefined value", () => {
        const lists = [];
        expect(defaultToAny(lists, NaN)).to.equal(lists);
    });

    it("DEFAULTTOANY26: two defined values", () => {
        const car = {
            model: "Toyota",
            color: "Silver"
        };
        expect(defaultToAny(car, 10)).to.equal(car);
    });

    it("DEFAULTTOANY27: defined array and undefined value", () => {
        const lists = [5, 10, 20, 0];
        expect(defaultToAny(lists, undefined)).to.equal(lists);
    });

    it("DEFAULTTOANY28: two defined values", () => {
        const object = {};
        expect(defaultToAny(1500, object)).to.equal(1500);
    });

    it("DEFAULTTOANY29: one defined value", () => {
        expect(defaultToAny(1.5)).to.equal(1.5);
    });

    it("DEFAULTTOANY30: one empty value", () => {
        const values = {}
        expect(defaultToAny(values)).to.equal(values);
    });

    it("DEFAULTTOANY31: undefined value to default undefined value", () => {
        expect(defaultToAny(null)).to.equal(null);
    });

    it("DEFAULTTOANY32: undefined values and defined value", () => {
        expect(defaultToAny(null, NaN, undefined, 15)).to.equal(15);
    });

    it("DEFAULTTOANY33: undefined values and defined value", () => {
        expect(defaultToAny(null, undefined, 20, NaN)).to.equal(20);
    });

});

describe("ceil.js - Rounds a number up with given precision", () => {

    it("CEIL1: round integer with integer precision gives integer", () => {
        expect(ceil(6, 1)).to.equal(6);
    });

    it("CEIL2: round integer with float precision gives NaN", () => {
        expect(ceil(6, 1.5)).to.deep.equal(NaN);
    });

    it("CEIL3: round integer with illegal value", () => {

        expect(ceil(6, "id")).to.deep.equal(NaN);
    });

    it("CEIL4: round integer with empty value", () => {
        expect(ceil(5)).to.equal(5);
    });

    it("CEIL5: round float with float", () => {
        expect(ceil(5.35, 1.5)).to.deep.equal(NaN);
    });

    it("CEIL6: round float with illegal value", () => {

        expect(function () { ceil(6.75, "id") }).to.throw(TypeError);
    });

    it("CEIL7: round float with empty value", () => {
        expect(ceil(5.35)).to.equal(6);
    });

    it("CEIL8: round float with integer precision", () => {
        expect(ceil(5.353, 2)).to.equal(5.36);
    });

    it("CEIL9: rounding illegal value", () => {
        expect(ceil("id")).to.deep.equal(NaN);
    });

    it("CEIL10: rounding illegal value with integer", () => {
        expect(ceil("id", 2)).to.deep.equal(NaN);
    });

    it("CEIL11: rounding illegal value with float", () => {
        expect(ceil("id", 2.25)).to.deep.equal(NaN);
    });

    it("CEIL12: empty inputs", () => {
        expect(ceil()).to.deep.equal(NaN);
    });

    it("CEIL13: round float with integer precision", () => {
        expect(ceil(5.353, 3)).to.equal(5.353);
    });

    it("CEIL14: round float with integer precision", () => {
        expect(ceil(5.613, 1)).to.equal(5.7);
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

    it("ADD2: add positive integer to negative integer", () => {
        expect(add(7, -3)).to.equal(4);
    });

    it("ADD3: add positive integer to float", () => {
        expect(add(10, 5.5)).to.be.approximately(15.5, 0.000001);
    });

    it("ADD4: add positive integer to zero", () => {
        expect(add(10, 0)).to.equal(10);
    });

    it("ADD5: add positive integer to illegal value", () => {
        expect(function(){add(1, "LOL")}).to.throw(TypeError);
    });

    it("ADD6: add positive integer to empty", () => {
        expect(add(5)).to.equal(5);
    });

    it("ADD7: add negative integer to negative integer", () => {
        expect(add(-10, -15)).to.equal(-25);
    });

    it("ADD8: add negative integer to float", () => {
        expect(add(-10, 3.05)).to.be.approximately(-6.95, 0.000001);
    });

    it("ADD9: add negative integer to zero", () => {
        expect(add(-10, 0)).to.equal(-10);
    });

    it("ADD10: add negative integer to illegal value", () => {
        expect(function(){add(-5, "Degree")}).to.throw(TypeError);
    });

    it("ADD11: add negative integer to empty", () => {
        expect(add(-2)).to.equal(-2);
    });

    it("ADD12: add negative integer to positive integer", () => {
        expect(add(-2, 2)).to.equal(0);
    });

    it("ADD13: add float to float", () => {
        expect(add(6.85, 3.1000055)).to.be.approximately(9.9500055, 0.000001);
    });

    it("ADD14: add float to zero", () => {
        expect(add(3.155, 0)).to.be.approximately(3.155, 0.000001);
    });

    it("ADD15: add float to illegal value", () => {
        expect(function() {add(5.005, "Degree Celcius") }).to.throw(TypeError);
    });

    it("ADD16: add float to empty", () => {
        expect(add(5.1055)).to.be.approximately(5.1055, 0.000001);
    });

    it("ADD17: add float to positive integer", () => {
        expect(add(5.1055, 15)).to.be.approximately(20.1055, 0.000001);
    });

    it("ADD18: add float to negative integer", () => {
        expect(add(5.1055, -15)).to.be.approximately(-9.8945, 0.000001);
    });

    it("ADD19: add zero to zero", () => {
        expect(add(0, 0)).to.equal(0);
    });

    it("ADD20: add zero to illegal value", () => {
        expect(function () { add(0, "Degree Celcius") }).to.throw(TypeError);
    });

    it("ADD21: add zero to empty", () => {
        expect(add(0)).to.equal(0);
    });

    it("ADD22: add zero to positive integer", () => {
        expect(add(0, 100)).to.equal(100);
    });

    it("ADD23: add zero to negative integer", () => {
        expect(add(0, -75)).to.equal(-75);
    });

    it("ADD24: add zero to float", () => {
        expect(add(0, 1.00000000055)).to.be.approximately(1.00000000055, 0.000001);
    });

    it("ADD25: add positive integer to negative float", () => {
        expect(add(11, -2.65)).to.be.approximately(8.35, 0.000001);
    });

    it("ADD26: add illegal value to empty", () => {
        expect(function () { add("Degree Celcius") }).to.throw(TypeError);
    });

    it("ADD27: add illegal value to positive integer", () => {
        expect(function () { add("Degree Celcius", 5) }).to.throw(TypeError);
    });

    it("ADD28: add illegal value to negative integer", () => {
        expect(function () { add("Degree Celcius", -5) }).to.throw(TypeError);
    });

    it("ADD29: add illegal value to float", () => {
        expect(function () { add("Degree Celcius", 0.05) }).to.throw(TypeError);
    });

    it("ADD30: add illegal value to zero", () => {
        expect(function () { add("Degree Celcius", 0) }).to.throw(TypeError);
    });

    it("ADD31: the inputs are left empty", () => {
        expect(add()).to.equal(0);
    });

    it("ADD32: add float to negative of the same float", () => {
        expect(add(1.05, -1.05)).to.be.approximately(0, 0.000001);
    });

    it("ADD33: very large number to very large number", () => {
        expect(add(123456789, 987654321)).to.equal(1111111110);
    });

    it("ADD34: very small magnitude number to very small magnitude number", () => {
        expect(add(0.0000000009, 0.0000000001)).to.be.approximately(0.000000001, 0.00000000001);
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

