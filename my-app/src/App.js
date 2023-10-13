import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import QuestionList from "./Pages/QuestionList";
import MyPageMyInfo from "./Pages/MyPageMyInfo";
import MyPageInfoEdit from "./Pages/MyPageInfoEdit";
import Login from "./Pages/Login";
import QuestionDetail from "./Pages/QuestionDetail";
import QuestionAnswer from "./Pages/QuestionAnswer";

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
                    <Route path="/QuestionDetail/:id" element={<QuestionDetail />} />
                    <Route path="/QuestionAnswer" element={<QuestionAnswer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;