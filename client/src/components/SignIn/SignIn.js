import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../context/socket';

import styles from './SignIn.module.scss';

const SignIn = () => {

    const socket = useContext(SocketContext);

    const [ username, setUsername ] = useState('');
    const [ room, setRoom ] = useState('general');

    useEffect(() => {
        socket.on('message', data => {
            console.log(data);
        })

        console.log(socket)

        return () => socket.close();
    }, [])

    const handlers = {
        handleChangeName: (e) => {
            setUsername(e.target.value);
        },
        handleChangeRoom: (e) => {
            setRoom(e.target.value);
            console.log(room)
        }
    }

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Quick Chat</h1>

            <div className={styles.form_group}>
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    className={styles.input}
                    type="text"
                    title='username'
                    placeholder='Your username'
                    value={username}
                    onChange={(e) => handlers.handleChangeName(e)}
                />
            </div>

            <div className={styles.form_group}>
                <label htmlFor='room'>Room</label>
                <select 
                    name="rooms" 
                    id="rooms" 
                    className={styles.select}
                    onChange={(e) => handlers.handleChangeRoom(e)}
                >
                    <option value="general">General Chat</option>
                    <option value="javascript">JavaScript</option>
                    <option value="backend">Back End</option>
                    <option value="hobbies">Hobbies</option>
                </select>
            </div>

            <button
                className={styles.button}
                onClick={() => console.log({ username, room })}
            >
                Join
            </button>
        </div>
    )
};

export default SignIn;