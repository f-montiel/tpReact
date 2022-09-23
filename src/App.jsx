import Hello from "./Hello";
import { useState } from "react";
function App() {
    const [msj, setMsj] = useState("Hello my Friend!");
    return (
        <>
            <Hello saludo={msj}></Hello>
            <button onClick={()=>{setMsj("Hello my Friend (from changed state)!")}}>Click Me</button>
        </>
    );
}
export default App;