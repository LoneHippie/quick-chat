import React, { useState } from 'react';

import { SocketProvider } from './context/socket';

import SignIn from './components/SignIn/SignIn';
import ChatRoom from './components/ChatRoom/ChatRoom';

import './styles/base.scss';

const App = () => {

    const [ user, setUser ] = useState(null);

    return (
        <SocketProvider>
            {
                user ? (
                    <ChatRoom />
                ) : (
                    <SignIn />
                )
            }
        </SocketProvider>
    )
};

export default App;