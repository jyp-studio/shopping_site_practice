import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "./ProductData";
import QuantityBtn from "./QuantityBtn";
import Title from "./Title";


function ProductDetail() {
    const params = useParams(); //get id on url
    const [productDetail, setProductDetail] = useState(null);

    let productInfo = productData.find((element) => {
        return element.id === parseInt(params.id)   
    });

    useEffect(() => {
        setProductDetail(productInfo)
    }, [])
    
    return (
        <div>
            {
                productDetail &&
                <div>
                    <Title mainTitle={productDetail.name + "產品資料"} />
                    <img src={`${process.env.PUBLIC_URL}/images/${productDetail.image}`} alt={productDetail.name} width="400"/>
                    <p>名稱: {productDetail.name}</p>
                    <p>售價: {productDetail.price}</p>
                    <p>描述: {productDetail.description}</p>
                    <QuantityBtn productInfo={productDetail}/>
                    <Link to="/">
                        <button>回到產品列表</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default ProductDetail;