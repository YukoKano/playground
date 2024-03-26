"use client";
// useRef使うためにApp routerだと宣言しないといけないっぽい

import { useRef } from "react";

export const ImageScroll = () => {
  // DOM
  const listRef = useRef(null);

  const scrollToIndex = (index) => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll(`li > img`)[index];

    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <p>スクロールして画像を表示</p>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>

      <div>
        <ul ref={listRef}>
          <li>
            <img
              src="https://img.freepik.com/free-photo/closeup-of-a-cute-cat-sitting-on-the-carpet-against-a-blurred-background_181624-53498.jpg"
              width={200}
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://cdn-ak.f.st-hatena.com/images/fotolife/c/chobineco/20230811/20230811124416.jpg"
              width={200}
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="https://www.pakutaso.com/shared/img/thumb/nekocyanPAKE5286-484_TP_V.jpg"
              width={200}
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  );
};
