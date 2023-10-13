import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import QuestionList from "./Pages/QuestionList";
import MyPageMyInfo from "./Pages/MyPageMyInfo";
import MyPageInfoEdit from "./Pages/MyPageInfoEdit";
import MyPageQuestion from "./Pages/MyPageQuestion";
import MyPageQuit from "./Pages/MyPageQuit";
import Login from "./Pages/Login";
import QuestionDetail from "./Pages/QuestionDetail";
import QuestionAnswer from "./Pages/QuestionAnswer";
import SearchResult from "./Pages/SearchResultPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/QuestionList" element={<QuestionList />} />
                    <Route path="/MyPageMyInfo" element={<MyPageMyInfo />} />
                    <Route path="/MyPageInfoEdit" element={<MyPageInfoEdit />} />
                    <Route path="/MyPageQuestion" element={<MyPageQuestion />} />
                    <Route path="/MyPageQuit" element={<MyPageQuit />} />
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