import { useParams, Link } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";
import Title from "./Title";


function ProductDetail() {
    const params = useParams()

    return (
        <div>
            <Title mainTitle={params.id + "產品資料"} />
            <QuantityBtn />
            <Link to="/">
                <button>回到產品列表</button>
            </Link>
        </div>
    )
}

export default ProductDetail;