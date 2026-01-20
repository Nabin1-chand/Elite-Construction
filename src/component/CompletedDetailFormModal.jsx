import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Grid,
} from "@chakra-ui/react";

/* Shared styles */
const cell = {
  border: "1px solid",
  borderColor: "gray.500",
  fontSize: "12px",
  textAlign: "center",
  padding: "4px",
};

const header = {
  ...cell,
  fontWeight: "600",
  bg: "gray.100",
};

const CompletedDetailFormModal = () => {
  return (
    <Box border="1px solid" borderColor="gray.600" p={3}>

      {/* TITLE */}
      <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={2}>
        Daily Jetting Log
      </Text>

      {/* TOP DETAILS */}
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mb={3}>
        <Box>
          <Text fontSize="11px">Date</Text>
          <Text fontSize="12px" fontWeight="600">9/9/2025</Text>
        </Box>
        <Box>
          <Text fontSize="11px">Hole No.</Text>
          <Text fontSize="12px" fontWeight="600">B85</Text>
        </Box>
        <Box>
          <Text fontSize="11px">Diameter</Text>
          <Text fontSize="12px" fontWeight="600">2.8</Text>
        </Box>
        <Box>
          <Text fontSize="11px">Status</Text>
          <Text fontSize="12px" fontWeight="600" color="green.600">
            Complete
          </Text>
        </Box>
      </Grid>

      <Divider mb={3} />

      {/* MAIN JETTING TABLE */}
      <Table size="sm" border="1px solid" borderColor="gray.500">
        <Thead>
          <Tr>
            <Th {...header} rowSpan={2}>Grouting Time</Th>
            <Th {...header} rowSpan={2}>Jetting Speed<br />(rpm)</Th>
            <Th {...header} rowSpan={2}>Lift Rate<br />(mm/m)</Th>
            <Th {...header} colSpan={2}>Grouting Level</Th>
            <Th {...header} rowSpan={2}>Length of Jetting<br />(m)</Th>
            <Th {...header} rowSpan={2}>Jetting Pressure<br />(kN)</Th>
            <Th {...header} rowSpan={2}>Flow Rate<br />(Ltr/min)</Th>
            <Th {...header} rowSpan={2}>Jetting Volume<br />(Ltr)</Th>
          </Tr>
          <Tr>
            <Th {...header}>From</Th>
            <Th {...header}>To</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td {...cell}>11:03 – 14:05</Td>
            <Td {...cell}>5</Td>
            <Td {...cell}>16</Td>
            <Td {...cell}>44.85</Td>
            <Td {...cell}>35.65</Td>
            <Td {...cell}>10.8</Td>
            <Td {...cell}>330</Td>
            <Td {...cell}>360</Td>
            <Td {...cell}>4665</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={3} />

      {/* AIR FLOW CONTROL */}
      <Text fontWeight="600" mb={1}>Air Flow Control</Text>
      <Table size="sm" border="1px solid" borderColor="gray.500" mb={3}>
        <Thead>
          <Tr>
            <Th {...header}>Air Flow (m³/min)</Th>
            <Th {...header}>Air Pressure (kN)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td {...cell}>12</Td>
            <Td {...cell}>12</Td>
          </Tr>
        </Tbody>
      </Table>

      {/* MATERIAL PROPORTION */}
      <Text fontWeight="600" mb={1}>Proportion of Materials</Text>
      <Table size="sm" border="1px solid" borderColor="gray.500">
        <Thead>
          <Tr>
            <Th {...header}>Cement (kg)</Th>
            <Th {...header}>Bentonite (kg)</Th>
            <Th {...header}>Water (kg)</Th>
            <Th {...header}>Total (Ltr)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td {...cell}>650</Td>
            <Td {...cell}>793</Td>
            <Td {...cell}>—</Td>
            <Td {...cell}>1000</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={3} />

      {/* PRODUCTION SUMMARY */}
      <Table size="sm" border="1px solid" borderColor="gray.500">
        <Tbody>
          <Tr>
            <Th {...header}>Grouting Length Today</Th>
            <Td {...cell}>10.8</Td>
          </Tr>
          <Tr>
            <Th {...header}>Accumulated Grouting Length</Th>
            <Td {...cell}>216</Td>
          </Tr>
          <Tr>
            <Th {...header}>Daily Production</Th>
            <Td {...cell}>20</Td>
          </Tr>
          <Tr>
            <Th {...header}>Accumulate Production</Th>
            <Td {...cell}>—</Td>
          </Tr>
        </Tbody>
      </Table>

    </Box>
  );
};

export default CompletedDetailFormModal;
