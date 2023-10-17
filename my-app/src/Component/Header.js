import React, { useState,useEffect } from 'react';


const Header = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [loggedInUser, setLoggedInUser] = useState(null);  // 로그인한 유저의 정보를 저장하는 상태

    const handleSearch = () => {
        console.log("handleSearch 함수 호출됨");
        console.log("검색어:", searchKeyword);
        window.location.href = `/SearchResult?keyword=${searchKeyword}`;
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            fetch(`http://localhost:3001/users/${userId}`)
                .then(res => res.json())
                .then(data => {
                    setLoggedInUser(data);
                })
                .catch(error => console.error('Error fetching user:', error));
        }
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    const handleLogout = () => {
        localStorage.removeItem('userId');
        window.location.href = "/";
    }

    return (
        <header className="header">
            <div className="top-section">
                <div className="logo">
                    <a href="/Main"><img src="/logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="검색어를 입력해 주세요"
                        className="search-bar"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSearch} className="search-button">
                        <img src="/searchicon.png" alt="검색" className="search-icon" />
                    </button>
                </div>

                <div className="user-info">
                    <span>
                        <a href="/MyPageMyInfo">{loggedInUser ? loggedInUser.nickname : 'Loading...'}</a>
                        <a href="/" onClick={handleLogout}>Logout</a>
                    </span>
                </div>
            </div>
            <nav className="categories">
                <div className="category-item">
                    언어 ▼
                    <div className="category-dropdown">
                        <a href="/QuestionList/Java">Java</a> <br />
                        <a href="/QuestionList/Javascript">JavaScript</a> <br />
                        <a href="/QuestionList/C">C</a>
                    </div>
                </div>
                <div className="category-item">
                    정보처리기사 ▼
                    <div className="category-dropdown">
                        <a href="/QuestionList/정보처리">기출 문제</a> <br />
                        <a href="/ExamSchedule/정보처리">시험 일정</a>
                    </div>
                </div>
                <div className="category-item">
                    SQLD ▼
                    <div className="category-dropdown">
                        <a href="/QuestionList/SQL">기출 문제</a> <br />
                        <a href="/ExamSchedule/SQL">시험 일정</a>
                    </div>
                </div>
                <div className="category-item">
                    <a href="/QuestionList/Algorithm">알고리즘</a> <br />
                </div>
                <div className="category-item">
                    <a href="/QuestionList/CS">CS</a> <br />
                </div>
                <div className="category-item">
                    랭킹 ▼
                    <div className="category-dropdown">
                        <a href="/RankingUserList">유저 랭킹</a> <br />
                        <a href="/RankingQuestionList">문제 랭킹</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
