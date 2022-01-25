import React, { createContext } from 'react';
import { io } from 'socket.io-client';

const socket = io(`https://socket-quick-chat-app.herokuapp.com/`),
SocketContext = createContext(socket);

socket.on('connect', () => console.log('connected to socket on client'));

const SocketProvider = ({ children }) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
export { SocketContext, SocketProvider };