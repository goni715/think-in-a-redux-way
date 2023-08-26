import AllJobsPage from "./pages/AllJobsPage.jsx";
import NewJobPage from "./pages/NewJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <>
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<AllJobsPage/>} />
                   <Route path="/new-job" element={<NewJobPage/>} />
                   <Route path="/edit-job/:id" element={<EditJobPage/>} />
               </Routes>
           </BrowserRouter>
        </>
    );
};

export default App;