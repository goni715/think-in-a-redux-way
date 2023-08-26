import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import AddVideoPage from "./pages/AddVideoPage.jsx";
import EditVideoPage from "./pages/EditVideoPage.jsx";

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/videos/:videoId" element={<VideoPage />} />
                    <Route path="/videos/add" element={<AddVideoPage />} />
                    <Route path="/videos/edit/:videoId" element={<EditVideoPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default App;