import React, { useState } from 'react';
import '../Modal2.css';

function Modal2() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setFeedbackMessage(""); // Reset feedback message
    }

    const handleSubmit = () => {
        setFeedbackMessage("수정요청이 전송되었습니다!");
    }

    return (
        <div>
            <button className="edit-request-btn" onClick={handleOpenModal}>수정 요청</button>
            
            {isModalOpen && (
                <div className="modal2-background">
                    <div className="modal2-content">
                        <input type="text" placeholder="제목" className="modal2-input" />
                        <textarea placeholder="내용" className="modal2-textarea"></textarea>
                        <div className="modal2-button-container">
                            <button onClick={handleSubmit}>전송</button>
                            <button onClick={handleCloseModal}>닫기</button>
                        </div>
                        {feedbackMessage && <p>{feedbackMessage}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal2;
