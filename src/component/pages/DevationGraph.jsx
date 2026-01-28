import React from 'react';
import {
  Box,
  Flex,
  Text,
  Circle,
  Heading,
  VStack,
  HStack,
  Center,
} from '@chakra-ui/react';
import ThreeDGraph from '../graphs/ThreeDGraph';

const DevationGraph = () => {

  // ✅ FIXED NAME
  const statusColors = {
    done: {
      bg: "rgba(34, 197, 94, 0.4)",
      border: "#22c55e",
      label: "Done",
    },
    active: {
      bg: "rgba(59, 130, 246, 0.4)",
      border: "#3b82f6",
      label: "Active",
    },
    critical: {
      bg: "rgba(239, 68, 68, 0.4)",
      border: "#ef4444",
      label: "Critical",
    },
  };

  const gridData = [
    ["B01", "B05", "B06", "B07", "B08", "B04", "B02", "B02"],
    ["done", "B07", "B08", "B08", "B06", "B01", "B07", "B08"],
    ["B06", "B08", "B10", "B08", "B08", "B06", "B06", "B03"],
    ["B02", "B03", "B061", "B02", "B081", "B06", "B04", "B04"],
    ["B03", "B01", "B02", "B02", "B03", "B03", "B01", "B04"],
    ["B01", "B02", "B04", "B09", "B03", "B08", "B01", "B06"],
  ];

  const getStatus = (val) => {
    const v = val.toLowerCase();

    if (
      v === "done" ||
      v.startsWith("b01") ||
      v.startsWith("b05") ||
      v.startsWith("b06")
    ) return "done";

    if (v === "critical" || v === "b08" || v === "b04")
      return "critical";

    return "active";
  };

  const xTicks = [0, 1, 2, 3, 4, 5, 6, 7];
  const yTicks = [0, 1, 2, 3, 4, 5];

  return (
    <Box w="full" maxW="900px" mx="auto" p={4} bg="gray.50">
      <Box bg="white" p={8} borderRadius="2xl" boxShadow="xl">
        <Heading size="md" textAlign="center" mb={6}>
          Intersection Overlay Map
        </Heading>

        {/* 🔹 LEGEND */}
        <HStack
          justify="center"
          spacing={8}
          mb={10}
          pb={4}
          borderBottom="1px solid"
          borderColor="gray.100"
        >
          {Object.values(statusColors).map((status) => (
            <HStack key={status.label} spacing={2}>
              <Circle
                size="12px"
                bg={status.bg}
                border="2px solid"
                borderColor={status.border}
              />
              <Text fontSize="xs" fontWeight="bold" color="gray.600">
                {status.label}
              </Text>
            </HStack>
          ))}
        </HStack>

        <Flex justify="center" align="flex-start" position="relative">

          {/* 🔹 Y AXIS */}
          <VStack spacing="34px" pt="10px" pr={6} zIndex={2}>
            {yTicks.map((tick) => (
              <Text
                key={tick}
                fontSize="xs"
                fontWeight="bold"
                color="gray.500"
              >
                {tick}
              </Text>
            ))}

            <Box position="relative" h="20px">
              <Text
                fontSize="xs"
                fontWeight="black"
                transform="rotate(-90deg)"
                position="absolute"
                left="-25px"
                whiteSpace="nowrap"
              >
                Y (m)
              </Text>
            </Box>
          </VStack>

          <Box position="relative">

            {/* 🔹 GRID LINES */}
            <Box
              position="absolute"
              top="18px"
              left="18px"
              right="0"
              bottom="0"
              pointerEvents="none"
            >
              {xTicks.map((_, i) => (
                <Box
                  key={`vl-${i}`}
                  position="absolute"
                  left={`${i * 43.5}px`}
                  top="0"
                  bottom="0"
                  w="1px"
                  bg="gray.100"
                />
              ))}

              {yTicks.map((_, i) => (
                <Box
                  key={`hl-${i}`}
                  position="absolute"
                  top={`${i * 43}px`}
                  left="0"
                  right="0"
                  h="1px"
                  bg="gray.100"
                />
              ))}
            </Box>

            {/* 🔹 CIRCLE GRID */}
            <VStack spacing="-12px" align="flex-start" zIndex={1}>
              {gridData.map((row, rowIndex) => (
                <Flex
                  key={rowIndex}
                  ml={rowIndex % 2 === 0 ? "0px" : "25px"}
                >
                  {row.map((item, colIndex) => {
                    const status = getStatus(item);
                    const colors = statusColors[status];
                    const isStatusText = ["done", "active", "critical"].includes(
                      item.toLowerCase()
                    );

                    return (
                      <Circle
                        key={`${rowIndex}-${colIndex}`}
                        size="55px"
                        bg={colors.bg}
                        border="1px solid"
                        borderColor={colors.border}
                        margin="-6px"
                        style={{ mixBlendMode: "multiply" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 0.2s"
                        _hover={{
                          zIndex: 10,
                          transform: "scale(1.2)",
                          cursor: "pointer",
                        }}
                      >
                        <Text
                          fontSize="9px"
                          fontWeight="black"
                          pointerEvents="none"
                        >
                          {isStatusText ? "" : item}
                        </Text>
                      </Circle>
                    );
                  })}
                </Flex>
              ))}
            </VStack>

            {/* 🔹 X AXIS */}
            <Box mt={6} zIndex={2}>
              <HStack spacing="34.5px" pl="18px">
                {xTicks.map((tick) => (
                  <Text
                    key={tick}
                    fontSize="xs"
                    fontWeight="bold"
                    color="gray.500"
                  >
                    {tick}
                  </Text>
                ))}
              </HStack>

              <Center mt={4}>
                <Text fontSize="xs" fontWeight="black">
                  X (m)
                </Text>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Box>
      <ThreeDGraph/>
    </Box>
  );
};

export default DevationGraph;
