import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-br, blue.800, blue.500)"
      px={4}
    >
      <Box
        bg="white"
        p={8}
        rounded="lg"
        shadow="xl"
        w={{ base: "100%", sm: "400px" }}
      >
        <Stack spacing={6}>
          {/* Header */}
          <Stack textAlign="center" spacing={1}>
            <Heading size="lg" color="blue.800">
              Digital Construction Reporting
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Elite Builders JG Report
            </Text>
          </Stack>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  focusBorderColor="blue.600"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  focusBorderColor="blue.600"
                />
              </FormControl>

              <Flex justify="space-between" align="center">
                <Checkbox size="sm">Remember me</Checkbox>
                <Text fontSize="sm" color="blue.600" cursor="pointer">
                  Forgot password?
                </Text>
              </Flex>

              <Button
                type="submit"
                bg="blue.700"
                color="white"
                _hover={{ bg: "blue.800" }}
              >
                Login
              </Button>
            </Stack>
          </form>

          {/* Footer */}
          <Text textAlign="center" fontSize="xs" color="gray.400">
            © 2026 Digital Construction Reporting
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Login;
