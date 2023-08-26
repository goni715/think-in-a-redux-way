import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/videos/:videoId" element={<VideoPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default App;