import React from 'react';
import './App.css';

const dummyData = {
    slidingBanner: 'banner1.png',
    logo: 'logo.png',
    rankingSummary: [
        { name: 'User1', score: 100 },
        { name: 'User2', score: 95 },
        // ... 나머지 사용자 정보
    ],
    frequentlyWrongQuestions: [
        { questionTitle: 'Sample Question 1' },
        // ... 나머지 문제 정보
    ]
};

const Main = () => {
    return (
        <div className="main-container">
            <header className="header">
                <div className="logo-container">
                    <div className="logo">
                        <img src={dummyData.logo} alt="Logo" />
                    </div>
                </div>
                <input type="text" placeholder="검색어를 입력해 주세요" className="search-bar" />

                <div className="header-right">
                    <div className="user-info">
                        LoggedInUser <button>Logout</button>
                    </div>
                    <nav className="categories">
                        <div className="category-item">
                            언어
                            <div className="category-dropdown">
                                <a href="#">Java</a> <br />
                                <a href="#">Python</a> <br />
                                <a href="#">JavaScript</a>
                            </div>
                        </div>
                        <div className="category-item">
                            정보처리기사
                            <div className="category-dropdown">
                                <a href="#">기출문제</a> <br />
                                <a href="#">최신업데이트</a> <br />
                                <a href="#">시험 일정</a>
                            </div>
                        </div>
                        <div className="category-item">
                            SQLD
                            <div className="category-dropdown">
                                <a href="#">기출문제</a> <br />
                                <a href="#">최신업데이트</a> <br />
                                <a href="#">시험 일정</a>
                            </div>
                        </div>
                        <div className="category-item">
                            알고리즘
                            <div className="category-dropdown">
                                <a href="#">기출문제</a> <br />
                                <a href="#">최신업데이트</a> <br />
                                <a href="#">시험 일정</a>
                            </div>
                        </div>
                        <div className="category-item">
                            CS
                            <div className="category-dropdown">
                                <a href="#">기출문제</a> <br />
                                <a href="#">최신업데이트</a> <br />
                                <a href="#">시험 일정</a>
                            </div>
                        </div>
                    </nav>

                </div>
            </header>

            <div className="sliding-banner">
                <div id="slideShow">
                    <div id="slides">
                        <img src={dummyData.slidingBanner} alt="Banner" />
                        <button id="prev">&lang;</button>
                        <button id="next">&rang;</button>
                    </div>
                </div>
            </div>

            <div className="content">
                <section className="ranking-summary">
                    랭킹 요약 리스트
                </section>
                <section className="wrong-questions">
                    자주 틀린 문제 리스트
                </section>
            </div>

            <footer className="footer">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>저희 플랫폼은 개발자, 전문가, 학생들에게 최고의 학습 자원과 도구를 제공합니다. 저희와 함께 배우고, 성장하고, 번영하세요.</p>
                </div>
                <div className="footer-section">
                    <h4>Site Map</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p>Email: support@ourplatform.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
            </footer>


            {/* <div className="chatbot-modal">
                챗봇 모달 내용
            </div> */}
        </div>
    );
}

export default Main;
