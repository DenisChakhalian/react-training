import {useState} from "react";

import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCount = () => {
        setCounter(counter + 1)
    }

    const texts = [
        "OOOOO",
        "MAAAA",
        "GAAAA",
        "DDDDD",
        "!!!!!",
    ]

    return (
        <div className="App">
            <Counter counter={counter}/>
            {texts.map((text,idx) => <Button onClick={incrementCount} buttonText={text} key={idx}/>)}
        </div>
    );
}

export default App;
