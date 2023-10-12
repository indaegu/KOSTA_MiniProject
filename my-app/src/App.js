import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import QuestionList from "./Pages/QuestionList";
import MyPageMyInfo from "./Pages/MyPageMyInfo";

import QuestionDetail from "./Pages/QuestionDetail";
import QuestionAnswer from "./Pages/QuestionAnswer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/Main" element={<Main />} />
                    <Route path="/QuestionList" element={<QuestionList />} />
                    <Route path="/MyPageMyInfo" element={<MyPageMyInfo />} />
                    <Route path="/QuestionDetail/:id" element={<QuestionDetail />} />
                    <Route path="/QuestionAnswer" element={<QuestionAnswer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;