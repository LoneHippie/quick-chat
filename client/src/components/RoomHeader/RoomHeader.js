import React from 'react';

import styles from './RoomHeader.module.scss';

const RoomHeader = ({ room }) => {

    return (
        <header className={styles.header}>
            <h1>{ room }</h1>
        </header>
    )
};

export default RoomHeader;