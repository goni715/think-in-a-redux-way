import ProductItem from "./ProductItem.jsx";
import {useSelector} from "react-redux";

const ProductList = () => {

    const products = useSelector((state)=> state.products.productList);

    return (
        <>
            <div className="productContainer" id="lws-productContainer">
                {products.length > 0 && (
                        products.map((product, i)=>(
                            <ProductItem item={product} key={i.toString()}/>
                        ))
                    )
                }

            </div>
        </>
    );
};

export default ProductList;