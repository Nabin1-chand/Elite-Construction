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
  Button,
  Select,
  Flex
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

const DailyGroutingLog = () => {
  return (
    <Box border="1px solid" borderColor="gray.600" p={3} bg="white">

      {/* TITLE */}
      <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={2}>
        Daily Grouting Log
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
          <Button size="sm" colorScheme="blue">Load</Button>
        </Box>
        <Box>
          <Button size="sm" colorScheme="green">Save</Button>
        </Box>
      </Grid>

      <Divider mb={3} />

      {/* MAIN TABLE */}
      <Table size="sm" border="1px solid" borderColor="gray.500">
        <Thead>
          <Tr>
            <Th {...header} rowSpan={2}>Hole No.</Th>
            <Th {...header} rowSpan={2}>Diameter</Th>
            <Th {...header} colSpan={2}>Grouting Time</Th>
            <Th {...header} rowSpan={2}>Jetting Speed<br />(rpm)</Th>
            <Th {...header} rowSpan={2}>Lift Rate<br />(min/m)</Th>
            <Th {...header} colSpan={2}>Grouting Level</Th>
            <Th {...header} rowSpan={2}>Length of Jetting<br />(m)</Th>
            <Th {...header} rowSpan={2}>Jetting Pressure<br />(kN)</Th>
            <Th {...header} rowSpan={2}>Flow Rate<br />(Ltr/min)</Th>
            <Th {...header} rowSpan={2}>Cement<br /></Th>

            <Th {...header} rowSpan={2}>Jetting Volume<br />(Ltr)</Th>
            <Th {...header} rowSpan={2}>Sludge Discharge</Th>
            <Th {...header} rowSpan={2}>Remarks</Th>
          </Tr>

          {/* SUB HEADERS */}
          <Tr>
            <Th {...header}>From</Th>
            <Th {...header}>To</Th>
            <Th {...header}>From</Th>
            <Th {...header}>To</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td {...cell}>B11</Td>
            <Td {...cell}>2.8</Td>

            {/* Grouting Time */}
            <Td {...cell}>11:03</Td>
            <Td {...cell}>14:05</Td>

            <Td {...cell}>5</Td>
            <Td {...cell}>16</Td>

            {/* Grouting Level */}
            <Td {...cell}>44.85</Td>
            <Td {...cell}>35.65</Td>

            <Td {...cell}>10.8</Td>
            <Td {...cell}>330</Td>
            <Td {...cell}>360</Td>
            <Td {...cell}>360</Td>

            <Td {...cell}>4665</Td>

            {/* Sludge Discharge Dropdown */}
            <Td {...cell}>
              <Select size="xs">
                <option>Continuous</option>
                <option>Discontinuous</option>
              </Select>
            </Td>

            <Td {...cell}>Completed</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={3} />

      {/* AIR FLOW CONTROL */}
    <Flex direction="row" align="flex-start" gap={4} wrap="wrap">
  
  {/* Table 1: Air Value Control */}
  <Box flex="1">
    <Table size="sm" border="1px solid" borderColor="gray.500">
      <Thead>
        <Tr>
          <Th {...header}>Grouting length today (m³/min)</Th>
          <Td {...cell}>10.8</Td>
        </Tr>
        <Tr>
          <Th {...header}>Accumulated Grouting length</Th>
          <Td {...cell}>216</Td>
        </Tr>
            <Tr>
          <Th {...header}>Daily Production</Th>
          <Td {...cell}>1</Td>
        </Tr>
            <Tr>
          <Th {...header}>Accumulated Production</Th>
          <Td {...cell}>216</Td>
        </Tr>
      </Thead>
    </Table>
  </Box>

  {/* Table 2: Temperature Limits */}
  <Box flex="1">
    <Text fontWeight="600" mb={1}>Air Vulve Control</Text>
    <Table size="sm" border="1px solid" borderColor="gray.500">
      <Thead>
        <Tr>
          <Th {...header}>Operating Temp (°C)</Th>
          <Td {...cell}>5 - 45</Td>
        </Tr>
        <Tr>
          <Th {...header}>Max Intake Temp (°C)</Th>
          <Td {...cell}>50</Td>
        </Tr>
      </Thead>
    </Table>
  </Box>

  {/* Table 3: Electrical Supply */}
  <Box flex="1">
    <Text fontWeight="600" mb={1}>Proportion of Materials</Text>
    <Table size="sm" border="1px solid" borderColor="gray.500">
      <Thead>
        <Tr>
          <Th {...header}>Cement(Kg)</Th>
          <Th {...header}>Bentonite(Kg)</Th>
          <Th {...header}>Water(Ltr)</Th>
          <Th {...header}>Total(Ltr)</Th>
          



        </Tr>
        <Tr>
          <Td {...cell}>60</Td>
          <Td {...cell}>60</Td>

          <Td {...cell}>60</Td>

        </Tr>
          <Th {...header}colSpan={2}>Specific Gravity(Ltr)</Th>
          <Td {...cell}>1.43</Td>


      </Thead>
    </Table>
  </Box>

</Flex>
      {/* MATERIAL PROPORTION */}
 

    </Box>
  );
};

export default DailyGroutingLog;
