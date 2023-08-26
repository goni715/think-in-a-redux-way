import {useSelector} from "react-redux";
import {useState} from "react";

const BillDetails = () => {
    const subTotal = useSelector((state)=>{
        const carts = state.cart.cartList;
        //totalPrice
        return carts.reduce((pv,cv)=>{
            return pv + (cv.quantity * cv.price)
        },0)
    });


    const [discount, setDiscount] = useState(100);
    const [vat, setVat] = useState(10);

    return (
        <>
            <div>
                <div className="billDetailsCard">
                    <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <p>Sub Total</p>
                            <p>BDT <span className="lws-subtotal">{subTotal}</span></p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>Discount</p>
                            <p>BDT <span className="lws-discount">{100}</span></p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>VAT</p>
                            <p>BDT <span className="vat">{vat}</span></p>
                        </div>
                        <div className="flex items-center justify-between pb-4">
                            <p className="font-bold">TOTAL</p>
                            <p className="font-bold">BDT <span className="lws-total">
                                {Number(subTotal+vat-discount)}
                            </span></p>
                        </div>
                        <button className="placeOrderbtn">place order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillDetails;