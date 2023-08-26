import Navbar from "../components/navbar/Navbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Jobs from "../components/jobs/Jobs.jsx";

const AllJobsPage = () => {
    return (
        <>
            <Navbar/>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
                <Sidebar/>
                <Jobs/>
            </div>
        </>
    );
};

export default AllJobsPage;