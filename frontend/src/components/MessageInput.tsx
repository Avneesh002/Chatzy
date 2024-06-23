import React, { useContext, useState } from "react";
import SendIcon from "./../assets/icons/SendIcon";
import { SocketContext } from "./../context/SocketContextProvider";

const MessageInput = () => {
  const { socket, partnerId, room } = React.useContext(SocketContext);
  const [msg, setMsg] = useState("");

  const handleMessage = () => {
    if (socket) {
      socket.emit("message", { room, message: msg });
      setMsg("");
    }
  };
  return (
    <div className="center px-4 gap-2">
      <textarea
        name="message"
        className="border-2 border-teal-800 rounded-full w-full p-2"
        id="message"
        rows="1"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleMessage();
        }}
      ></textarea>
      <button
        onClick={handleMessage}
        className="cursor-pointer rounded-full border border-teal-800 p-2 h-max"
      >
        <SendIcon />
      </button>
    </div>
  );
};

export default MessageInput;
