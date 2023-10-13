import React from 'react';
import '../SideMenu.css';
const SideMenu = () => {
  return (
    <div>
        <div className="sidebar">
            <div className="sidebar-menu">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item"><a href="/MyPageMyInfo">내 정보</a></li>
                    <li className="sidebar-list-item"><a href="/MyPageInfoEdit">정보 수정</a></li>
                    <li className="sidebar-list-item"><a href="/MyPageQuestion">제출한 문제 리스트</a></li>
                    <li className="sidebar-list-item sidebar-list-item-quit"><a href="/MyPageQuit"> 탈퇴</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default SideMenu;