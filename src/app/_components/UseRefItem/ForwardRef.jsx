"use client";
// useRef使うためにApp routerだと宣言しないといけないっぽい

import { forwardRef, useRef } from "react";

// ↓eslintでエラーが出ているのでdisableする
// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export const ForwardRef = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <p>独自コンポーネントのRefを公開</p>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>focus component</button>
    </>
  );
};
