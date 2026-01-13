import { Box, Text, Heading } from "@chakra-ui/react";

const DashboardCard = ({ title, value, bg }) => {
  return (
    <Box
      bg={bg || "white"}
      p={6}
      rounded="lg"
      shadow="md"
      w="full"
      textAlign="center"
    >
      <Heading size="lg">{value}</Heading>
      <Text mt={2} fontSize="sm" color="gray.600">
        {title}
      </Text>
    </Box>
  );
};

export default DashboardCard;
