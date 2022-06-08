import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { logo } from "../../Assets";

const Login = () => {
  return (
    <Container maxW="320" >
      <Flex height="100vh" justifyContent="center" maxW="full" flexDir="column">
      <Image align="center" src={logo} h="50" />

        <Heading textAlign="center" my="3" color="brand.600">LogIn</Heading>
        <FormControl my="3">
          <Input placeholder="Email Adrress" />
        </FormControl>

        <FormControl my="3">
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Checkbox type="checkbox" alignSelf="flex-start" my="3" color="brand.300"><Text>Remember me</Text></Checkbox>
        <Button mb="4" w="full" variant="brand">LOGIN</Button>
        <Button mb="4" w="full" variant="outline" borderColor="brand.400" color="brand.300">Guest user</Button>

        <Text color="brand.300" textAlign="center">
          New User ? <Text as={NavLink} to ="/signup"  _hover={{color:"brand.400" ,fontWeight:"bold"}}>Create an Account</Text>
        </Text>
      </Flex>
    </Container>
  );
};
export { Login };
