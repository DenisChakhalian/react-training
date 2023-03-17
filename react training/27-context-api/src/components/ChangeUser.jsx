import UserContext from "../context/UserContext";
import {useContext, useState} from "react";

const ChangeUser = () => {
    const {setUser} = useContext(UserContext)
    const [newName, setNewName] = useState("")
    return (
        // <button onClick={() => setUser(user === "dinch" ? "oleh" : "dinch")}>become to {user==="oleh"?"dinch":"oleh"}</button>
        <form onSubmit={(e) => {
            e.preventDefault()
            setUser(newName);
            setNewName("");
        }}>
            <input value={newName} onChange={(e)=>setNewName(e.target.value)} name="name" placeholder="who are u????????"/>
            <button type="submit"></button>
        </form>
    );
};

export default ChangeUser;