import React, { useState } from 'react';

import { SocketProvider } from './context/socket';

import SignIn from './components/SignIn/SignIn';
import ChatRoom from './components/ChatRoom/ChatRoom';

import './styles/base.scss';

const App = () => {

    const [ user, setUser ] = useState(false);

    const [ username, setUsername ] = useState('');
    const [ room, setRoom ] = useState('general');

    const signInHandlers = {
        handleChangeName: (e) => {
            setUsername(e.target.value);
        },
        handleChangeRoom: (e) => {
            setRoom(e.target.value);
            console.log(room)
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
                    />
                ) : (
                    <SignIn 
                        username={username}
                        handleChangeName={signInHandlers.handleChangeName}
                        handleChangeRoom={signInHandlers.handleChangeRoom}
                        handleInitUser={signInHandlers.handleInitUser}
                    />
                )
            }
        </SocketProvider>
    )
};

export default App;