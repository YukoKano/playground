import { UseRefItem } from "@/app/_components/UseRefItem";
import { UseForwardRefItem } from "@/app/_components/UseRefItem/UseForwardRefItem";
import { UseRefItemDom } from "@/app/_components/UseRefItem/UseRefItemDom";
import { UseRefItemImage } from "@/app/_components/UseRefItem/UseRefItemImage";

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
      <UseRefItem />
      <UseRefItemDom />
      <UseRefItemImage />
      <UseForwardRefItem />
    </>
  );
}
