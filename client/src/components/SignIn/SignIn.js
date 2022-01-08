import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../context/socket';

import styles from './SignIn.module.scss';

const SignIn = () => {

    const socket = useContext(SocketContext);

    const [ username, setUsername ] = useState('');

    useEffect(() => {
        socket.on('message', data => {
            console.log(data);
        })

        console.log(socket)

        return () => socket.close();
    }, [])

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Quick Chat</h1>
            <input 
                type="text"
                title='username'
                placeholder='Your username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
    )
};

export default SignIn;