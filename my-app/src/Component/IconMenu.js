import React, { useState } from 'react';

function IconMenu() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const icons = [
        { name: "정보처리기사", image: "icon1.jpg" },
        { name: "SQLD", image: "icon2.png" },
        { name: "알고리즘", image: "icon3.png" },
        { name: "CS", image: "icon4.png" },
        { name: "JAVA", image: "icon5.png" },
        { name: "C", image: "icon7.png" },
        { name: "Javascript", image: "icon8.png" },
    ];
    const questionsData = {
        '정보처리기사': [
            { title: '네트워크 기초', description: '기본적인 네트워크 용어와 개념에 대한 질문입니다.', applicants: 1000, failureRate: '70%' },
            { title: '데이터베이스 설계', description: '데이터베이스 설계 방법론과 정규화에 관한 질문입니다.', applicants: 1500, failureRate: '60%' },
            { title: '프로그래밍 언어 활용', description: '다양한 프로그래밍 언어를 활용한 코딩 문제입니다.', applicants: 1200, failureRate: '50%' },
        ],
        'SQLD': [
            { title: 'SQL 기본', description: 'SQL의 기본적인 문법과 쿼리 작성에 관한 질문입니다.', applicants: 1000, failureRate: '70%' },
            { title: '데이터 모델링', description: 'ERD 작성 및 데이터 모델링 기법에 관한 질문입니다.', applicants: 1500, failureRate: '60%' },
            { title: '고급 SQL 활용', description: '서브쿼리, 조인 등의 고급 SQL 기법에 관한 질문입니다.', applicants: 1200, failureRate: '50%' },
        ],
        '알고리즘': [
            { title: '탐색 알고리즘', description: '이진 탐색, 선형 탐색 등의 기본적인 탐색 알고리즘에 대한 문제입니다.', applicants: 1000, failureRate: '70%' },
            { title: '정렬 알고리즘', description: '퀵 정렬, 병합 정렬 등의 정렬 알고리즘에 관한 문제입니다.', applicants: 1500, failureRate: '60%' },
            { title: '자료구조 활용', description: '스택, 큐, 리스트 등의 자료구조를 활용한 알고리즘 문제입니다.', applicants: 1200, failureRate: '50%' },
        ],
        'CS': [
            { title: '운영체제 기초', description: '프로세스, 스레드, 메모리 관리 등의 운영체제 기본 개념에 대한 문제입니다.', applicants: 1000, failureRate: '70%' },
            { title: '컴퓨터 네트워크', description: 'TCP/IP, OSI 모델, 라우팅 방식 등의 네트워크 기본 개념에 관한 질문입니다.', applicants: 1500, failureRate: '60%' },
        ],
        'JAVA': [
            { title: 'Java 기본 문법', description: 'Java의 변수, 연산자, 제어문에 관한 기본 문법 문제입니다.', applicants: 1000, failureRate: '70%' },
            { title: 'OOP 개념', description: '객체 지향 프로그래밍의 캡슐화, 상속, 다형성 등의 개념에 대한 문제입니다.', applicants: 1500, failureRate: '60%' },
            { title: 'Java API 활용', description: 'Java의 기본 클래스 라이브러리 활용에 관한 문제입니다.', applicants: 1200, failureRate: '50%' },
        ],
        'C': [
            { title: 'C 기본 문법', description: 'C의 데이터 타입, 포인터, 구조체 등의 기본 문법에 관한 문제입니다.', applicants: 1000, failureRate: '70%' },
            { title: 'C 기본 문법', description: 'C의 데이터 타입, 포인터, 구조체 등의 기본 문법에 관한 문제입니다.', applicants: 1000, failureRate: '70%' },
            { title: '메모리 관리', description: '동적 메모리 할당 및 해제, 메모리 누수 등의 메모리 관리에 관한 문제입니다.', applicants: 1500, failureRate: '60%' },
            { title: 'C 파일 처리', description: 'C에서의 파일 입출력 함수와 파일 관리에 대한 문제입니다.', applicants: 1200, failureRate: '50%' },
        ],
        'Javascript': [
            { title: 'Javascript 기본', description: '변수, 함수, 이벤트 처리 등의 Javascript 기본 문법에 관한 문제입니다.', applicants: 1000, failureRate: '70%' },
            { title: '비동기 처리', description: 'Promise, async/await 등의 비동기 처리 방법에 관한 문제입니다.', applicants: 1500, failureRate: '60%' },
        ],
    };
    
    
    const handleIconClick = (category) => {
        setSelectedCategory(category);
    }

    const problemsToShow = selectedCategory ? questionsData[selectedCategory] : [].concat(...Object.values(questionsData));

    return (
        <div className="icon-menu-container">
            <div className="icon-menu">
                {icons.map(icon => (
                    <div className="icon" onClick={() => handleIconClick(icon.name)}>
                        <img src={icon.image} alt={icon.name} />
                    </div>
                ))}
                {selectedCategory && (
                    <div className="icon close-icon" onClick={() => setSelectedCategory(null)}>
                        X
                    </div>
                )}
            </div>
            <div className="questions">
                {problemsToShow.map((q, idx) => (
                    <div key={idx} className="question">
                        <div className="question-title">{q.title}</div>
                        <div className="question-description">{q.description}</div>
                        <div className="question-stats">
                            <span>응시자 수: {q.applicants}명</span>
                            <span>오답률: {q.failureRate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IconMenu;


