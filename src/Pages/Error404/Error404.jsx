import { useNavigate } from "react-router-dom";
import { Flex, Image, Button, Heading, Text } from "@chakra-ui/react";
import { image } from "../../Assets";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex justifyContent="center" h="100vh" w="100vw">
        <Flex flexDir="column" justifyContent="center" >
          <Heading color="brand.500">Whoops!</Heading>
          <Text color="brand.600" fontSize="1.2rem">Sorry , the page you are looking for doesn't exist.</Text>
          <Button onClick={() => navigate("/home")} top="20%" variant="brand">
            Back to Home
          </Button>
        </Flex>
        <Image src={image} alt="errorPage" size="1rem" />
      </Flex>
    </>
  );
};

export { Error404 };
