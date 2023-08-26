import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductsPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;