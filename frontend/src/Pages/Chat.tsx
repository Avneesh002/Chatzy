import React from "react";
import { Link } from "react-router-dom";
import MessageInput from "./../components/MessageInput";
import Messages from "./../components/Messages";
import { SocketContext } from "./../context/SocketContextProvider";

const Chat = () => {
  const { socket, partnerId, room } = React.useContext(SocketContext);

  function handleSkip() {
    socket.emit("skip", { room });
  }
  return (
    <div>
      {/* Chatting nav section */}
      <div className="border-b-2 p-3 flex fixed top-0 left-0 right-0 bg-white">
        <Link to="/">
          <span>🔙</span>
        </Link>
        <div className="flex justify-between w-full">
          <p className="text-center w-full">Chatting Anonymously</p>
          <p onClick={handleSkip} className="px-3 flex ">
            <span>🔪</span> <span> Skip</span>
          </p>
        </div>
      </div>

      {/* Messages will appear here */}

      <section className="px-1 w-full messages-section mt-12">
        {!room && <p>Finding a new user...</p>}
        {room && <Messages />}
      </section>

      {/* Send messages */}
      <div className="fixed bottom-0 left-0 right-0 w-full border-t-2 py-4 bg-white">
        {room && <MessageInput />}
      </div>
    </div>
  );
};

export default Chat;
