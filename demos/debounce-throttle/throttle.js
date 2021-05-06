function throttle(fn) {
  let lock = false;
  return function () {
    if (lock) return;
    lock = true;
    fn.apply(this, arguments);
    setTimeout(() => {
      lock = false;
    }, 3000);
  };
}

function doRequest() {
  console.log(`${parseInt(new Date().getTime() / 1000, 10)}:` + this.value);
}

document.getElementById("throttle").innerHTML = "节流输入框 <input id='throttleInput' />";

document.getElementById("throttleInput").addEventListener("input", throttle(doRequest));
