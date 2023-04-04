import React from "react";

const Counter = () => {
  const count = 0;
  const formatCount = () => {
    return count === 0 ? <h1>empty</h1> : count;
  };
  const imageUrl = "https://picsum.photos/200";
  return (
    <>
      <img src={imageUrl} alt="" />
      <span>{formatCount()}</span>
      <button>+</button>
    </>
  );
};

export default Counter;
