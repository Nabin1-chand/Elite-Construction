import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Select,
  Flex,
  Button
} from "@chakra-ui/react";
import React, { useState } from "react";
const OperationalMonitoringLog = () => {
  const data = [
    {
      depth: "1",
      jettingSpeed: "5 ",
      feedRate: "10",
      jettingPressure: "50 ",
      flowRate: "200 ",
      airFlow: "500 ",
      airPressure: "6 ",
    },
    {
      depth: "2",
      jettingSpeed: "6",
      feedRate: "12",
      jettingPressure: "55",
      flowRate: "220",
      airFlow: "520 ",
      airPressure: "6.2",
    },
     {
      depth: "3",
      jettingSpeed: "8",
      feedRate: "10",
      jettingPressure: "90 ",
      flowRate: "20 ",
      airFlow: "500 ",
      airPressure: "6 ",
    },
  ];
    const [selectedHole, setSelectedHole] = useState("");
  const holes = Array.from({ length: 90 }, (_, i) => `B${i + 1}`);
  const handleLoad = () => {
    // alert(`Load data for ${selectedHole}`);
  };

  const handleSave = () => {
    // alert(`Save data for ${selectedHole}`);
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4} fontWeight="bold">
        Jetting Opeational Monitoring
      </Text>


       {/* Hole Number Dropdown */}
      <Box mb={4} maxW="200px">
        <Select
          placeholder="Select Hole"
          value={selectedHole}
          onChange={(e) => setSelectedHole(e.target.value)}
        >
          {holes.map((hole, index) => (
            <option key={index} value={hole}>
              {hole}
            </option>
          ))}
        </Select>
      </Box>
      <TableContainer border="1px solid #ccc" borderRadius="md">
        <Table variant="simple" size="md">
          <Thead bg="gray.100">
            <Tr>
              <Th border="1px solid #ccc">Depth(M)</Th>
              <Th border="1px solid #ccc">Jetting Speed(RPM)</Th>
              <Th border="1px solid #ccc">Feed Rate(MM/MIN)</Th>
              <Th border="1px solid #ccc">Jetting Pressure(KN)</Th>
              <Th border="1px solid #ccc">Flow Rate(LTR/MIM)</Th>
              <Th border="1px solid #ccc">Air Flow(MM/MIN)</Th>
              <Th border="1px solid #ccc">Air Pressure(KN)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, index) => (
              <Tr key={index}>
                <Td border="1px solid #ccc">{row.depth}</Td>
                <Td border="1px solid #ccc">{row.jettingSpeed}</Td>
                <Td border="1px solid #ccc">{row.feedRate}</Td>
                <Td border="1px solid #ccc">{row.jettingPressure}</Td>
                <Td border="1px solid #ccc">{row.flowRate}</Td>
                <Td border="1px solid #ccc">{row.airFlow}</Td>
                <Td border="1px solid #ccc">{row.airPressure}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
       {/* Load & Save Buttons */}
      <Flex justifyContent="flex-end" mt={4} gap={2}>
        <Button colorScheme="blue" onClick={handleLoad}>
          Load
        </Button>
        <Button colorScheme="green" onClick={handleSave}>
          Save
        </Button>
      </Flex>
    </Box>
  );
};

export default OperationalMonitoringLog;


// export default OperationalMonitoringLog;
