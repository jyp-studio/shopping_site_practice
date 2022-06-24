import { useState } from "react";

function QuantityBtn() {
    const [numInCart, setNumInCart] = useState(0);
    
    const handleAdd = () => {
        setNumInCart(numInCart + 1);
    }
    const handleSub = () => {
        setNumInCart(numInCart - 1);
    }

    return (
        <div>
            {
                (numInCart === 0) ?
                <button onClick={handleAdd}>加入購物車</button> :
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