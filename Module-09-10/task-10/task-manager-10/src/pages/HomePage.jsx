import Navbar from "../components/navbar/Navbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Tasks from "../components/task/Tasks.jsx";

const HomePage = () => {
    return (
        <>
           <Navbar/>
             <div className="container relative">
                 <Sidebar/>
                 <Tasks/>
             </div>
        </>
    );
};

export default HomePage;