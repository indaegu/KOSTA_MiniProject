import React, { useState, useRef } from 'react';
import '../App.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Chatbot from '../Component/ChatBot';


const QuestionAnswer = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "User1",
            content: "이번 문제는 쉬웠던거 같아요!",
            date: "2023-10-10"
        },
        {
            id: 2,
            author: "User2",
            content: "전 틀렸네요..",
            date: "2023-10-11"
        }
    ]);

    const [explanation, setExplanation] = useState({
        question: `1. 다음 중 애자일(Agile) 소프트웨어 개발에 대한 설명으로 틀린 것은?`,
        options: [
            "① 공정과 도구보다 개인과의 상호작용을 더 가치 있게 여긴다.",
            "② 동작하는 소프트웨어보다는 포괄적인 문서를 가치 있게 여긴다.",
            "③ 계약 협상보다는 고객과의 협력을 가치 있게 여긴다.",
            "④ 계획을 따르기보다 변화에 대응하기를 가치 있게 여긴다."
        ],
        description: [
            "해설 :",
            "애자일(Agile) 소프트웨어 개발의 원칙은 '애자일 선언문(Agile Manifesto)'에서 확인할 수 있습니다.",
            // ... 나머지 설명 ...
            "따라서, 정답은 ②번 입니다."
        ]
    });

    const explanationRef = useRef(null);

    const handleCopyExplanation = () => {
        const textarea = document.createElement('textarea');
        textarea.textContent = explanationRef.current.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        alert("문제 해설이 복사되었습니다!");
        document.body.removeChild(textarea);
    };

    const handleCommentSubmit = () => {
        if (comment.trim() === "") {
            alert("댓글을 입력해주세요.");
            return;
        }

        const newComment = {
            id: comments.length + 1,
            author: "CurrentUser",
            content: comment,
            date: new Date().toISOString().split("T")[0]
        };

        setComments([...comments, newComment]);
        setComment("");
    };

    return (
        <div className="qa-detail-container">
            <Header />
            <div className="breadcrumb">
                홈 ▷ 문제 리스트 ▷ 문제 상세 ▷ 문제 해설
            </div>
            <h2 className="qa-title">문제 번호: 1 - 문제 제목</h2>
            <div className="qa-explanation-box">
                <p ref={explanationRef}>
                    {explanation.question}<br />
                    {explanation.options.map(option => <span key={option}>{option}<br /></span>)}
                    <br />
                    {explanation.description.map(desc => <span key={desc}>{desc}<br /></span>)}
                </p>
                <button className="edit-request-btn">수정 요청</button>
                <button onClick={handleCopyExplanation}>문제해설복사하기</button>
            </div>
            <div className="comment-section">
                <textarea
                    placeholder="댓글을 입력하세요..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleCommentSubmit}>댓글 작성</button>
            </div>
            <div className="comment-list">
                {comments.map(comment => (
                    <div key={comment.id} className="comment-item">
                        <div className="comment-author">{comment.author}</div>
                        <div className="comment-content">{comment.content}</div>
                        <div className="comment-date">{comment.date}</div>
                        {/* <button className="reply-btn">답글쓰기</button> */}
                    </div>
                ))}
            </div>
            <Chatbot />
            <Footer />
        </div>
    );
}

export default QuestionAnswer;
