const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
