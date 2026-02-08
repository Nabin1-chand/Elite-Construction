import React from "react";
import {
  Box,
  Flex,
  Text,
  Circle,
  Heading,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";

const ButtomViewGraph = () => {
  // ✅ Status colors
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

  // 🔹 Example gridData (rows of holes)
  const gridData = [
    ["B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08"],
    ["B09", "B10", "B11", "B12", "B13", "B14", "B15", "B16"],
    ["B17", "B18", "B19", "B20", "B21", "B22", "B23", "B24"],
    ["B25", "B26", "B27", "B28", "B29", "B30", "B31", "B32"],
    ["B33", "B34", "B35", "B36", "B37", "B38", "B39", "B40"],
    ["B41", "B42", "B43", "B44", "B45", "B46", "B47", "B48"],
  ];

  // 🔹 Hole coordinates (used only for Y-axis)
  const holeCoordinates = {};
  for (let i = 1; i <= 90; i++) {
    holeCoordinates[`B${i.toString().padStart(2, "0")}`] = {
      x: i * 1.2,       // example X coordinate
      y: 15 + i * 0.04, // example Y coordinate
    };
  }

  // 🔹 Get status
  const getStatus = (val) => {
    const v = val.toLowerCase();
    if (v === "done" || v.startsWith("b01") || v.startsWith("b05") || v.startsWith("b06"))
      return "done";
    if (v === "critical" || v === "b08" || v === "b04") return "critical";
    return "active";
  };

  // 🔹 Compute Y-axis labels (rounded integers)
  const yValues = gridData.map(row => {
    const firstHole = row[0];
    return holeCoordinates[firstHole]?.y || 0;
  });
  const yLabels = yValues.map(val => Math.round(val));

  return (
    <Box w="full" maxW="1000px" mx="auto" p={4} bg="gray.50">
      <Box bg="white" p={8} borderRadius="2xl">
        <Heading size="md" textAlign="center" mb={6}>
          Buttom View - Jet Grout Design Alignment
          
        </Heading>

        {/* 🔹 LEGEND */}
        <HStack justify="center" spacing={8} mb={10} pb={4} borderBottom="1px solid" borderColor="gray.100">
          {Object.values(statusColors).map((status) => (
            <HStack key={status.label} spacing={2}>
              <Circle size="12px" bg={status.bg} border="2px solid" borderColor={status.border} />
              <Text fontSize="xs" fontWeight="bold" color="gray.600">{status.label}</Text>
            </HStack>
          ))}
        </HStack>

        <Flex justify="center" align="flex-start" position="relative">
          {/* 🔹 Y AXIS */}
          <VStack spacing="34px" pt="10px" pr={6} zIndex={2}>
            {yLabels.map((label, index) => (
              <Text key={index} fontSize="xs" fontWeight="bold" color="gray.500">
                {label}
              </Text>
            ))}

            <Box position="relative" h="20px">
              <Text fontSize="xs" fontWeight="black" transform="rotate(-90deg)" position="absolute" left="-25px" whiteSpace="nowrap">
                Y
              </Text>
            </Box>
          </VStack>

          <Box position="relative">
            {/* 🔹 GRID LINES */}
            <Box position="absolute" top="18px" left="18px" right="0" bottom="0" pointerEvents="none">
              {gridData[0].map((_, colIndex) => (
                <Box key={`vl-${colIndex}`} position="absolute" left={`${colIndex * 43.5}px`} top="0" bottom="0" w="1px" bg="gray.100" />
              ))}

              {gridData.map((_, rowIndex) => (
                <Box key={`hl-${rowIndex}`} position="absolute" top={`${rowIndex * 43}px`} left="0" right="0" h="1px" bg="gray.100" />
              ))}
            </Box>

            {/* 🔹 CIRCLE GRID */}
            <VStack spacing="-12px" align="flex-start" zIndex={1}>
              {gridData.map((row, rowIndex) => (
                <Flex key={rowIndex} ml={rowIndex % 2 === 0 ? "0px" : "25px"}>
                  {row.map((item, colIndex) => {
                    const status = getStatus(item);
                    const colors = statusColors[status];

                    return (
                      <Circle key={`${rowIndex}-${colIndex}`} size="55px" bg={colors.bg} border="1px solid" borderColor={colors.border} margin="-6px"
                        style={{ mixBlendMode: "multiply" }} display="flex" alignItems="center" justifyContent="center"
                        transition="all 0.2s" _hover={{ zIndex: 10, transform: "scale(1.2)", cursor: "pointer" }}>
                        <Text fontSize="9px" fontWeight="black">{item}</Text>
                      </Circle>
                    );
                  })}
                </Flex>
              ))}
            </VStack>

            {/* 🔹 X AXIS */}
            <Box mt={6} zIndex={2}>
              <HStack spacing="34.5px" pl="18px">
                {gridData[0].map((_, colIndex) => (
                  <Text key={colIndex} fontSize="xs" fontWeight="bold" color="gray.500">
                    {colIndex + 1} {/* sequential 1,2,3,... */}
                  </Text>
                ))}
              </HStack>

              <Center mt={4}>
                <Text fontSize="xs" fontWeight="black">X</Text>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ButtomViewGraph;
