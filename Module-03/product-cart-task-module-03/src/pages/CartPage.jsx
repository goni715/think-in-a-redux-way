import BillDetails from "../components/cart/BillDetails.jsx";
import CartList from "../components/cart/CartList.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

const CartPage = () => {
    return (
        <>
            <Navbar/>
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <CartList/>
                        <BillDetails/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CartPage;