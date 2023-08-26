import CartItem from "./CartItem.jsx";
import {useSelector} from "react-redux";

const CartList = () => {
    const carts = useSelector((state)=> state.cart.cartList);

    return (
        <>
            <div className="space-y-6">
                {carts.length > 0 && (
                    carts.map((product, i)=>(
                        <CartItem item={product} key={i.toString()}/>
                    ))
                )
                }

            </div>
        </>
    );
};

export default CartList;