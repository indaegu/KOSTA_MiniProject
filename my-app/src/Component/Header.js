import React, { useState } from 'react';

const Header = () => {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearch = () => {
        console.log("handleSearch 함수 호출됨");
        console.log("검색어:", searchKeyword);
        window.location.href = `/SearchResult?keyword=${searchKeyword}`;
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

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
                    <span><a href="/MyPageMyInfo">마이페이지로</a><a href="/">Logout</a> </span>
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
                        <a href="/QuestionList/InfoProcessing">기출 문제</a> <br />
                        <a href="/ExamSchedule/InfoProcessing">시험 일정</a>
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
