import { useEffect, useState } from "react";

export const StateUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1); // state更新用関数
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ここにcountを指定しなくていい

  return null;
};
