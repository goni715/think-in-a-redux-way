import Form from "../components/Form.jsx";
import ProductList from "../components/ProductList.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

const ProductsPage = () => {
    return (
        <>
            <Navbar/>
            <main className="py-16">
                <div className="productWrapper">
                    <ProductList/>
                    <div>
                        <Form/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProductsPage;