import { useState } from "react";
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
  Flex,
  Input,
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
  const [date, setDate] = useState("");
  const [rows, setRows] = useState([]);
  const holes = Array.from({ length: 90 }, (_, i) => `B${i + 1}`);
  const [selectedHole, setSelectedHole] = useState("B11");


  const handleLoad = () => {
  // prevent duplicate hole rows
  const exists = rows.find(r => r.hole === selectedHole);
  if (exists) return;

  setRows(prev => [
    ...prev,
    {
      hole: selectedHole,
      diameter: "2.8",
      timeFrom: "",
      timeTo: "",
      levelFrom: "",
      levelTo: "",
      sludge: "Continuous",
      status: "Not Started",
      remark: ""
    }
  ]);
};

  return (
    <Box border="1px solid" borderColor="gray.600" p={3} bg="white">
      {/* TITLE */}
      <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={2}>
        Daily Grouting Log
      </Text>

      {/* TOP DETAILS */}
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mb={3}>
        <Box>
          <Box>
            <Text fontSize="14px">Date</Text>
            <Input
              size="xs"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Box>
        </Box>
        <Box ml={10}>
          <Text fontSize="14px">Hole No.</Text>
          <Select
            size="xs"
            variant="unstyled"
            w="60px"
            minW="60px"
            textAlign="center"
            value={selectedHole}
            onChange={(e) => setSelectedHole(e.target.value)}
          >
            {holes.map((hole) => (
              <option p={4} key={hole} value={hole}>
                {hole}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Button size="sm" colorScheme="blue" onClick={handleLoad}>
            Load
          </Button>
        </Box>
        <Box>
          <Button size="sm" colorScheme="green">
            Save
          </Button>
        </Box>
      </Grid>

      <Divider mb={3} />

      {/* MAIN TABLE */}
      <Box overflowX="auto">
        <Table
          size="sm"
          width="100%"
          tableLayout="fixed"
          border="1px solid"
          borderColor="gray.500"
        >
          <Thead>
            <Tr>
              <Th {...header} rowSpan={2}>
                Hole No
              </Th>
              <Th {...header} rowSpan={2}>
                Diameter
              </Th>
              <Th {...header} colSpan={2}>
                Grouting Time
              </Th>
              <Th {...header} rowSpan={2}>
                Jetting Speed
                <br />
                (rpm)
              </Th>
              <Th {...header} rowSpan={2}>
                Lift Rate
                <br />
                (min/m)
              </Th>
              <Th {...header} colSpan={2}>
                Grouting Level
              </Th>
              <Th {...header} rowSpan={2}>
                Length of Jetting
                <br />
                (m)
              </Th>
              <Th {...header} rowSpan={2}>
                Jetting Pressure
                <br />
                (kN)
              </Th>
              <Th {...header} rowSpan={2}>
                Flow Rate
                <br />
                (Ltr/min)
              </Th>
              <Th {...header} rowSpan={2}>
                Cement
                <br />
              </Th>

              <Th {...header} rowSpan={2}>
                Jetting Volume
                <br />
                (Ltr)
              </Th>
              <Th {...header} rowSpan={2}>
                Sludge Discharge
              </Th>
              <Th {...header} rowSpan={2}>
                Status
              </Th>
              <Th {...header} rowSpan={2}>
                Remark
              </Th>
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
  {rows.map((row, index) => (
    <Tr key={index}>
      <Td {...cell}>{row.hole}</Td>
      <Td {...cell}>{row.diameter}</Td>

      <Td {...cell}>
        <Input size="sm" type="time" />
      </Td>
      <Td {...cell}>
        <Input size="sm" type="time" />
      </Td>

      <Td {...cell}>5</Td>
      <Td {...cell}>16</Td>

      <Td {...cell}>
        <Input size="sm" />
      </Td>
      <Td {...cell}>
        <Input size="sm" />
      </Td>

      <Td {...cell}>10.8</Td>
      <Td {...cell}>330</Td>
      <Td {...cell}>360</Td>
      <Td {...cell}>460</Td>

      <Td {...cell}>4665</Td>

      <Td {...cell}>
        <Select size="xs"
        width="110px"
        >
          <option>Continuous</option>
          <option>Discontinuous</option>
        </Select>
      </Td>

      <Td {...cell}>
        <Select size="xs"
        width="110px"
        >
          <option>Completed</option>
          <option>InProgress</option>
          <option>Not Started</option>
        </Select>
      </Td>

      <Td {...cell}>
        <Input size="sm" />
      </Td>
    </Tr>
  ))}
</Tbody>
        </Table>
      </Box>

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
          <Text fontWeight="600" mb={1}>
            Air Vulve Control
          </Text>
          <Table size="sm" border="1px solid" borderColor="gray.500">
            <Thead>
              <Tr>
                <Th {...header}>Air Flow (m3/min)</Th>
                <Td {...cell}>12</Td>
              </Tr>
              <Tr>
                <Th {...header}>Air Pressure (KN)</Th>
                <Td {...cell}>12</Td>
              </Tr>
            </Thead>
          </Table>
        </Box>

        {/* Table 3: Electrical Supply */}
        <Box flex="1">
          <Text fontWeight="600" mb={1}>
            Proportion of Materials
          </Text>
          <Table size="sm" border="1px solid" borderColor="gray.500">
            <Thead>
              <Tr>
                <Th {...header}>Cement(Kg)</Th>
                <Th {...header}>Bentonite(Kg)</Th>
                <Th {...header}>Water(Ltr)</Th>
                <Th {...header}>Total(Ltr)</Th>
              </Tr>
              <Tr>
                <Td {...cell}>460</Td>
                <Td {...cell}>-</Td>

                <Td {...cell}>7.39</Td>
                <Td {...cell}>1000</Td>
              </Tr>
              <Th {...header} colSpan={2}>
                Specific Gravity(Ltr)
              </Th>
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
