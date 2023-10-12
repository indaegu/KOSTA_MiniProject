import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import QuestionList from "./Pages/QuestionList";
import MyPageMyInfo from "./Pages/MyPageMyInfo";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/Main" element={<Main />} />
                    <Route path="/QuestionList" element={<QuestionList />} />
                    <Route path="/MyPageMyInfo" element={<MyPageMyInfo />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;