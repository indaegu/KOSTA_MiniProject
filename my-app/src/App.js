import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Slideshow from "./slideshow";

function App(){
    return (
        <div className="App">
            <Header />
            <Slideshow />
            랭킹요약<br />
            아이콘 카테고리
            <Footer />
        </div>
    )
}

export default App;