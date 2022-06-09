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
import { useState } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/AsyncThunk/index";
import { logo } from "../../Assets";
import { toast } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading } = useSelector((store) => store.auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const signupHandler = (e) => {
    if (user.username && user.password && user.firstName && user.lastName) {
      e.preventDefault();
      const response = dispatch(signup(user));
      if (response?.payload?.status === 201) {
        localStorage.setItem("token", response.payload.data.encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify(response.payload.data.createdUser)
        );
      }
      
      toast.success("Successfuly signed up");
      navigate(location?.state?.from?.pathname || "/home", {
        replace: true,
      });
    }
  };

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
            <FormLabel>FirstName</FormLabel>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={user.firstName}
              onChange={inputHandler}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>LastName</FormLabel>
              <Input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={user.lastName}
                onChange={inputHandler}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email Adrress"
                name="email"
                value={user.email}
                onChange={inputHandler}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>User Name</FormLabel>
              <Input
                type="text"
                placeholder="UserName"
                name="username"
                value={user.username}
                onChange={inputHandler}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="Password"
                placeholder="*******"
                name="password"
                value={user.password}
                onChange={inputHandler}
              />
            </FormControl>

            <Checkbox type="checkbox" alignSelf="flex-start" my="3">
              <Text>Accept Terms and Conditions</Text>
            </Checkbox>
            <Button
              w="full"
              mb={4}
              variant="brand"
              onClick={signupHandler}
              isLoading={isLoading}
            >
              Sign up
            </Button>
            <Text textAlign="center">
              Already have an account ?{" "}
              <Text
                as={NavLink}
                to="/"
                _hover={{ color: "brand.400", fontWeight: "bold" }}
              >
                Login
              </Text>
            </Text>
          </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export { Signup };
