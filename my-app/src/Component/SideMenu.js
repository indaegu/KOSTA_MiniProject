import React from 'react';
import '../SideMenu.css';
const SideMenu = () => {
  return (
    <div>
        <div className="sidebar">
            <div className="sidebar-menu">
                <ul className="sidebar-list">
                    <a id="a-tag" href="/MyPageMyInfo"><li className="sidebar-list-item">내 정보</li></a>
                    <a id="a-tag" href="/MyPageInfoEdit"><li className="sidebar-list-item">정보 수정</li></a>
                    <a id="a-tag" href="/MyPageQuestion"><li className="sidebar-list-item">제출한 문제 리스트</li></a>
                    <a id="a-tag" href="/MyPageFavoredQuestion"><li className="sidebar-list-item">즐겨찾기</li></a>
                    <a id="a-tag" href="/MyPageQuit"><li className="sidebar-list-item sidebar-list-item-quit">탈퇴</li></a>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default SideMenu;