import assert from "assert";
import { square } from "../build/debug.js";
import { add2numbers } from "../build/debug.js";
import { weird } from "../build/debug.js";
//const myModule = require("..")
//assert.strictEqual(add(1, 2), 3);
//assert.strictEqual(myModule.square(19),361);
assert.strictEqual(square(19),361);
//assert.strictEqual(myModule.add2numbers(19,3),22);
assert.strictEqual(add2numbers(19,3),22);
assert.strictEqual(weird(3,6),81);
console.log("ok");
