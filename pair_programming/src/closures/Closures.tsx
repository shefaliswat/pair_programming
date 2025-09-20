const Closure = () => {
  var x = 0;

  function a() {
    var x = 10;
    function b() {
      console.log(x);
      x = x + 1;
    }
    return b;
  }

  var x = 0;

  function a() {
    var x = 10;
    function b() {
      setTimeout(() => {
        console.log(x);
        x = x + 1;
      }, 1000);
    }
    return b;
  }

  const res = a();
  res();
  res();
  res();

  //   _______________________________

  function multiply(num) {
    var count = 1;
    return function () {
      var res = count * num;
      console.log(res);

      count = count + 1;

      return count;
    };
  }

  let res1 = multiply(3);

  res1();
  res1();
  // _________________________________________

  function multiply(num) {
    var count = 1;
    return function () {
      count = count * num;
      console.log(count);

      return count;
    };
  }

  let res1 = multiply(3);

  res1();
  res1();

  //   _______________________________

  function multiply(num) {
    var count = 1;
    return function () {
      count = count * num;
      console.log(count);

      //  return count
    };
  }

  let res1 = multiply(3);

  res1();
  res1();
  res1();
  res1();
  res1();
  res1();

  // _______________________________
  return (
    <>
      <div>Closure {res()}</div>
    </>
  );
};

export default Closure;
