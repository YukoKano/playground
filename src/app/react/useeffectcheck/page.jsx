import {
  BrowserDom,
  ChatRoomConnection,
} from "@/app/_components/UseEffectItem";

export default function useeffectcheck() {
  return (
    <>
      <h2>useEffect使うよ</h2>
      <p>これを試したよ</p>
      <a
        href="https://ja.react.dev/reference/react/useEffect"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://ja.react.dev/reference/react/useEffect
      </a>
      <ChatRoomConnection />
      <BrowserDom />
    </>
  );
}
