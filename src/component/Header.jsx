import { Box, Flex, Heading, Text, Avatar } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      bg="blue.700"
      color="white"
      h="60px"
      align="center"
      justify="space-between"
      px={6}
      shadow="md"
    >
      <Heading size="md">Elite Builders JG</Heading>
      <Flex align="center" gap={4}>
        <Text fontSize="sm">Admin</Text>
        <Avatar name="Admin User" size="sm" />
      </Flex>
    </Flex>
  );
};

export default Header;
