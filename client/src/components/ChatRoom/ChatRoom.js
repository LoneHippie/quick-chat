import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../context/socket';

import styles from './ChatRoom.module.scss';

const ChatRoom = ({ username, room }) => {

    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.emit('message', `${username} has joined the chat`);

        //socket.on('message', data => console.log(data))

        return () => socket.close();
    }, [])

    return (
        <div className={styles.body}>
            <h1 className={styles.text}CHATROOM></h1>
        </div>
    )
};

export default ChatRoom;