import {useDispatch, useSelector} from "react-redux";
import {addedToCart, deleteCart} from "../redux/features/cart/actions.js";

const ProductItem = ({item}) => {
    const {id, name, category, price, quantity, imgUrl} = item || {};
    const carts = useSelector((state)=> state.cart.cartList);
    const dispatch = useDispatch();
    const isFind = carts.find((cv)=>cv.id === id);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addedToCart({
            id,
            name,
            category,
            imgUrl,
            price,
            quantity:1,
            total:price
        }))
    }



    const handleRemove = (Id) => {
        dispatch(deleteCart(Id));
    }




    return (
        <>
            <div className="lws-productCard">
                <img style={{width: "170px"}} className="lws-productImage" src={imgUrl}
                     alt="product"/>
                <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{name}</h4>
                    <p className="lws-productCategory">{category}</p>
                    <div className="flex items-center justify-between pb-2">
                        <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                        <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
                    </div>
                    <button className="lws-btnAddToCart" onClick={(e)=>isFind ? handleRemove(id) : handleSubmit(e)}>
                        {
                            isFind ? "Remove From Cart" : "Add To Cart"
                        }
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductItem;