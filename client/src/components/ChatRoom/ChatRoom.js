import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../context/socket';

import RoomHeader from '../RoomHeader/RoomHeader';
import RoomList from '../RoomList/RoomList';
import RoomChatDisplay from '../RoomChatDisplay/RoomChatDisplay';
import RoomChatbar from '../RoomChatbar/RoomChatbar';

import styles from './ChatRoom.module.scss';

const ChatRoom = ({ username, room }) => {

    const socket = useContext(SocketContext);

    const [ serverMessages, setServerMessages ] = useState([]);

    useEffect(() => {
        // socket.on('connection', (socket) => {
        //     socket.on('message', `${username} has joined the chat`);
        // });

        socket.on('message', data => {
            console.log(`::message: ${data}`)
            setServerMessages(prevState => {
                return prevState.push(data);
            })
        })

        return () => socket.close();
    }, [])

    return (
        // <div className={styles.body}>
        //     <h1 className={styles.text}CHATROOM></h1>
        // </div>
        <main className={styles.body}>
            
            <RoomList />

            <section className={styles.chatroom}>
                <RoomHeader />
                <RoomChatDisplay />
                <RoomChatbar />
            </section>

        </main>
    )
};

export default ChatRoom;