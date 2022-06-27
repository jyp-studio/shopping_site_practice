import { Link } from "react-router-dom";
import Title from "./Title";
import { useState } from "react";
import productData from "./ProductData";
import QuantityBtn from "./QuantityBtn";
import { HStack, VStack, Text, Heading, Box, Image } from '@chakra-ui/react'

function ProductList() {

    const [productList] = useState(productData)

    return (
        <div>
            <Title mainTitle="請選擇要購買的水果" />
            <br/>
            <VStack>
                {
                    productList.map(product => (
                        <HStack spacing='24px'>
                            <Box bg="teal.100">
                                <div key={product.id}>
                                    <Heading fontSize={{ base: '24px', md: '40px', lg: '50px' }} >{product.name}</Heading>
                                    <Text>{product.price}</Text>
                                    <Link to={"/product-detail/" + product.id}>
                                        <Box>
                                            <Image src={`${process.env.PUBLIC_URL}/images/${product.image}`} width="300px"/>
                                        </Box>
                                    </Link>
                                    <Text>{product.description}</Text>
                                    <QuantityBtn productInfo={product}/>
                                </div>
                            </Box>
                            <br/>
                        </HStack>
                    ))
                }
                
            </VStack>
        </div>
    )
}

export default ProductList;