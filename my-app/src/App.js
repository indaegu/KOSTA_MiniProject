import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import QuestionList from "./Pages/QuestionList";
import RankingUserList from "./Pages/RankingUserList";
import RankingQuestionList from "./Pages/RankingQuestionList";
import MyPageMyInfo from "./Pages/MyPageMyInfo";
import MyPageInfoEdit from "./Pages/MyPageInfoEdit";
import MyPageQuestion from "./Pages/MyPageQuestion";
import MyPageFavoredQuestion from "./Pages/MyPageFavoredQuestion";
import MyPageQuit from "./Pages/MyPageQuit";
import Login from "./Pages/Login";
import QuestionDetail from "./Pages/QuestionDetail";
import QuestionAnswer from "./Pages/QuestionAnswer";
import SearchResult from "./Pages/SearchResultPage";
import MyPageInfoEditComplete from "./Pages/MyPageInfoEditComplete";
import MyPageQuitComplete from "./Pages/MyPageQuitComplete";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/QuestionList" element={<QuestionList />} />
                    <Route path="/RankingUserList" element={<RankingUserList />} />
                    <Route path="/RankingQuestionList" element={<RankingQuestionList />} />
                    <Route path="/MyPageMyInfo" element={<MyPageMyInfo />} />
                    <Route path="/MyPageInfoEdit" element={<MyPageInfoEdit />} />
                    <Route path="/MyPageInfoEditComplete" element={<MyPageInfoEditComplete />} />
                    <Route path="/MyPageQuestion" element={<MyPageQuestion />} />
                    <Route path="/MyPageFavoredQuestion" element={<MyPageFavoredQuestion />} />
                    <Route path="/MyPageQuit" element={<MyPageQuit />} />
                    <Route path="/MyPageQuitComplete" element={<MyPageQuitComplete />} />
                    <Route path="/MyPage" element={<MyPageMyInfo />} />
                    <Route path="/QuestionDetail/:id" element={<QuestionDetail />} />
                    <Route path="/QuestionAnswer" element={<QuestionAnswer />} />
                    <Route path="/SearchResult" element={<SearchResult />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;