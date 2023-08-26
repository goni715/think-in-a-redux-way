import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreateTaskPage from "./pages/CreateTaskPage.jsx";
import EditTaskPage from "./pages/EditTaskPage.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/create-task" element={<CreateTaskPage/>}/>
                    <Route path="/edit-task/:id" element={<EditTaskPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;