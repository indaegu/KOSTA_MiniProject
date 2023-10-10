import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Slideshow from "./slideshow";
import { RankingSummary, WrongQuestions } from "./Rankingsummary";
import IconMenu from "./IconMenu";
import Chatbot from "./ChatBot";
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
            <Chatbot />
            <Footer />
        </div>
    );
}


export default App;