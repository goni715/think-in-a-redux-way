import Tags from "../components/tags/Tags.jsx";
import VideoGrid from "../components/grid/VideoGrid.jsx";
import Pagination from "../components/ui/Pagination.jsx";

const HomePage = () => {
    return (
        <>
            <Tags/>
            <VideoGrid/>
            <Pagination />
        </>
    );
};

export default HomePage;