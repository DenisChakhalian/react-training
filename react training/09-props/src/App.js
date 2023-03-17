import './App.css';
import PetInfo from "./components/PetInfo";

function App() {
    return (
        <div className="App">
            <PetInfo animal="cat" old="4"/>
            <PetInfo animal="dude" old="12"/>
        </div>
    );
}

export default App;
