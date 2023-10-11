import React from 'react';

const Comment = ({ rank }) => {
  return (
    <div className="comment">
      {rank && (
        <p>랭크 안내: {rank}위입니다.</p>
      )}
    </div>
  );
};

export default Comment;