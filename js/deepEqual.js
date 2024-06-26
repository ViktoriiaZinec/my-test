// function deepEqual(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   }

//   if (typeof obj1 !== "object" || typeof obj2 !== "object") {
//     return false;
//   }

//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(
//   'deepEqual({ name: "test" }, { name: "test" })',
//   deepEqual({ name: "test" }, { name: "test" })
// );
// console.log(
//   'deepEqual({ name: "test" }, { name: "test1" })',
//   deepEqual({ name: "test" }, { name: "test1" })
// );
// console.log(
//   'deepEqual({ name: "test", data: { value: 1 } },{ name: "test", data: { value: 2 } })',
//   deepEqual(
//     { name: "test", data: { value: 1 } },
//     { name: "test", data: { value: 2 } }
//   )
// );
// console.log(
//   'deepEqual({ name: "test" }, { name: "test", age: 10 })',
//   deepEqual({ name: "test" }, { name: "test", age: 10 })
// );

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  const keys1 = Object.keys(obj1);
  // console.log("keys1", keys1);
  const keys2 = Object.keys(obj2);
  // console.log("keys2", keys2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    console.log("obj1[key]", obj1[key]);
    console.log("obj2[key]", obj2[key]);
    if (!keys2.includes(key) || deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

console.log(
  'deepEqual({ name: "test" }, { name: "test", age: 10 })',
  deepEqual({ name: "test" }, { name: "test", age: 10 })
);

console.log(
  'deepEqual({ name: "test" }, { name: "test")',
  deepEqual({ name: "test" }, { name: "test" })
);

console.log(
  'deepEqual({ name: "test" }, { name: "test", age: 10 })',
  deepEqual({ name: "test" }, { name: "test", age: 10 })
);

console.log(
  'deepEqual({ name: "test", data: { value: 1 } },{ name: "test", data: { value: 2 } })',
  deepEqual(
    { name: "test", data: { value: 1 } },
    { name: "test", data: { value: 1, value: 2 } }
  )
);
