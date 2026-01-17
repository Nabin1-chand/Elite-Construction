import { Box, Text } from "@chakra-ui/react";

const HoleCard = ({ label, onClick, isClickable = false, color = "white" }) => {
  return (
    <Box
      w="70px"
      h="70px"
      bg={color}
      borderRadius="full"
      boxShadow="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontWeight="bold"
      fontSize="sm"
      textAlign="center"
      cursor={isClickable ? "pointer" : "default"}
      onClick={isClickable ? onClick : undefined}
      _hover={isClickable ? { transform: "scale(1.05)", boxShadow: "md" } : {}}
      transition="0.2s"
    >
      <Text color="black" noOfLines={1}>
        {label}
      </Text>
    </Box>
  );
};

export default HoleCard;
