import React from "react";
import SendIcon from "./../assets/icons/SendIcon";

const MessageInput = () => {
  return (
    <form action="">
      <div className="center px-4 gap-2">
        <textarea
          name="message"
          className="border-2 border-teal-800 rounded-full w-full p-2"
          id="message"
          rows="1"
        ></textarea>
        <button className="cursor-pointer rounded-full border border-teal-800 p-2 h-max">
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
