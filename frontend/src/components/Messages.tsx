import React, { useRef, useEffect } from "react";
import "../App.css";
import { SocketContext } from "./../context/SocketContextProvider";

const Messages = () => {
  const { socket, partnerId, room } = React.useContext(SocketContext);
  const recentMessageRef = useRef();
  const [messages, setMessages] = React.useState([]);

  const [userLeft, setUserLeft] = React.useState(null);

  useEffect(() => {
    // if connection is established
    console.log(room);

    if (socket) {
      // user action recieved from server
      socket.on("message", (msg) => {
        setMessages([...messages, msg]);
      });
    }

    if (recentMessageRef && recentMessageRef.current)
      recentMessageRef.current.scrollIntoView();
  }, [messages]);

  return (
    <>
      {room &&
        messages.map((msg, i) => {
          return (
            <div
              key={i}
              ref={recentMessageRef}
              className={`px-3 py-2 text-sm flex ${
                socket.id == msg.id ? "my-message " : "other-message"
              }`}
            >
              <span
                className={`px-3 py-2  ${
                  socket.id == msg.id
                    ? "my-message bg-red-700"
                    : "other-message bg-cyan-800"
                }`}
              >
                {msg.message}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default Messages;
