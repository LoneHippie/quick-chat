import React from 'react'

import styles from './RoomList.module.scss';

const RoomList = ({ currentRoom, handleChangeRoom }) => {

    const rooms = [ 'general', 'javascript', 'backend', 'hobbies' ];

    const roomCards = () => {

        return rooms.map((el, index) => (
            <button 
                key={`room-card-${index}`}
                className={styles.room}
                disabled={ el === currentRoom }
                onClick={(e) => handleChangeRoom(e)}
                value={el}
            >
                { el }
            </button>
        ))
    }

    return (
        <section className={styles.bar}>
            { roomCards() }
        </section>
    )
};

export default RoomList;