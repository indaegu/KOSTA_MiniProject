import React, { useState } from 'react';

function IconMenu() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const icons = [
        { name: "정보처리기사", image: "icon1.jpg" },
        { name: "SQLD", image: "icon2.png" },
        { name: "알고리즘", image: "icon3.png" },
        { name: "CS", image: "icon4.png" },
        { name: "JAVA", image: "icon5.png" },
        { name: "Python", image: "icon6.png" },
        { name: "C", image: "icon7.png" },
        { name: "Javascript", image: "icon8.png" },
    ];

    const questionsData = {
        '정보처리기사': [
            { title: '문제1', description: '기사 문제1 설명', applicants: 1000, failureRate: '70%' },
            { title: '문제2', description: '기사 문제2 설명', applicants: 1500, failureRate: '60%' },
            { title: '문제3', description: '기사 문제3 설명', applicants: 1200, failureRate: '50%' },
        ],
        'SQLD': [
            { title: '문제4', description: '기사 문제1 설명', applicants: 1000, failureRate: '70%' },
            { title: '문제5', description: '기사 문제2 설명', applicants: 1500, failureRate: '60%' },
            { title: '문제6', description: '기사 문제3 설명', applicants: 1200, failureRate: '50%' },
        ],
        '알고리즘': [
            { title: '문제7', description: '기사 문제1 설명', applicants: 1000, failureRate: '70%' },
            { title: '문제8', description: '기사 문제2 설명', applicants: 1500, failureRate: '60%' },
            { title: '문제9', description: '기사 문제3 설명', applicants: 1200, failureRate: '50%' },
        ],
        'CS': [
            { title: '문제10', description: '기사 문제1 설명', applicants: 1000, failureRate: '70%' },
            { title: '문제11', description: '기사 문제2 설명', applicants: 1500, failureRate: '60%' },
            { title: '문제12', description: '기사 문제3 설명', applicants: 1200, failureRate: '50%' },
        ],
        'JAVA': [
            { title: '문제13', description: '기사 문제1 설명', applicants: 1000, failureRate: '70%' },
            { title: '문제14', description: '기사 문제2 설명', applicants: 1500, failureRate: '60%' },
            { title: '문제15', description: '기사 문제3 설명', applicants: 1200, failureRate: '50%' },
        ],
        'Python': [
            { title: '문제16', description: '기사 문제1 설명', applicants: 1000, failureRate: '70%' },
            { title: '문제17', description: '기사 문제2 설명', applicants: 1500, failureRate: '60%' },
            { title: '문제18', description: '기사 문제3 설명', applicants: 1200, failureRate: '50%' },
        ],
        'C': [
            { title: '문제19', description: '기사 문제1 설명', applicants: 1000, failureRate: '70%' },
            { title: '문제20', description: '기사 문제2 설명', applicants: 1500, failureRate: '60%' },
            { title: '문제21', description: '기사 문제3 설명', applicants: 1200, failureRate: '50%' },
        ],
        'Javascript': [
            { title: '문제22', description: '기사 문제1 설명', applicants: 1000, failureRate: '70%' },
            { title: '문제23', description: '기사 문제2 설명', applicants: 1500, failureRate: '60%' },
            { title: '문제24', description: '기사 문제3 설명', applicants: 1200, failureRate: '50%' },
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


