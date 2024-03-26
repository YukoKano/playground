import { CounterAndTimer } from "@/app/_components/UseRefItem";
import { ForwardRef } from "@/app/_components/UseRefItem/ForwardRef";
import { DomFocus } from "@/app/_components/UseRefItem/DomFocus";
import { ImageScroll } from "@/app/_components/UseRefItem/ImageScroll";

export default function userefcheck() {
  return (
    <>
      <p>これを試したよ</p>
      <a
        href="https://ja.react.dev/reference/react/useRef"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://ja.react.dev/reference/react/useRef
      </a>
      <CounterAndTimer />
      <DomFocus />
      <ImageScroll />
      <ForwardRef />
    </>
  );
}
