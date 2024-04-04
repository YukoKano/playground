"use client";

import { useRef, useEffect } from "react";

const Box = () => {
  const ref = useRef(null); // これってnull指定する必要あるのかな

  // 常にnullがいいが、思想次第っぽい
  // tsだったら型が必要になるので入れておくといい

  // 何も指定しないとundefined, その後数字が入る場合は数字、みたいな
  // →この後に何を参照するか次第で、入れるものを変える。要素に入れるときはnullでOK

  console.log(ref.current);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // 同じ画面に入る場合、ここをいじればいい？
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
        } else {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
        }
      },
      { threshold: 1.0 } // ここ変えると、全部見えたらにするか、部分的に見えたらにするか決められる
    );

    observer.observe(div);

    // 実行したいものが複数ある場合、↓でもOK
    // const disconnect = () => { observer.disconnect(); console.log('disconnect'); }
    // return disconnect;
    return () => {
      // ()に括らないといけない、お作法　計算した結果ではなく関数を渡す
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: "2px solid black",
        backgroundColor: "blue",
      }}
    />
  );
};

const LongSection = () => {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }
  return <ul style={{ display: "block" }}>{items}</ul>;
};

export const VisiblityTracking = () => {
  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
    </>
  );
};
