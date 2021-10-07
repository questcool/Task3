Array.prototype.myFilter = function(callback, thisArg) {

    if (this === void 0 || this === null) {
        throw new TypeError();
    }

    let context = this;

    let arr = Object(this);

    if (arguments.length > 1) {
        context = thisArg;
    }

    if (typeof callback !== 'function') {
        throw new TypeError();
    }

    let result = [];
    
    for (let item = 0; item < arr.length; item++) {

      if (item in arr) {

        if (callback.call(context, this[item], item, arr)) {

            result.push(this[item]);

        }
      }
    }

    return result;
  };

function createDebounceFunction (callback, ms) {

  let timer = null;

  return function (...args) {

    clearTimeout(timer);

    timer = setTimeout(() => {

      callback.apply(null, args);
      
    }, ms);
  };
}