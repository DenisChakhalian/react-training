import {useState} from "react";

import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCount = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="App">
            <Counter counter={counter}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
            <Button onClick={incrementCount}/>
        </div>
    );
}

export default App;
