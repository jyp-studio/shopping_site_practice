import { Heading, VStack } from "@chakra-ui/react";

function Title(props) {
    return (
        <VStack  backgroundColor="pink.100">
            <Heading>{props.mainTitle}</Heading>
        </VStack>
    )
}

export default Title;
