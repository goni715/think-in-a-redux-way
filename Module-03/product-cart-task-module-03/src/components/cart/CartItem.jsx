import {useDispatch} from "react-redux";
import {decrement, deleteCart, increment} from "../../redux/features/cart/actions.js";

const CartItem = ({item}) =>{
    const {id,name, category, price, imgUrl, quantity, total} = item;
    const dispatch = useDispatch();


    const handleIncrement = () => {
      dispatch(increment(id));
    }

    const handleDecrement = () => {
        dispatch(decrement(id));
    }


    const handleRemove = (Id) => {
        dispatch(deleteCart(Id));
    }




    return (
        <>
            <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                    <img className="lws-cartImage"
                         src={imgUrl} alt="cart"/>
                    <div className="space-y-2">
                        <h4 className="lws-cartName">
                            {name}
                        </h4>
                        <p className="lws-cartCategory">{category}</p>
                        <p>BDT <span className="lws-cartPrice">{price}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    <div className="flex items-center space-x-4">
                        <button disabled={quantity===10} className="lws-incrementQuantity" onClick={handleIncrement}>
                            <i className="text-lg fa-solid fa-plus"></i>
                        </button>
                        <span className="lws-cartQuantity">{quantity}</span>
                        <button disabled={quantity===1} className="lws-decrementQuantity" onClick={handleDecrement}>
                            <i className="text-lg fa-solid fa-minus"></i>
                        </button>
                    </div>
                    <p className="text-lg font-bold">BDT <span
                        className="lws-calculatedPrice">{total}</span></p>
                </div>
                <div
                    className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button className="lws-removeFromCart" onClick={()=>handleRemove(id)}>
                        <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartItem;