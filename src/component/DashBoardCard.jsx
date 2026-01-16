import { Box, Text, Heading } from "@chakra-ui/react";

const DashboardCard = ({ title, value, bg }) => {
  return (
    <Box
      bg={bg || "white"}
      p={3}
      rounded="lg"
      shadow="md"
        minH="80px" 
       w="190px" 
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
