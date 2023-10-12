// Modal.js

import React from 'react';
import '../Modal.css';

const Modal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{message}</p>
                <div className="button-container"> {/* 버튼들을 감싸는 컨테이너 추가 */}
                    <button onClick={onConfirm}>예</button>
                    <button onClick={onCancel}>아니오</button>
                </div>
            </div>
        </div>
    );
}


export default Modal;
