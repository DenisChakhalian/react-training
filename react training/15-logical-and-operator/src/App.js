import {useState} from "react";

import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import ResetButton from "./components/ResetButton"

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCount = () => {
        setCounter(counter + 1);
    }

    const resetCount = () => {
        setCounter(0);
    }

    return (
        <div className="App">
            <Counter counter={counter}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <ResetButton counter={counter} onClick={resetCount}/>
        </div>
    );
}

export default App;
