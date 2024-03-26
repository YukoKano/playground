"use client";
// useRef使うためにApp routerだと宣言しないといけないっぽい

import { useRef } from "react";

export const DomFocus = () => {
  // DOM
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
    console.log(ref.current.value); // useStateを使わず、inputに入力された値を取得するのみ パフォーマンスの観点で有利になる場合もある
  };

  return (
    <>
      <p>DOMを操作する</p>
      <input ref={ref} />
      <button onClick={handleClick}>ref参照</button>
    </>
  );
};
