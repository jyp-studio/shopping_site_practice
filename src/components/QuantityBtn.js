import { useState, useContext } from "react";
import CartContext from "./CartContext";

function QuantityBtn({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext);

    //確認購物車內有無該產品
    //findIndex: 有=>回傳值；沒有=>回傳-1
    const productIndexInCart = cartItems.findIndex(element => 
        element.id === productInfo.id
    ) 
    
    //確認該種類產品在購物車內的數量
    const [numInCart, setNumInCart] = useState(
        (productIndexInCart === -1) ? 0 : cartItems[productIndexInCart].quantity
    );
    
    const handleAdd = () => {
        if (productIndexInCart === -1)
        {
            //購物車無該類產品，新增該類
            setCartItems(
                [{
                    id: productInfo.id,
                    name: productInfo.name,
                    image: productInfo.image,
                    price: productInfo.price,
                    description: productInfo.description,
                    quantity: 1
                },
                ...cartItems]
            )
        }
        else
        {
            //購物車已有該產品，只加數量
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart + 1);
    }
    const handleSub = () => {
        if (cartItems[productIndexInCart].quantity === 1)
        {
            //移除該類產品
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart, 1)
            setCartItems(newCartArray)
        }
        else
        {
            //該類產品數量-1
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart - 1);
    }

    return (
        <div>
            {
                (numInCart === 0) ?
                <button onClick={handleAdd}>加入{productInfo.name}購物車</button> :
                <div>
                    <button onClick={handleSub}>-</button>
                    {numInCart}件
                    <button onClick={handleAdd}>+</button>
                </div>
            }
        </div>
    )
}

export default QuantityBtn;