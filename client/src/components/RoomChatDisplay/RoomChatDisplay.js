import React, { useEffect, useState, useContext, useRef } from 'react';
import { SocketContext } from '../../context/socket';

import Message from '../Message/Message';

import styles from './RoomChatDisplay.module.scss';

const RoomChatDisplay = ({ username, userID }) => {

    const socket = useContext(SocketContext);

    const [ messages, setMessages ] = useState([]);
    const endChatRef = useRef(null);

    const scrollToBottom = () => {
        endChatRef.current?.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    useEffect(() => {

        socket.emit('join', username);

        socket.on('servermessage', message => {
            console.log(message);
        });

        socket.on('chatmessage', ({message, username, date, id}) => {
            console.log(`Chat message: ${message} - ${username} - ${date} - ${id}`);

            const userMessage = {
                content: message,
                username: username, 
                date: date,
                id: id,
                isFromOrigin: id === userID
            };

            setNewChatMessage(userMessage);
        });

        return () => {
            socket.close()
        };
    }, []);

    const setNewChatMessage = (message) => {
        setMessages(prevState => {
            return prevState.concat(message)
        })
    };

    const generateMessages = () => {
        return messages.map((el, index) => (
            <Message 
                key={`message-${el.id}-${index}`}
                message={el}
            />
        ))
    };

    return (
        <div className={styles.display}>
            { generateMessages() }
            <div ref={endChatRef} />
        </div>
    )
};

export default RoomChatDisplay;