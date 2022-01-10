import React from 'react';

import RoomHeader from '../RoomHeader/RoomHeader';
// import RoomList from '../RoomList/RoomList';
import RoomChatDisplay from '../RoomChatDisplay/RoomChatDisplay';
import RoomChatbar from '../RoomChatbar/RoomChatbar';

import styles from './ChatRoom.module.scss';

const ChatRoom = ({ username }) => {

    return (
        <main className={styles.body}>
            <section className={styles.chatroom}>
                <RoomHeader />
                <RoomChatDisplay 
                    username={username}
                />
                <RoomChatbar 
                    username={username}
                />
            </section>

        </main>
    )
};

export default ChatRoom;