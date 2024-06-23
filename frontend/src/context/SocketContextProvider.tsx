import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [room, setRoom] = React.useState(null);
  const [partnerId, setPartnerId] = React.useState(null);
  const [socket, setSocket] = React.useState(null);
  const [userLeft, setUserLeft] = React.useState(null);

  useEffect(() => {
    // connect with server
    const socket = io("http://localhost:4000/");

    // establish connection
    socket.on("connect", () => {
      console.log("Successfully connected");
    });

    // establish room joined action, and set user(socket) data
    socket.on("room_joined", (data) => {
      setRoom(data.room);
      setPartnerId(data.partnerId);
    });

    socket.on("waiting-room", (data) => {
      setRoom(null);
      setPartnerId(null);
    });

    setSocket(socket);

    // cleanup function if user left
    return () => socket.disconnect();
  }, []);
  return (
    <SocketContext.Provider value={{ room, partnerId, socket }}>
      {children}
    </SocketContext.Provider>
  );
};
