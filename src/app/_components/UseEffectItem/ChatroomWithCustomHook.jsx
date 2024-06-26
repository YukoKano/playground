"use client";

import { useState } from "react";
import { useChatRoom } from "./hooks/useChatroom";

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useChatRoom({ roomId: roomId, serverUrl: serverUrl }); // useEffectか若干わかりづらいんだけどな

  return (
    <>
      <label>
        Server URL : {""}
        {/* {""}ってなんだ */}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
};

export const ChatroomWithCustomHook = () => {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
};
