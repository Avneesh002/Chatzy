import React, { useRef, useEffect } from "react";
import "../App.css";
const messages = [
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
  { id: 1, message: "sakldnsaldn" },
  { id: 2, message: "asjdasd" },
];

const id = 1;
const Messages = () => {
  const recentMessageRef = useRef();

  useEffect(() => {
    recentMessageRef.current.scrollIntoView();
  }, [messages]);
  return (
    <>
      {messages.map((msg, i) => {
        return (
          <div
            key={i}
            ref={recentMessageRef}
            className={`px-3 py-2 text-sm flex ${
              id == msg.id ? "my-message " : "other-message"
            }`}
          >
            <span
              className={`px-3 py-2  ${
                id == msg.id
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
