import { Link } from "react-router-dom";
import Title from "./Title";
import { useState } from "react";
import productData from "./ProductData";
import QuantityBtn from "./QuantityBtn";
import { HStack, VStack, Text, Heading, Box, Image, Wrap, WrapItem, Center } from '@chakra-ui/react'

function ProductList() {

    const [productList] = useState(productData)

    return (
        <div>
            <Title mainTitle="請選擇要購買的水果" />
            <br/>
                <Wrap spacing='30px' justify="center" px={{ base: '24px', md: '40px', lg: '200px' }}>
                {
                    productList.map(product => (
                        <WrapItem>
                            <Box bg="teal.100" maxW='sm' borderWidth='1px' borderRadius='lg'  overflow='hidden'>
                                <div key={product.id}>
                                    <Heading fontSize={{ base: '24px', md: '40px', lg: '50px' }} >{product.name}</Heading>
                                    <Text>Price: {product.price}</Text>
                                    <Link to={"/product-detail/" + product.id}>
                                        <Box>
                                            <Image src={`${process.env.PUBLIC_URL}/images/${product.image}`} width="300px"/>
                                        </Box>
                                    </Link>
                                    <Text>Description: {product.description}</Text>
                                    <Center py='24px'><QuantityBtn productInfo={product}/></Center>
                                </div>
                            </Box>
                            <br/>
                        </WrapItem>
                    ))
                }
                </Wrap>
        </div>
    )
}

export default ProductList;