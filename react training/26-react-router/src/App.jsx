import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Courses from "./components/Courses";
import Course from "./components/Course";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="courses" element={<Courses/>}/>
                        <Route path="courses/:slug" element={<Course/>}/>
                        <Route path="contacts" element={<Contacts/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
