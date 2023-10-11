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

export default App;