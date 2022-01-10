import React, { useState } from 'react';

import { SocketProvider } from './context/socket';

import SignIn from './components/SignIn/SignIn';
import ChatRoom from './components/ChatRoom/ChatRoom';

import './styles/base.scss';

const App = () => {

    const [ user, setUser ] = useState(false);

    const [ username, setUsername ] = useState('');
    const [ room, setRoom ] = useState('general');

    const appHandlers = {
        handleChangeName: (e) => {
            setUsername(e.target.value);
        },
        handleChangeRoom: (e) => {
            setRoom(e.target.value);
        },
        handleInitUser: () => {
            setUser(true)
        }
    }

    return (
        <SocketProvider>
            {
                user ? (
                    <ChatRoom 
                        username={username}
                        room={room}
                        handleChangeRoom={appHandlers.handleChangeRoom}
                    />
                ) : (
                    <SignIn 
                        username={username}
                        handleChangeName={appHandlers.handleChangeName}
                        handleChangeRoom={appHandlers.handleChangeRoom}
                        handleInitUser={appHandlers.handleInitUser}
                    />
                )
            }
        </SocketProvider>
    )
};

export default App;