import '../App.css';
import '../SearchResult.css';
import Header from '../Component/Header';
import Footer from "../Component/Footer";
import Slideshow from "../Component/slideshow";
import Chatbot from "../Component/ChatBot";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../Component/PageNation';



// SearchResultPage.js
function SearchResultPage() {
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword');
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const questionsPerPage = 5; // 페이지당 보여줄 결과 수

    const paginate = pageNumber => setCurrentPage(pageNumber);


    const dummyData = [
        {
            category: "정보처리기사",
            title: "정보처리기사 시험 일정과 필기 내용 알고리즘까지",
            icon: "icon1.jpg",
            link: "/info-exam-schedule",
            summary: "정보처리기사 시험 일정 및 필기 내용에 대한 요약..."
        },
        {
            category: "SQLD",
            title: "SQLD 자격증의 중요성",
            icon: "icon2.png",
            link: "/sqld-importance",
            summary: "데이터베이스 분야에서 SQLD 자격증의 중요성에 대하여..."
        },
        {
            category: "알고리즘",
            title: "기본적인 정렬 알고리즘들",
            icon: "icon3.png",
            link: "/basic-sorting-algorithms",
            summary: "버블 정렬, 선택 정렬, 삽입 정렬 등의 기본적인 정렬 알고리즘에 대한 개요..."
        },
        {
            category: "CS",
            title: "운영체제의 기본 구조",
            icon: "icon4.png",
            link: "/os-basic-structure",
            summary: "운영체제의 주요 구성 요소와 그 기능에 대한 소개..."
        },
        {
            category: "JAVA",
            title: "Java의 객체 지향 특성",
            icon: "icon5.png",
            link: "/java-oop-features",
            summary: "Java에서의 캡슐화, 상속, 다형성 등의 객체 지향 특성에 대한 설명..."
        },
        {
            category: "C",
            title: "C 언어의 포인터 사용법",
            icon: "icon7.png",
            link: "/c-pointer-usage",
            summary: "C 언어에서 포인터의 기본 사용법과 주의 사항에 대한 안내..."
        },
        {
            category: "Javascript",
            title: "JavaScript의 비동기 처리",
            icon: "icon8.png",
            link: "/js-async-handling",
            summary: "JavaScript에서의 비동기 처리 방법과 Promise, async/await에 대한 소개..."
        },
        {
            category: "정보처리기사",
            title: "정보처리기사 실기 대비 가이드",
            icon: "icon1.jpg",
            link: "/info-practical-guide",
            summary: "정보처리기사 실기 시험 대비를 위한 학습 가이드..."
        },
        {
            category: "SQLD",
            title: "SQLD 실무에서의 활용",
            icon: "icon2.png",
            link: "/sqld-practical-use",
            summary: "데이터베이스 분야에서 SQLD 자격증을 활용하는 실무 사례..."
        },
        {
            category: "알고리즘",
            title: "고급 정렬 알고리즘",
            icon: "icon3.png",
            link: "/advanced-sorting-algorithms",
            summary: "퀵 정렬, 병합 정렬, 힙 정렬 등의 고급 정렬 알고리즘에 대한 개요..."
        },
        {
            category: "정보처리기사",
            title: "정보처리기사 핵심 내용 정리",
            icon: "icon1.jpg",
            link: "/info-core-summary",
            summary: "정보처리기사 시험 준비를 위한 핵심 내용 요약..."
        },
        {
            category: "SQLD",
            title: "SQLD 고급 기술과 활용",
            icon: "icon2.png",
            link: "/sqld-advanced-techniques",
            summary: "SQLD에서의 고급 기술과 실무 활용 방법에 대한 설명..."
        },
        {
            category: "알고리즘",
            title: "알고리즘 문제 해결 전략",
            icon: "icon3.png",
            link: "/algorithm-solving-strategies",
            summary: "다양한 알고리즘 문제를 해결하는 전략과 팁을 공유합니다..."
        },
        {
            category: "CS",
            title: "CS 네트워크 기초",
            icon: "icon4.png",
            link: "/cs-network-basics",
            summary: "컴퓨터 네트워크의 기초적인 개념과 원리에 대한 안내..."
        },
        {
            category: "JAVA",
            title: "Java 프레임워크 비교",
            icon: "icon5.png",
            link: "/java-framework-comparison",
            summary: "Spring, Hibernate, Quarkus 등 다양한 Java 프레임워크 비교..."
        },
        {
            category: "C",
            title: "C 언어로의 메모리 관리",
            icon: "icon7.png",
            link: "/c-memory-management",
            summary: "C 언어에서의 메모리 관리와 관련된 기술과 팁에 대한 안내..."
        },
        {
            category: "Javascript",
            title: "JavaScript 프론트엔드 라이브러리",
            icon: "icon8.png",
            link: "/js-frontend-libraries",
            summary: "React, Vue, Angular 등의 JavaScript 프론트엔드 라이브러리 비교..."
        },
        {
            category: "정보처리기사",
            title: "정보처리기사 실기 문제 분석",
            icon: "icon1.jpg",
            link: "/info-practical-analysis",
            summary: "최근 정보처리기사 실기 문제의 트렌드와 분석..."
        },
        {
            category: "SQLD",
            title: "SQLD 데이터 모델링 기술",
            icon: "icon2.png",
            link: "/sqld-data-modeling",
            summary: "데이터베이스 설계 시 고려해야 할 모델링 기술 및 전략..."
        },
        {
            category: "알고리즘",
            title: "알고리즘 최적화 전략",
            icon: "icon3.png",
            link: "/algorithm-optimization",
            summary: "주어진 문제를 더 빠르고 효율적으로 해결하기 위한 알고리즘 최적화 전략..."
        }

    ];



    React.useEffect(() => {
        const results = dummyData.filter(data =>
            data.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setSearchResults(results);
    }, [keyword]);

    return (
        <div className="main-container">
            <Header setSearchResults={setSearchResults} />
            {/* <Slideshow /> */}
            <SearchResultComponent results={searchResults.slice((currentPage - 1) * questionsPerPage, currentPage * questionsPerPage)} />
            <Pagination totalQuestions={searchResults.length} questionsPerPage={questionsPerPage} paginate={paginate} />
            <Chatbot />
            <Footer />
        </div>
    );
}


// SearchResultComponent.js
const SearchResultComponent = ({ results }) => {
    if (results.length === 0) return <div id="no-results">검색 결과가 없습니다.</div>;

    return (
        <div>
            {results.map(result => (
                <div key={result.link} className="search-result-item">
                    <img src={result.icon} alt={result.category} className="category-icon" />
                    <span className="category-name">{result.category}</span>
                    <a href={result.link} className="result-title">{result.title}</a>
                    <div className="result-link">{result.link}</div>
                    <div className="result-summary">{result.summary}</div>
                </div>
            ))}
        </div>
    );
};



export default SearchResultPage;