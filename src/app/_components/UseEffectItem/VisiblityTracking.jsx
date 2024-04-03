"use client";

import { useRef, useEffect } from "react";

const Box = () => {
  const ref = useRef(null); // これってnull指定する必要あるのかな

  console.log(ref.current);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // 同じ画面に入る場合、ここをいじればいい？
        if (entry.isIntersecting) {
          // 全部映ったら発火する？
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
        } else {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(div);

    return () => {
      // ()に括らないといけない？
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
  for (let i = 0; i < 100; i++) {
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
      <Box />
      <LongSection />
    </>
  );
};
