import { UseRefItem } from "@/app/_components/UseRefItem";
import { UseForwardRefItem } from "@/app/_components/UseRefItem/UseForwardRefItem";
import { UseRefItemDom } from "@/app/_components/UseRefItem/UseRefItemDom";
import { UseRefItemImage } from "@/app/_components/UseRefItem/UseRefItemImage";

export default function userefcheck() {
  return (
    <>
      <UseRefItem />
      <UseRefItemDom />
      <UseRefItemImage />
      <UseForwardRefItem />
    </>
  );
}
