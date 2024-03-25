"use client";
// useRef使うためにApp routerだと宣言しないといけないっぽい

import { useRef } from "react";

export const UseRefItemDom = () => {
  // DOM
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <p>DOMを操作する</p>
      <input ref={ref} />
      <button onClick={handleClick}>ref参照</button>
    </>
  );
};
