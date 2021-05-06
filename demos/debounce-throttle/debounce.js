function debounce(fn) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      // fn();
    }, 500);
  };
}

function doRequest() {
  console.log(this.value);
}

document.getElementById("debounce").innerHTML = "防抖输入框 <input id='debounceInput' />";

document.getElementById("debounceInput").addEventListener("input", debounce(doRequest));
