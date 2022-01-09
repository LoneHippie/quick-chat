import React from 'react';

import styles from './SignIn.module.scss';

const SignIn = ({ username, handleChangeName, handleChangeRoom, handleInitUser }) => {

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
                    onChange={(e) => handleChangeName(e)}
                />
            </div>

            <div className={styles.form_group}>
                <label htmlFor='room'>Room</label>
                <select 
                    name="rooms" 
                    id="rooms" 
                    className={styles.select}
                    onChange={(e) => handleChangeRoom(e)}
                >
                    <option value="general">General Chat</option>
                    <option value="javascript">JavaScript</option>
                    <option value="backend">Back End</option>
                    <option value="hobbies">Hobbies</option>
                </select>
            </div>

            <button
                className={styles.button}
                onClick={() => handleInitUser()}
                disabled={!username.length}
            >
                Join
            </button>
        </div>
    )
};

export default SignIn;