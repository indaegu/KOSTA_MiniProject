import React, { useEffect, useState } from 'react';
import styles from '../Login.module.css';

function LoginComponent() {
    const [isSignIn, setIsSignIn] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setIsSignIn(true);
    }, []);

    const toggle = () => {
        setIsSignIn(!isSignIn);
    }

    const handleSignUpClick = () => {
        setShowModal(true);
    }

    return (
        <div id="container" className={`${styles.container} ${isSignIn ? styles['sign-in'] : styles['sign-up']}`}>
            <div className={styles.row}>
                <div className={`${styles.col} ${styles['align-items-center']} ${styles['flex-col']} ${styles['sign-up']}`}>
                    <div className={`${styles['form-wrapper']} ${styles['align-items-center']}`}>
                        <div className={`${styles.form} ${styles['sign-up']}`}>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className={styles['input-group']}>
                                <i className='bx bx-mail-send'></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Confirm password" />
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
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className={styles['input-group']}>
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <button type="button" onClick={() => window.location.href = '/Main'} className={styles.pointer}>
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
