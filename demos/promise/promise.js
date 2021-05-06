/**
 * promise 使用
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
console.log('Promise 使用:')
getUserInfo()
  .then((res) => {
    console.log(res);
    return getOrderList();
  })
  .then((res) => {
    console.log(res);
    return getOrderInfo();
  })
  .then((res) => {
    console.log(res);
    return getA();
  })
  .then((res) => {
    console.log(res);
    return getB();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("end");
  });
