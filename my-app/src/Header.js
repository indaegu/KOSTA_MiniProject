const Header = () => {
    return (
        <header className="header">
            <div className="top-section">
                <div className="logo">
                    <a href="#"><img src='logo.png' alt="Logo" /></a>
                </div>
                <input type="text" placeholder="검색어를 입력해 주세요" className="search-bar" />
                <div className="user-info">
                    <span>유저님 | </span>  <button>Logout</button>   
                </div>
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
        </header>
    )
}

export default Header;