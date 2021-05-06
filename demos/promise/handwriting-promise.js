/**
 * 手写promise
 */
function Promise(fn) {
  let state = "pending";
  let callbacks = [];
  let value = null;

  function handle(handler) {
    if (state === "pending") {
      callbacks.push(handler);
      return;
    }

    let cb = state === "fulfilled" ? handler.onResolved : handler.onRejected,
      ret;
    if (cb === null) {
      cb = state === "fulfilled" ? handler.resolve : handler.reject;
      cb(value);
      return;
    }
    try {
      ret = cb(value);
    } catch (e) {
      handler.reject(e);
      return;
    }
    handler.resolve(ret);
  }

  this.then = function (onResolved, onRejected) {
    return new Promise(function (resolve, reject) {
      handle({
        onResolved: onResolved || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject
      });
    });
  };

  function resolve(newValue) {
    if (
      newValue &&
      (typeof newValue === "object" || typeof newValue === "function")
    ) {
      var then = newValue.then;
      if (typeof then === "function") {
        then.call(newValue, resolve, reject);
        return;
      }
    }

    value = newValue;
    state = "fulfilled";

    execute();
  }

  function reject(reason) {
    state = "rejected";
    value = reason;
    execute();
  }

  function execute() {
    setTimeout(function () {
      callbacks.forEach(function (cb) {
        handle(cb);
      });
    }, 0);
  }

  fn(resolve, reject);
}

const getUserInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1);
    }, 100);
  });
};

const getOrderList = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(2);
    }, 1000);
  });
};

const getOrderInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(3);
    }, 1000);
  });
};

getUserInfo()
  .then((res) => {
    console.log("res1:" + res);
    return getOrderList();
  })
  .then(
    (res) => {
      console.log("res2:" + res);
      return getOrderInfo();
    },
    (res) => {
      console.log("res2 error:" + res);
    }
  )
  .then((res) => {
    console.log("res3:" + res);
  });
