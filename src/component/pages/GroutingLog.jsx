import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Flex
} from "@chakra-ui/react";
import Header from "../Header";
import Sidebar from "../sidebar";

const GroutingLog = () => {
   const rows = [
    "B48", "B71", "B47", "B83", "B25", "B70",
    "B27", "B60", "B24", "B32", "B26", "B59",
    "B02", "B50", "B75", "B04",
  ];

  const cellBorder = "1px solid #CBD5E0";

  return (
       <Flex direction="column" minH="100vh" w="100vw">
          <Header />
          <Flex flex="1">
            <Sidebar />
    <Box bg="white" p={4} borderRadius="lg" boxShadow="md" overflowX="auto">
      <Text fontWeight="bold" mb={3}>
        Data Base
      </Text>

      <Table variant="unstyled" size="sm" border={cellBorder}>
        <Thead bg="gray.100">
          {/* Top Header */}
          <Tr>
            <Th border={cellBorder} rowSpan={2}>
              Hole No.
            </Th>
            <Th border={cellBorder} colSpan={2} textAlign="center">
              Grouting Machine
            </Th>
            <Th border={cellBorder} colSpan={2} textAlign="center">
              Grouting Pump
            </Th>
            <Th border={cellBorder} colSpan={2} textAlign="center">
              Airflow Cell
            </Th>
          </Tr>

          {/* Sub Header */}
          <Tr>
            <Th border={cellBorder}>Jetting Speed (rpm)</Th>
            <Th border={cellBorder}>Feed Rate (mm/min)</Th>
            <Th border={cellBorder}>Jetting Pressure (kN)</Th>
            <Th border={cellBorder}>Flow Rate (ltr/min)</Th>
            <Th border={cellBorder}>Air Flow (mm/min)</Th>
            <Th border={cellBorder}>Air Pressure (kN)</Th>
          </Tr>
        </Thead>

        <Tbody>
          {rows.map((hole) => (
            <Tr key={hole}>
              <Td border={cellBorder} fontWeight="bold">
                {hole}
              </Td>
              <Td border={cellBorder}>5</Td>
              <Td border={cellBorder}>16</Td>
              <Td border={cellBorder}>330</Td>
              <Td border={cellBorder}>360</Td>
              <Td border={cellBorder}>12 to 14</Td>
              <Td border={cellBorder}>10 to 12</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
    </Flex>
    </Flex>
  );
};

export default GroutingLog;
