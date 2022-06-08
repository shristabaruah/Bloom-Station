import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { logo } from "../../Assets";

const Signup = () => {
  return (
    <VStack
      h="full"
      p={10}
      spacing={5}
      justifyContent="center"
      align="center"
      justify="center"
    >
      <VStack spacing={2} align="center">
        <Image align="center" src={logo} h="50" />
        <Heading color="brand.600">SignUp</Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={4} color="brand.300">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>FirstName</FormLabel>
            <Input type="text" placeholder="First Name" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>LastName</FormLabel>
            <Input type="text" placeholder="Last Name" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email Adrress" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="Password" placeholder="*******" />
          </FormControl>
          <Checkbox type="checkbox" alignSelf="flex-start" my="3">
            <Text>Accept Terms and Conditions</Text>
          </Checkbox>
          <Button w="full" mb={4} variant="brand">
            Sign up
          </Button>
          <Text textAlign="center">
            Already have an account ? <Text as={NavLink} to="/login" _hover={{color:"brand.400" ,fontWeight:"bold"}} >Login</Text>
          </Text>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export { Signup };
