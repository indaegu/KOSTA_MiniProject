import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Slideshow from "./slideshow";
import { RankingSummary, WrongQuestions } from "./Rankingsummary";
import IconMenu from "./IconMenu";
function App() {
    return (
        <div className="App">
            <Header />
            <Slideshow />
            <div className="content">
                <RankingSummary />
                <WrongQuestions />
            </div>
            <IconMenu />
            <Footer />
        </div>
    );
}


export default App;