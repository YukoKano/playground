"use client";
// useRef使うためにApp routerだと宣言しないといけないっぽい

import { useState, useRef } from "react";

export const CounterAndTimer = () => {
  // timer
  const [startTime, setStartTime] = useState(null);
  const [nowTime, setNowTime] = useState(null);
  const timerRef = useRef(null);

  const handleTimerStart = () => {
    setStartTime(Date.now());
    setNowTime(Date.now());

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setNowTime(Date.now());
    }, 10);
  };

  const handleTimerStop = () => {
    clearInterval(timerRef.current);
  };

  let secondsPassed = 0;
  if (startTime != null && nowTime != null) {
    secondsPassed = (nowTime - startTime) / 1000;
  }

  // count
  const countRet = useRef(0);

  const handleClick = () => {
    countRet.current = countRet.current + 1;
    console.log(countRet.current);
  };

  // DOM

  return (
    <>
      <h2>useRef使ってみる</h2>
      <p>counter</p>
      <p>↓を押すとconsoleで値が表示されるよ</p>
      <button onClick={handleClick}>button</button>

      <p>timer</p>
      <p>time passed: {secondsPassed.toFixed(3)}</p>
      <button onClick={handleTimerStart}>start</button>
      <button onClick={handleTimerStop}>stop</button>
    </>
  );
};
