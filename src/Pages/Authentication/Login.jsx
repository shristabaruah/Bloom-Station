import {
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Box,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logo } from "../../Assets";
import { login } from "../../Redux/AsyncThunk";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const { isLoading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const guestUser = {
    username: "Guest123",
    password: "test123",
    rememberMe: true,
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = (e) => {
    if (user.username && user.password) {
      e.preventDefault();
      const response = dispatch(login(user));
      if (response?.payload?.status === 200) {
        if (user.rememberMe) {
          localStorage.setItem("token", response.payload.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.data.foundUser)
          );
        }
      }
      toast.success("You are Logged In");
      navigate(location?.state?.from?.pathname || "/home", {
        replace: true,
      });
    } else {
      toast.error("please fill all the fields");
    }
  };

  return (
    <Container maxW="320">
      <Flex height="100vh" justifyContent="center" maxW="full" flexDir="column">
        <Image align="center" src={logo} h="50" />

        <Heading textAlign="center" my="3" color="brand.600">
          LogIn
        </Heading>
        <Box as="form">
          <Input
            placeholder="UserName"
            name="username"
            value={user.username}
            onChange={inputHandler}
            mb="4"
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={inputHandler}
          />
          <Checkbox
            type="checkbox"
            alignSelf="flex-start"
            my="3"
            color="brand.300"
            isChecked={user.rememberMe}
            value={user.rememberMe}
            onChange={() =>
              setUser((prev) => ({ ...prev, rememberMe: !prev.rememberMe }))
            }
          >
            <Text>Remember me</Text>
          </Checkbox>

          <Button
            mb="4"
            w="full"
            variant="outline"
            borderColor="brand.400"
            color="brand.300"
            onClick={() => setUser(guestUser)}
          >
            Guest user
          </Button>
          <Button
            mb="4"
            w="full"
            variant="brand"
            onClick={loginHandler}
            isLoading={isLoading}
          >
            LOGIN
          </Button>
        </Box>

        <Text color="brand.300" textAlign="center">
          New User ?{" "}
          <Text
            as={NavLink}
            to="/signup"
            _hover={{ color: "brand.400", fontWeight: "bold" }}
          >
            Create an Account
          </Text>
        </Text>
      </Flex>
    </Container>
  );
};
export { Login };
