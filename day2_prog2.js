// /**
//  * @param {integer} init
//  * @return { increment: Function, decrement: Function, reset: Function }
//  */
// var createCounter = function(init) {
//     let currentValue = init;
    
//     return {
//         increment: function() {
//             currentValue++;
//             return currentValue;
//         },
//         decrement: function() {
//             currentValue--;
//             return currentValue;
//         },
//         reset: function() {
//             currentValue = init;
//             return currentValue;
//         }
//     };
// };

// /**
//  * Example usage:
//  * const counter = createCounter(5);
//  * console.log(counter.increment()); // 6
//  * console.log(counter.reset());     // 5
//  * console.log(counter.decrement()); // 4
//  */

/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

// Example usage:
// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"
