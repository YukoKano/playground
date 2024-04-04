"use client"; // やっぱこれいるっぽい

// ↑use何ちゃらを使う場合は絶対必要
// footerとかclient側にしなくていいやつはuseclientなしでサーバーサイド側にする

// サービスによってどこに書くかは要相談（まとめてもOK）

import { useEffect, useState } from "react";

const createConnection = (serverUrl, roomId) => {
  return {
    // この渡し方知らない。。
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
};

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect(); // setup
    return () => {
      connection.disconnect(); // cleanup
    };
  }, [serverUrl, roomId]);

  return (
    <>
      <label>
        serverURL: {""}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h3>welcome to {roomId} room!</h3>
    </>
  );
};

export const ChatRoomConnection = () => {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <div>
      <label>
        choose the chat room : {""}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">General</option>
          <option value="travel">Travel</option>
          <option value="music">Music</option>
        </select>
      </label>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "close chat" : "open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
};
