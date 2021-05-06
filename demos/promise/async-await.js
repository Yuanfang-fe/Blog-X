/**
 * async await 使用
 */
const getUserInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1);
    }, 1000);
  });
};

const getOrderList = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2);
    }, 100);
  });
};

const getOrderInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(3);
    }, 200);
  });
};

const getA = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(4);
    }, 300);
  });
};

const getB = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(5);
    }, 400);
  });
};
(async function useAsync() {
  try {
    const A = await getUserInfo();
    console.log(A);
    const B = await getOrderList();
    console.log(B);
    const C = await getOrderInfo();
    console.log(C);
    const D = await getA();
    console.log(D);
    const F = await getB();
    console.log(F);
  } catch (error) {
    console.log("error:" + error);
  }
})();
