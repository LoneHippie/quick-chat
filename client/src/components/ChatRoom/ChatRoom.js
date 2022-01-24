import React from 'react';

import RoomHeader from '../RoomHeader/RoomHeader';
// import RoomList from '../RoomList/RoomList';
import RoomChatDisplay from '../RoomChatDisplay/RoomChatDisplay';
import RoomChatbar from '../RoomChatbar/RoomChatbar';

import styles from './ChatRoom.module.scss';

const ChatRoom = ({ username, userID }) => {

    return (
        <main className={styles.body}>
            <section className={styles.chatroom}>
                <RoomHeader />
                <RoomChatDisplay 
                    username={username}
                    userID={userID}
                />
                <RoomChatbar 
                    username={username}
                    userID={userID}
                />
            </section>

        </main>
    )
};

export default ChatRoom;