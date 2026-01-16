import { Box, Text } from "@chakra-ui/react";

const HoleCard = ({ label }) => {
  return (
    <Box
      w="70px"
      h="60px"
      bg="white"
      borderRadius="md"
      boxShadow="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontWeight="bold"
      fontSize="sm"
    >
      {label}
    </Box>
  );
};

export default HoleCard;