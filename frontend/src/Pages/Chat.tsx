import React from "react";
import { Link } from "react-router-dom";
import MessageInput from "./../components/MessageInput";
import Messages from "./../components/Messages";

const Chat = () => {
  return (
    <div>
      {/* Chatting nav section */}
      <div className="border-b-2 p-3 flex fixed top-0 left-0 right-0 bg-white">
        <Link to="/">
          <span>🔙</span>
        </Link>
        <p className="text-center w-full">Chatting Anonymously</p>
      </div>

      {/* Messages will appear here */}
      <section className="px-1 w-full messages-section">
        <Messages />
      </section>

      {/* Send messages */}
      <div className="fixed bottom-0 left-0 right-0 w-full border-t-2 py-4 bg-white">
        <MessageInput />
      </div>
    </div>
  );
};

export default Chat;
