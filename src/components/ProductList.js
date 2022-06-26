import { Link } from "react-router-dom";
import Title from "./Title";
import { useState, useEffect } from "react";
import productData from "./ProductData";
import QuantityBtn from "./QuantityBtn";


function ProductList() {

    const [productList, setProductList] = useState(productData)

    return (
        <div>
            <Title mainTitle="請選擇要購買的水果" />
            <div>
                {
                    productList.map(product => (
                        <div key={product.id}>
                            {product.name}<br/>
                            {product.price}<br/>
                            <Link to={"/product-detail/" + product.id}>
                                <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} /><br/>
                            </Link>
                            {product.description}<br/>
                            <QuantityBtn productInfo={product}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList;