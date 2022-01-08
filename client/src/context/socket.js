import React, { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const socket = io(`http://${window.location.hostname}:3000`),
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