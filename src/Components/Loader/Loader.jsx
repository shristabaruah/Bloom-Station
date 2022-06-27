import { Flex, Spinner } from "@chakra-ui/react"

const Loader = ()=>{
    return (
        <Flex left="50%" top="60%">
            <Spinner color="brand.600" size="xl" thickness="5px" />
        </Flex>
    )
};

export {Loader}