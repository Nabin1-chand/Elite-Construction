import { Box, Text } from "@chakra-ui/react";

const HoleCard = ({ label, color="white"}) => {
  return (
    <Box
      w="70px"
      h="60px"
      bg={color}
      borderRadius="full" 
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