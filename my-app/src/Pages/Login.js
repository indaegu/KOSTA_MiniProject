import React from 'react';
import LoginComponent from "../Component/LoginComponent";
import styles from '../Login.module.css';

function Login() {
    return (
        <div className={styles.Login}>
            <LoginComponent />
        </div>
    );
}

export default Login;