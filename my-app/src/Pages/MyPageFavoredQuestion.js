import React, { useState, useEffect } from 'react';
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
import Pagination from '../Component/PageNation';

const MyPageFavoredQuestion = () => {
    const [posts, setPosts] = useState([
        { id: 'Q1', category:'정보처리기사', title: '정보처리기사 23년 3회차 실기 단답형', result: '정답', date: '2023-10-17' },
    ]); // 게시글 데이터. 실제 애플리케이션에서는 API 등을 통해 데이터를 가져와야 합니다.

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    const [currentPage, setCurrentPage] = useState(1); // 추가: 현재 페이지 상태값을 관리합니다.
    const questionsPerPage = 10; // 추가: 한 페이지에 보여줄 게시글 수를 설정합니다.

    // 추가: 선택한 결과와 카테고리 상태값을 관리합니다.
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [selectedResult, setSelectedResult] = useState('전체');

    // 현재 페이지에 보여줄 게시글만을 선택합니다.
     // 수정: 선택한 카테고리와 결과에 따라 게시글 목록이 필터링됩니다.
    const filteredPosts = posts.filter(post => 
        (selectedCategory !== '전체' ? post.category === selectedCategory : true)
        && (selectedResult !== '전체' ? post.result === selectedResult : true)
     );

    // 현재 페이지에 보여줄 게시글만을 선택합니다.
    const indexOfLastPost = currentPage * questionsPerPage;
    const indexOfFirstPost = indexOfLastPost - questionsPerPage;
    let currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 번호가 클릭되었을 때 실행될 함수입니다.
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [currentPage]);

    return (
        <div className="main-container">
            <Header />            
            <div className="content">
                <SideMenu />
                <div className="question-list-container">
                {/* 추가: select 요소로 정답/오답을 선택할 수 있는 드롭다운 메뉴 */}
                <select id="select-tag" value={selectedCategory} onChange={e => {setSelectedCategory(e.target.value); setCurrentPage(1);}}>
                    <option value="전체">카테고리 전체</option>
                    <option value="정보처리기사">정보처리기사</option>
                    <option value="SQLD">SQLD</option>
                    <option value="C">C언어</option>
                    <option value="Java">자바</option>
                    <option value="Algorithm">알고리즘</option>
                    <option value="CS">CS</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                <select id="select-tag" value={selectedResult} onChange={e => {setSelectedResult(e.target.value); setCurrentPage(1);}}>
                    <option value="전체">결과 전체</option>
                    <option value="정답">정답</option>
                    <option value="오답">오답</option>
                </select>
                <table className="question-table">
                    <thead>
                        <tr>
                            <th>문제번호</th>
                            <th>카테고리</th>
                            <th>제목</th>
                            <th>결과</th>
                            <th>날짜</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map(post => (
                            // 각 게시글을 테이블의 행으로 출력합니다.
                            // key 속성에는 고유한 값을 지정해야 합니다.
                            // 여기서는 post.id를 사용했습니다.
                            <tr key={post.id}>
                                {/* 각 열에 해당하는 데이터를 출력합니다. */}
                                {/* 클릭 가능한 링크로 만들려면 이 부분을 수정하세요. */}
                                {/* 예: `<td><a href={`/post/${post.id}`}>{post.title}</a></td>` */}
                                <td>{post.id}</td>
                                <td>{post.category}</td>
                                <td>{post.title}</td>
                                <td>{post.result}</td>
                                <td>{post.date}</td>
                                <td className="delete-button-cell">
                                    {/* 삭제 버튼에 onClick 이벤트 핸들러 추가 */}
                                    <button onClick={() => handleDelete(post.id)}>삭제</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination totalQuestions={filteredPosts.length} questionsPerPage={questionsPerPage} paginate={paginate}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyPageFavoredQuestion;