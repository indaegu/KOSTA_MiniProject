import React, { useEffect, useState } from 'react';
import styles from '../Login.module.css';

function LoginComponent() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const toggle = () => {
        setIsSignIn(!isSignIn);
    }

    const handleSignUpClick = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3001/users', true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.onload = function () {
            if (this.status === 201) {
                setShowModal(true);
            } else {
                alert("회원가입 실패");
            }
        };
        xhr.send(JSON.stringify({
            email,
            nickname: username,
            password,
            rank : 0,
            score : 100,
            is_deleted : false
        }));
    }

    const handleLoginClick = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:3001/users?email=${email}&password=${password}`, true);
        xhr.onload = function () {
            const users = JSON.parse(this.responseText);
            console.log(users)
            if (users.length > 0) {
                if (users[0].is_deleted) {
                    alert("탈퇴된 계정입니다!");
                } else {
                    alert("로그인 성공");
                    localStorage.setItem('userId', users[0].id);
                    window.location.href = '/Main';
                }
            } else {
                alert("존재하지 않는 계정입니다!");
            }
        };
        xhr.send();
    }
    

    return (
        <div id="container" className={`${styles.container} ${isSignIn ? styles['sign-in'] : styles['sign-up']}`}>
            <div className={styles.row}>
                <div className={`${styles.col} ${styles['align-items-center']} ${styles['flex-col']} ${styles['sign-up']}`}>
                    <div className={`${styles['form-wrapper']} ${styles['align-items-center']}`}>
                        <div className={`${styles.form} ${styles['sign-up']}`}>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className={styles['input-group']}>
                                <i className='bx bx-mail-send'></i>
                                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            </div>
                            <button onClick={handleSignUpClick} className={styles.pointer}>
                                회원가입
                            </button>
                            {showModal && (
                                <div style={{
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
                                }}>
                                    <h2>회원가입 완료</h2>
                                    <p>회원가입이 완료되었습니다.</p>
                                    <button onClick={() => setShowModal(false)}> <b onClick={toggle} className={styles.pointer}>닫기</b></button>
                                </div>
                            )}
                            <p>
                                <span>이미 계정이 있나요?   </span>
                                <b onClick={toggle} className={styles.pointer}>로그인하기</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.col} ${styles['align-items-center']} ${styles['flex-col']} ${styles['sign-in']}`}>
                    <div className={`${styles['form-wrapper']} ${styles['align-items-center']}`}>
                        <div className={`${styles.form} ${styles['sign-in']}`}>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-user'></i>
                                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button type="button" onClick={handleLoginClick} className={styles.pointer}>
                                로그인
                            </button>
                            <p>
                                <b>비밀번호 찾기</b>
                            </p>
                            <p>
                                <span>계정이 없으신가요?  </span>
                                <b onClick={toggle} className={styles.pointer}>회원가입하기</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.row} ${styles['content-row']}`}>
                <div className={`${styles.col} ${styles['align-items-center']} ${styles['flex-col']}`}>
                    <div className={`${styles.text} ${styles['sign-in']}`}>
                        <h2>Cogle</h2>
                    </div>
                    <div className={`${styles.img} ${styles['sign-in']}`}>
                        {/* 이미지 삽입은 생략됨 */}
                    </div>
                </div>
                <div className={`${styles.col} ${styles['align-items-center']} ${styles['flex-col']}`}>
                    <div className={`${styles.img} ${styles['sign-up']}`}>
                        {/* 이미지 삽입은 생략됨 */}
                    </div>
                    <div className={`${styles.text} ${styles['sign-up']}`}>
                        <h2>Join with us</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
