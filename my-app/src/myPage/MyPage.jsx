import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Comment from './Comment';

const MyPage = () => {
  const [users, setUsers] = useState([]);
  
   useEffect(() => {
     axios.get('http://localhost:3000/users')
       .then(response => setUsers(response.data))
       .catch(error => console.error(error));
   }, []);

   return (
     <div className="mypage">
       {users.map(user => (
         <>
           <Card key={user.id} rank={user.rank} score={user.score} nickname={user.nickname} />
           <Comment key={`comment-${user.id}`} rank={user.rank} />
         </>
       ))}
     </div>
   );
 };

 export default MyPage;