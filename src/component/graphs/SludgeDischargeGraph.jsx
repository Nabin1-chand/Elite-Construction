import React from 'react';
import {
  Box,
  Grid,
  Tooltip,
  Container,
  Text,
} from '@chakra-ui/react';

const SludgeDischarge = () => {
  // Common styles for the 3 tables at the bottom (if needed later)
  const headerStyle = {
    textAlign: "center",
    bg: "gray.100",
    fontSize: "xs",
    p: 2,
    border: "1px solid",
    borderColor: "gray.500",
  };

  const cellStyle = {
    textAlign: "center",
    fontSize: "sm",
    p: 2,
    border: "1px solid",
    borderColor: "gray.500",
  };

  // IDs that should appear as "holes" (red background now)
  const holeIds = [14, 15, 31, 40, 51, 53, 62, 65, 81];

  // Generate sensors
  const sensors = Array.from({ length: 92 }, (_, i) => {
    const id = i + 1;
    return {
      id: `B${String(id).padStart(2, '0')}`,
      isHole: holeIds.includes(id),
      isGreen: id === 88,
    };
  });

  return (
    <Container maxW="container.xl" py={10}>
      <Text fontSize="xl" fontWeight="700" mb={6} textAlign="center">
        Sludge Discharge
      </Text>

      {/* Intersecting Sensor Map */}
      <Box
        p={10}
        bg="white"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        mb={12}
        display="flex"
        justifyContent="center"
      >
        <Grid
          templateColumns="repeat(12, 50px)" // Fixed width columns
          gap={0}
        >
          {sensors.map((s) => (
            <Tooltip key={s.id} label={s.id}>
              <Box
                w="65px"
                h="65px"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="11px"
                fontWeight="bold"
                border="1px solid"
                borderColor={s.isHole ? "gray.400" : "rgba(0,0,0,0.1)"}
                /* Increased overlap */
                m="-10px"
                style={{ mixBlendMode: s.isHole ? "normal" : "multiply" }}
                zIndex={s.isHole ? 1 : 2}
                bg={
                  s.isHole
                    ? "red.400"      // Changed from white to red
                    : s.isGreen
                    ? "green.300"    // Green sensor
                    : "rgba(237, 100, 166, 0.6)" // Pink overlap
                }
                color={s.isHole ? "white" : "white"}
                transition="all 0.2s"
                _hover={{ zIndex: 20, transform: "scale(1.15)", cursor: "pointer" }}
              >
                {s.id}
              </Box>
            </Tooltip>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SludgeDischarge;
