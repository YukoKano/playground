import {
  BrowserDom,
  ChatRoomConnection,
  ChatroomWithCustomHook,
  FadeInAnimationComp,
  ModalDialog,
  MousePosition,
  VisiblityTracking,
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
      <div style={{ marginTop: "40px" }} />
      <h3>外部システムへの接続</h3>
      <ChatRoomConnection />
      {/* <BrowserDom /> */}
      <FadeInAnimationComp />
      <ModalDialog />
      <VisiblityTracking />
      <div style={{ marginTop: "40px" }} />
      <h3>カスタムフックにエフェクトをラップする</h3>
      <ChatroomWithCustomHook />
      <MousePosition />
      <div style={{ marginTop: "40px" }} />
      <h3>非 React ウィジェットの制御</h3>
      map-widgetが動かなかったのでスキップ
      <h3>エフェクトから最新の props と state を読み取る </h3>
      実験的APIの話なのでスキップ
      <h3>サーバとクライアントで異なるコンテンツを表示する</h3>
      ↑よくわからない
    </>
  );
}
