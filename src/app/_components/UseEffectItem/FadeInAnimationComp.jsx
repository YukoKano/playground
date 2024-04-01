"use client";

import { useState, useEffect, useRef } from "react";
import { FadeInAnimation } from "./animation";

// 外部のアニメーションライブラリを使用するときは、refでDOMを参照してuseEffectで使用する

const Welcome = () => {
  const ref = useRef();

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(1000);
    return () => {
      animation.stop();
    };
  }, []);
  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: "white",
        padding: 50,
        textAlign: "center",
        fontSize: 50,
        backgroundImage:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      Welcome
    </h1>
  );
};

export const FadeInAnimationComp = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "remove" : "show"}</button>
      <hr />
      {show && <Welcome />}
    </>
  );
};
