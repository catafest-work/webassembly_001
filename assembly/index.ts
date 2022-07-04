// The entry file of your WebAssembly module.

// export function add(a: i32, b: i32): i32 {
//   return a + b;
// }

// export function square(a: i32, b: i32): i32 {
  
// }

export function square(n1: i32): i32 {
  return n1*n1;
  };

export function add2numbers (n1: i32, n2: i32): i32 {
  return n1+n2;
  };

export function weird (n1: i32, n2: i32): i32 {
    return square(add2numbers(n1,n2));
  };