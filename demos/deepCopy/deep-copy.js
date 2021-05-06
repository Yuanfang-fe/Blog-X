/**
 * js深拷贝
 */

let bird = {
  name: "火烈鸟",
  color: "red",
  food: [
    {
      name: "蓝绿藻"
    },
    {
      name: "甲壳虫"
    }
  ],
  run: function () {
    console.log("嚯嚯嚯");
  }
};

function deepCopy(o) {
  if (Array.isArray(o)) {
    return arrayCopy(o);
  } else {
    return objCopy(o);
  }
}

function arrayCopy(o) {
  let newArray = [];
  o.forEach((i) => {
    if (typeof i === "object") {
      newArray.push(deepCopy(i));
    } else {
      newArray.push(i);
    }
  });
  return newArray;
}

function objCopy(o) {
  let newObj = {};
  for (let key in o) {
    if (typeof o[key] === "object") {
      newObj[key] = deepCopy(o[key]);
    } else {
      newObj[key] = o[key];
    }
  }
  return newObj;
}
// 方法一
const newObj = deepCopy(bird);
console.log(newObj);
bird.name = "咕咕";
console.log(bird);
console.log(newObj);

// 方法二
// const obj = JSON.parse(JSON.stringify(bird));
// console.log(obj);
// console.log(JSON.stringify(bird));
