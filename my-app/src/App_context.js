import {createContext, useContext} from 'react';

const ThemeContext = createContext('light');

function App_context(){
    const theme = useContext(ThemeContext); // 전역으로 선언
    console.log('App:' + theme);
    return(
        <div>
            <h1>Context API Test</h1>
            <Form />
        </div>    
    );
}

function Form(){
    console.log('Form:' + ThemeContext);
    return(
        <form>
            <Button />
            <Button />
        </form>
    );
}

function Button(){
    console.log('Button:' + ThemeContext);
    return(
        <button>Show</button>
    );
}

export default App_context;