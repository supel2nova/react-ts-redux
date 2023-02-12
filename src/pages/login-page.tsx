import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginFormInput } from "../app-types/login-form-input.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const toast = useToast();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("กรุณาป้อน Email")
      .email("รูปแบบ Email ไม่ถูกต้อง"),
    password: yup
      .string()
      .required("กรุณป้อน Password")
      .min(6, "กรุณาป้อนรหัสผ่านอย่่างน้อย 6 ตัวขึ้นไป"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginFormInput>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<loginFormInput> = (data) => 
  toast({
    title: "Done!!",
    description: JSON.stringify(data),
    status: "success",
    duration: 9000,
    isClosable: true,
    position:"top-right"
  })

  
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
                <FormErrorMessage>
                  {errors.email && errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={errors.password ? true : false}
              >
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")} />
                <FormErrorMessage>
                  {errors.password && errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Stack
                  spacing={4}
                  direction={{ base: "column", sm: "row" }}
                  align={"center"}
                  justify={"space-around"}
                >
                  <Button
                    type="submit"
                    // onClick={() => {
                    //   navigate("/dashboard");
                    // }}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Log In
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/");
                    }}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};
export default LoginPage;
