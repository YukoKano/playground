"use client";

import { useState, useEffect, useRef } from "react";

const Modal = ({ isOpen, children }) => {
  const ref = useRef();
  useEffect(() => {
    if (!isOpen) return; // この場合の早期リターンはここ
    const dialog = ref.current;
    dialog.showModal(); // dialog要素を使えば、これが使えて便利　メソッド呼び出しに同期
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
};

export const ModalDialog = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open dialog</button>
      <Modal isOpen={show}>
        hello!
        <br />
        <button onClick={() => setShow(false)}>Close dialog</button>
      </Modal>
    </>
  );
};
