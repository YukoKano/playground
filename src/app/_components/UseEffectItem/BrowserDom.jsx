"use client";

import { useState, useEffect } from "react";

// ブラウザのDOM APIに接続するときはuseEffectを使い、きちんとクリーンアップする
export const BrowserDom = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => {
      // 関数を渡す必要がありそう
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        top: -20,
        left: -20,
        width: 40,
        height: 40,
      }}
    ></div>
  );
};
