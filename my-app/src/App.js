<<<<<<< HEAD
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyPage from './components/MyPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
       <Switch>
         <Route path="/mypage" component={MyPage} />
       </Switch>
     </Router>
      </header>
    </div>
  );
}

=======
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


>>>>>>> 375dcbd4c87f2e46eb481def2423774af1213fbf
export default App;