const Header = () => {
    return (
        <header className="header">
            <div className="top-section">
                <div className="logo">
                    <a href="/Main"><img src='../logo.png' alt="Logo" /></a>
                </div>
                <input type="text" placeholder="검색어를 입력해 주세요" className="search-bar" />
                <div className="user-info">
                    <span>유저님 | </span>  <button>Logout</button>   
                </div>
            </div> 
            <nav className="categories">
                <div className="category-item">
                    언어 ▼
                    <div className="category-dropdown">
                        <a href="#">Java</a> <br />
                        <a href="#">JavaScript</a> <br />
                        <a href="#">C</a>
                    </div>
                </div>
                <div className="category-item">
                    정보처리기사 ▼
                    <div className="category-dropdown">
                        <a href="/QuestionList">기출 문제</a> <br />
                        <a href="#">시험 일정</a>
                    </div>
                </div>
                <div className="category-item">
                    SQLD ▼
                    <div className="category-dropdown">
                        <a href="#">기출 문제</a> <br />
                        <a href="#">시험 일정</a>
                    </div>
                </div>
                <div className="category-item">
                        <a href="#">알고리즘</a> <br />
                </div>
                <div className="category-item">
                        <a href="#">CS</a> <br />
                </div>
            </nav>
        </header>
    )
}

export default Header;