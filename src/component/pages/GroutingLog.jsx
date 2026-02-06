import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

const GroutingLog = () => {
  const rows = [
    "B48", "B71", "B47", "B83", "B25", "B70",
    "B27", "B60", "B24", "B32", "B26", "B59",
    "B02", "B50", "B75", "B04",
  ];

  const cellBorder = "1px solid #CBD5E0";

  // ------------------------
  // Bottom table initial values
  // ------------------------
  const initialTableData = {
    B48: { js: 5, fr: 16, jp: 330, flow: 360, airFlow: "12-14", airPressure: "10-12" },
    B71: { js: 6, fr: 18, jp: 340, flow: 380, airFlow: "11-13", airPressure: "9-11" },
    B47: { js: 5, fr: 15, jp: 320, flow: 350, airFlow: "12-13", airPressure: "10-11" },
    B83: { js: 4, fr: 14, jp: 310, flow: 340, airFlow: "10-12", airPressure: "9-10" },
    B25: { js: 5, fr: 16, jp: 330, flow: 360, airFlow: "12-14", airPressure: "10-12" },
    B70: { js: 6, fr: 18, jp: 340, flow: 380, airFlow: "11-13", airPressure: "9-11" },
    B27: { js: 5, fr: 15, jp: 320, flow: 350, airFlow: "12-13", airPressure: "10-11" },
    B60: { js: 4, fr: 14, jp: 310, flow: 340, airFlow: "10-12", airPressure: "9-10" },
    B24: { js: 5, fr: 16, jp: 330, flow: 360, airFlow: "12-14", airPressure: "10-12" },
    B32: { js: 6, fr: 18, jp: 340, flow: 380, airFlow: "11-13", airPressure: "9-11" },
    B26: { js: 5, fr: 15, jp: 320, flow: 350, airFlow: "12-13", airPressure: "10-11" },
    B59: { js: 4, fr: 14, jp: 310, flow: 340, airFlow: "10-12", airPressure: "9-10" },
    B02: { js: 5, fr: 16, jp: 330, flow: 360, airFlow: "12-14", airPressure: "10-12" },
    B50: { js: 6, fr: 18, jp: 340, flow: 380, airFlow: "11-13", airPressure: "9-11" },
    B75: { js: 5, fr: 15, jp: 320, flow: 350, airFlow: "12-13", airPressure: "10-11" },
    B04: { js: 4, fr: 14, jp: 310, flow: 340, airFlow: "10-12", airPressure: "9-10" },
  };

  const [tableData, setTableData] = useState(initialTableData);

  // ------------------------
  // Top table editor state
  // ------------------------
  const [selectedHole, setSelectedHole] = useState(rows[0]);
  const [editor, setEditor] = useState({
    js: tableData[rows[0]].js,
    fr: tableData[rows[0]].fr,
    jp: tableData[rows[0]].jp,
    flow: tableData[rows[0]].flow,
    airFlow: tableData[rows[0]].airFlow,
    airPressure: tableData[rows[0]].airPressure,
  });

  // ------------------------
  // Handle Load button
  // ------------------------
  const handleLoad = () => {
    setTableData((prev) => ({
      ...prev,
      [selectedHole]: { ...editor },
    }));
  };

  // ------------------------
  // Handle Hole selection change
  // ------------------------
  const handleHoleChange = (hole) => {
    setSelectedHole(hole);
    // Update editor values to match selected hole
    setEditor({ ...tableData[hole] });
  };

  return (
    <Box bg="white" p={4} borderRadius="lg" boxShadow="md" overflowX="auto">
      <Text fontWeight="bold" mb={3}>Grouting Log Editor</Text>

      {/* ================= TOP EDITABLE TABLE ================= */}
      <Box mb={4}>
        <Text>Hole No.</Text>
        <Select
          size="sm"
          value={selectedHole}
          onChange={(e) => handleHoleChange(e.target.value)}
          mb={2}
          w="100px"
        >
          {rows.map((hole) => (
            <option key={hole} value={hole}>{hole}</option>
          ))}
        </Select>

       

        <Table size="sm" variant="unstyled" border="1px solid #CBD5E0" mt={2}>
          <Thead bg="gray.100">
            <Tr>
              <Th border="1px solid #CBD5E0">Jetting Speed</Th>
              <Th border="1px solid #CBD5E0">Feed Rate</Th>
              <Th border="1px solid #CBD5E0">Jetting Pressure</Th>
              <Th border="1px solid #CBD5E0">Flow Rate</Th>
              <Th border="1px solid #CBD5E0">Air Flow</Th>
              <Th border="1px solid #CBD5E0">Air Pressure</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {Object.keys(editor).map((key) => (
                <Td key={key} border="1px solid #CBD5E0">
                  <Input
                    size="xs"
                    value={editor[key]}
                    onChange={(e) =>
                      setEditor({ ...editor, [key]: e.target.value })
                    }
                  />
                </Td>
              ))}
            </Tr>
          </Tbody>
        </Table>
         <Button mt="8" size="sm" colorScheme="blue" ml={4} onClick={handleLoad}>
          Load
        </Button>
      </Box>

      {/* ================= BOTTOM TABLE ================= */}
      <Table size="sm" variant="unstyled" border="1px solid #CBD5E0">
        <Thead bg="gray.100">
          <Tr>
            <Th border="1px solid #CBD5E0">Hole No.</Th>
            <Th border="1px solid #CBD5E0">Jetting Speed</Th>
            <Th border="1px solid #CBD5E0">Feed Rate</Th>
            <Th border="1px solid #CBD5E0">Jetting Pressure</Th>
            <Th border="1px solid #CBD5E0">Flow Rate</Th>
            <Th border="1px solid #CBD5E0">Air Flow</Th>
            <Th border="1px solid #CBD5E0">Air Pressure</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((hole) => (
            <Tr key={hole}>
              <Td border="1px solid #CBD5E0" fontWeight="bold">{hole}</Td>
              <Td border="1px solid #CBD5E0">{tableData[hole].js}</Td>
              <Td border="1px solid #CBD5E0">{tableData[hole].fr}</Td>
              <Td border="1px solid #CBD5E0">{tableData[hole].jp}</Td>
              <Td border="1px solid #CBD5E0">{tableData[hole].flow}</Td>
              <Td border="1px solid #CBD5E0">{tableData[hole].airFlow}</Td>
              <Td border="1px solid #CBD5E0">{tableData[hole].airPressure}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default GroutingLog;
