const Closure = () => {
  function closure() {
    return 10;
  }

  return (
    <>
      <div>Closure {closure()}</div>
    </>
  );
};

export default Closure;
