import Title from "./Title";
import { Link } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";


function Checkout() {
    const cartItem = 
    {
        "cartItems":
        [
            {
                "id": 5,
                "name": "Berry",
                "price": 10,
                "image": "berry.jpg",
                "description": "fresh berry.",
                "quantity": 3
            },
            {
                "id": 6,
                "name": "Carrot",
                "price": 5,
                "image": "carrot.png",
                "description": "fresh carrot.",
                "quantity": 4
            }
        ]
    }
    const { cartItems } = cartItem; //啥意思?
    const cartEmpty = (cartItems.length <= 0) ? true : false;
    const grandTotal = cartItems.reduce((total, product) => {
        return total +=  product.price * product.quantity
    }, 0);
    const freeShippingPrice = 99;

    return (
        <div>
            <Title mainTitle="你的購物車" />
            {
                cartEmpty &&
                <div>
                    購物車現在沒有商品<br/>
                    <Link to="/">去產品頁看看吧!</Link>
                </div>
            }
            {
                cartEmpty ||
                <div>
                    <div id="cartSection">
                        {
                            /*產品列表*/
                            cartItems.map(product =>
                                <div key={product.id}>
                                    <img src={process.env.PUBLIC_URL + "/images/" + product.image} /><br/>
                                    {product.name}<br/>
                                    {product.description}<br/>
                                    {product.price}<br/>
                                    購買數量: {product.quantity}<br/>
                                    <QuantityBtn />
                                </div>
                            )
                        }
                    </div>
                    <div id="checkoutSection">
                        {/*價錢總數+免費運送*/}
                        <div>全部貨物總共</div>
                        <div>{grandTotal}元</div>
                        {
                            grandTotal >= freeShippingPrice ?
                            <div>免費運送</div> :
                            <div>
                                滿${freeShippingPrice}免運費<br/>
                                還差${freeShippingPrice - grandTotal}元
                            </div>
                        }
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Checkout;