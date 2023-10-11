import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Main" element={<Main />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;