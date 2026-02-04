import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  SimpleGrid,
  Divider,
  Center,
  Image,
  Stack,
  Input,
  Button,
  Heading
} from "@chakra-ui/react";
import React, { useState, useRef } from 'react';
const DailySiteReport = () => {
  // Border style to match the physical form
const reportRef = useRef();

  // State for Filters
const [startDate, setStartDate] = useState("2024-09-10");
  const [endDate, setEndDate] = useState("2024-09-10");

  // Print Logic
  const handlePrint = () => {
    window.print();
  };
  const reportData = [
    {
      item: 1,
      colNo: "B-01",
      machine: "MC-1",
      dFrom: 0.0,
      dTo: 18.5,
      gFrom: 8.5,
      gTo: 18.5,
      sTime: "08:00",
      fTime: "09:30",
      cement: 1200,
      water: 800,
    },
    {
      item: 2,
      colNo: "B-02",
      machine: "MC-1",
      dFrom: 0.0,
      dTo: 18.5,
      gFrom: 8.5,
      gTo: 18.5,
      sTime: "10:00",
      fTime: "11:30",
      cement: 1200,
      water: 800,
    },
    {
      item: 3,
      colNo: "B-03",
      machine: "MC-1",
      dFrom: 0.0,
      dTo: 15.0,
      gFrom: 5.0,
      gTo: 15.0,
      sTime: "13:00",
      fTime: "14:15",
      cement: 1100,
      water: 750,
    },
    {
      item: 4,
      colNo: "B-04",
      machine: "MC-1",
      dFrom: 0.0,
      dTo: 15.0,
      gFrom: 5.0,
      gTo: 15.0,
      sTime: "14:45",
      fTime: "16:00",
      cement: 1100,
      water: 750,
    },
    {
      item: 5,
      colNo: "B-05",
      machine: "MC-1",
      dFrom: 0.0,
      dTo: 18.5,
      gFrom: 8.5,
      gTo: 18.5,
      sTime: "16:30",
      fTime: "18:00",
      cement: 1250,
      water: 820,
    },
  ];
  const borderStyle = "1px solid black";

  return (
   <Box p={5}>
      {/* --- SECTION 1: UI CONTROLS (Hidden on Print) --- */}
      <Box 
        mb={10} 
        p={5} 
        bg="gray.50" 
        borderRadius="md" 
        boxShadow="sm"
        sx={{ "@media print": { display: "none" } }}
      >
        <Heading size="md" mb={4}>Report Dashboard</Heading>
 <Flex 
  gap={6} 
  align="flex-end" 
  justify="space-between" // Pushes children to opposite ends
  mb={6}
  sx={{ "@media print": { display: "none" } }}
>
  {/* Left Side: Date Inputs */}
  <Flex gap={4}>
    <Box>
      <Text fontSize="sm" fontWeight="bold">From:</Text>
      <Input 
        type="date" 
        bg="white" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
      />
    </Box>
    <Box>
      <Text fontSize="sm" fontWeight="bold">To:</Text>
      <Input 
        type="date" 
        bg="white" 
        value={endDate} 
        onChange={(e) => setEndDate(e.target.value)} 
      />
    </Box>
  </Flex>

  {/* Right Side: Print Button */}
  <Button 
    colorScheme="teal" 
    onClick={handlePrint}
    px={8} // Adding some horizontal padding for a better look
  >
    Print
  </Button>
</Flex>
   
      </Box>

      {/* --- SECTION 2: PRINTABLE REPORT AREA --- */}
      <Box 
        id="printable-report"
        sx={{ 
          "@media print": { 
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            margin: "0",
            padding: "10px",
            // This ensures the background colors (like gray.50) show up in print
            WebkitPrintColorAdjust: "exact" 
          } 
        }}
      >
        <Box border={borderStyle} bg="white">
          {/* Header */}
          <Flex borderBottom={borderStyle}>
            <Box p={2} borderRight={borderStyle} w="20%">
              <Center h="full"><Text fontWeight="bold">LOGO</Text></Center>
            </Box>
            <Box p={2} flex="1">
              <Center h="full">
                <Text fontSize="xl" fontWeight="bold">Daily Report of Jet Grouting</Text>
              </Center>
            </Box>
          </Flex>

          {/* Metadata */}
          <SimpleGrid columns={4} fontSize="xs" borderBottom={borderStyle}>
            <Box p={1} borderRight={borderStyle}><strong>Project:</strong> METRO Line</Box>
            <Box p={1} borderRight={borderStyle}><strong>Date:</strong> {startDate} to {endDate}</Box>
            <Box p={1} borderRight={borderStyle}><strong>Shift:</strong> Day</Box>
            <Box p={1}><strong>No:</strong> 1</Box>
          </SimpleGrid>

      <TableContainer>
        <Table
          variant="unstyled"
          border={borderStyle}
          size="sm"
          sx={{ borderCollapse: "collapse" }}
        >
          <Thead borderBottom={borderStyle} bg="gray.50">
            <Tr fontSize="10px">
              <Th borderRight={borderStyle} rowSpan={2} textAlign="center">
                Item
              </Th>
              <Th borderRight={borderStyle} rowSpan={2} textAlign="center">
                Col No.
              </Th>
              <Th borderRight={borderStyle} rowSpan={2} textAlign="center">
                Diameter(m)
              </Th>
              <Th borderRight={borderStyle} rowSpan={2} textAlign="center">
                Machine
              </Th>

              {/* Drilling Length Columns */}
              <Th
                borderRight={borderStyle}
                rowSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Drilling Length (m)
              </Th>
              <Th borderRight={borderStyle} rowSpan={2} textAlign="center">
                angle(')
              </Th>

              {/* Grouting Length Columns */}
              <Th
                borderRight={borderStyle}
                colSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Drilling Time (m)
              </Th>
              <Th
                borderRight={borderStyle}
                colSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Grouting Level (m)
              </Th>

              <Th
                borderRight={borderStyle}
                rowSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Grouting Length(m)
              </Th>
              <Th
                borderRight={borderStyle}
                rowSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              ></Th>
              <Th
                borderRight={borderStyle}
                colSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Grouting Time(m)
              </Th>

              <Th
                borderRight={borderStyle}
                colSpan={4}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Proportion of Materials
              </Th>
              <Th
                borderRight={borderStyle}
                rowSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Pressure(par)
              </Th>
              <Th
                borderRight={borderStyle}
                rowSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Flow Rate(mm)
              </Th>
              <Th
                borderRight={borderStyle}
                rowSpan={2}
                textAlign="center"
                borderBottom={borderStyle}
              >
                Grouting(l)
              </Th>

              <Th p={1} rowSpan={2} textAlign="center">
                Remarks
              </Th>
            </Tr>
            <Tr fontSize="10px" borderBottom={borderStyle}>
              <Th borderRight={borderStyle} textAlign="center">
                From
              </Th>
              <Th borderRight={borderStyle} textAlign="center">
                To
              </Th>
              <Th borderRight={borderStyle} textAlign="center">
                From
              </Th>
              <Th borderRight={borderStyle} textAlign="center">
                To
              </Th>
              <Th borderRight={borderStyle} textAlign="center">
                Start
              </Th>
              <Th borderRight={borderStyle} textAlign="center">
                Finish
              </Th>
              <Th borderRight={borderStyle} textAlign="center">
                Cem (kg)
              </Th>
              <Th borderRight={borderStyle} textAlign="center">
                Bio (kg)
              </Th>

              <Th borderRight={borderStyle} textAlign="center">
                Wat (kg)
              </Th>
              <Th borderRight={borderStyle} textAlign="center">
                TI (m)
              </Th>
            </Tr>
          </Thead>

          <Tbody fontSize="11px">
            {reportData.map((row) => (
              <Tr key={row.item} borderBottom={borderStyle} height="30px">
                <Td borderRight={borderStyle} textAlign="center">
                  {row.item}
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  {row.colNo}
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  {row.machine}
                </Td>

                {/* Drilling */}
                <Td borderRight={borderStyle} textAlign="center">
                  {row.dFrom.toFixed(1)}
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  {row.dTo.toFixed(1)}
                </Td>

                {/* Grouting */}
                <Td borderRight={borderStyle} textAlign="center">
                  {row.gFrom.toFixed(1)}
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  {row.gTo.toFixed(1)}
                </Td>

                {/* Time & Materials */}
                <Td borderRight={borderStyle} textAlign="center">
                  {row.sTime}
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  {row.fTime}
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  {row.cement}
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  {row.water}
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>

                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>

                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>
                <Td borderRight={borderStyle} textAlign="center">
                  -
                </Td>
              </Tr>
            ))}
            <Tr borderBottom={borderStyle} height="30px" fontWeight="bold">
              <Td borderRight={borderStyle} textAlign="left" pl={2}>
                Production
              </Td>
              <Td borderRight={borderStyle}></Td>

              <Td borderRight={borderStyle} textAlign="center">
                5 nos.
              </Td>
              <Td borderRight={borderStyle}></Td>

              <Td borderRight={borderStyle} textAlign="center">
                0
              </Td>
              <Td borderRight={borderStyle} textAlign="center" colSpan={10}>
                0.00
              </Td>
              <Td></Td>
            </Tr>
            <Tr borderBottom={borderStyle} height="30px" fontWeight="bold">
              <Td borderRight={borderStyle} textAlign="left" pl={2}>
                Accumulate
              </Td>
              <Td borderRight={borderStyle}></Td>

              <Td borderRight={borderStyle} textAlign="center">
                5 nos.
              </Td>
              <Td borderRight={borderStyle}></Td>

              <Td borderRight={borderStyle} textAlign="center">
                0
              </Td>

              <Td borderRight={borderStyle} textAlign="center" colSpan={10}>
                0.00
              </Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Box
        mt={8}
        maxH="200px" // height limit for scrolling
        overflowY="auto" // vertical scroll
        overflowX="auto" // horizontal scroll if table is wide
        border="1px solid black"
      >
        <Flex direction="row" borderTop="1px solid black" minW="800px" gap={4}>
          {/* 1. LEFT TABLE: Equipment / Plant Status */}
          <Box flex="1" borderRight={borderStyle}>
            <Box
              bg="gray.50"
              borderBottom={borderStyle}
              p={1}
              textAlign="center"
            >
              <Text fontSize="xs" fontWeight="bold">
                Plant / Equipment (Daily / Accumulative)
              </Text>
            </Box>
            <Table
              variant="unstyled"
              border={borderStyle}
              size="sm"
              sx={{ borderCollapse: "collapse" }}
            >
              <Tbody>
                <Tr
                  borderBottom={borderStyle}
                  fontSize="12px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  <Td borderRight={borderStyle}>Drilling Machine</Td>
                  <Td borderRight={borderStyle}>Drillign Pump</Td>
                  <Td borderRight={borderStyle}>Grouting Machine</Td>
                  <Td borderRight={borderStyle}>Grouting Pump</Td>
                  <Td borderRight={borderStyle}>Flowmeter</Td>
                  <Td borderRight={borderStyle}>Flowmeter</Td>
                  <Td borderRight={borderStyle}>AirCompressor</Td>
                  <Td borderRight={borderStyle}>AirCompressor</Td>

                  <Td borderRight={borderStyle}>Cement</Td>
                  <Td borderRight={borderStyle}>Exavactor</Td>
                  <Td borderRight={borderStyle}>Mobile Crane</Td>
                  <Td borderTop="0px"></Td>
                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td textAlign="center">1</Td>
                  <Td
                    borderRight={borderStyle}
                    borderLeft={borderStyle}
                    textAlign="center"
                  >
                    Daily
                  </Td>
                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td textAlign="center">1</Td>
                  <Td
                    borderRight={borderStyle}
                    borderLeft={borderStyle}
                    textAlign="center"
                  >
                    Acc.
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          {/* // second */}
          <Box flex="1" borderRight={borderStyle}>
            <Box
              bg="gray.50"
              borderBottom={borderStyle}
              p={1}
              textAlign="center"
            >
              <Text fontSize="xs" fontWeight="bold">
                Material(Daily / Accumulative)
              </Text>
            </Box>
            <Table
              variant="unstyled"
              border={borderStyle}
              size="sm"
              sx={{ borderCollapse: "collapse" }}
            >
              <Tbody>
                <Tr
                  borderBottom={borderStyle}
                  fontSize="12px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  <Td borderRight={borderStyle}>Item</Td>
                  <Td borderRight={borderStyle}>Delivery</Td>
                  <Td borderRight={borderStyle}>Accumulate</Td>
                  <Td borderRight={borderStyle}>Daily Consumed</Td>
                  <Td borderRight={borderStyle}>Remaning</Td>
                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">
                    Cement(kg)
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">
                    Biri(kg)
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Box flex="1" borderRight={borderStyle}>
            <Box
              bg="gray.50"
              borderBottom={borderStyle}
              p={1}
              textAlign="center"
            >
              <Text fontSize="xs" fontWeight="bold">
                Manpower(Daily / Accumulative)
              </Text>
            </Box>
            <Table
              variant="unstyled"
              border={borderStyle}
              size="sm"
              sx={{ borderCollapse: "collapse" }}
            >
              <Tbody>
                <Tr
                  borderBottom={borderStyle}
                  fontSize="12px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  <Td borderRight={borderStyle}>Enginner</Td>
                  <Td borderRight={borderStyle}>Supervisor</Td>
                  <Td borderRight={borderStyle}>Operator</Td>
                  <Td borderRight={borderStyle}>Worker</Td>
                  <Td borderRight={borderStyle}>Sub Total</Td>
                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td textAlign="center">1</Td>
                  <Td
                    borderRight={borderStyle}
                    borderLeft={borderStyle}
                    textAlign="center"
                  >
                    Daily
                  </Td>
                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    1
                  </Td>
                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td borderRight={borderStyle} textAlign="center">
                    0
                  </Td>

                  <Td textAlign="center">1</Td>
                  <Td
                    borderRight={borderStyle}
                    borderLeft={borderStyle}
                    textAlign="center"
                  >
                    Acc.
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
          {/* 3. RIGHT TABLE: Manpower Status */}
        </Flex>
      </Box>

      {/* 4. Equipment & Material Summary */}
      <Flex borderBottom={borderStyle} mt={10}>
        <Box flex="1" borderRight={borderStyle} p={2}>
          <Text fontSize="xs" fontWeight="bold" mb={1}>
            Equipment Status:
          </Text>
          <SimpleGrid columns={3} fontSize="9px">
            <Text>Drill Rig: Active</Text>
            <Text>Grout Pump: Active</Text>
            <Text>Mixer: Active</Text>
          </SimpleGrid>
        </Box>
        <Box flex="1" p={2}>
          <Text fontSize="xs" fontWeight="bold" mb={1}>
            Material Consumption:
          </Text>
          <SimpleGrid columns={2} fontSize="9px">
            <Text>Total Cement: 4500 kg</Text>
            <Text>Total Water: 3200 L</Text>
          </SimpleGrid>
        </Box>
      </Flex>

      {/* 5. Signature Section */}
      <SimpleGrid columns={3} p={4} textAlign="center" height="100px">
        <Flex direction="column" justify="flex-end">
          <Divider borderColor="black" />
          <Text fontSize="xs" mt={1}>
            Recorded By: [Site Engineer]
          </Text>
        </Flex>
        <Flex direction="column" justify="flex-end" px={4}>
          <Divider borderColor="black" />
          <Text fontSize="xs" mt={1}>
            Checked By: [QA/QC]
          </Text>
        </Flex>
        <Flex direction="column" justify="flex-end">
          <Divider borderColor="black" />
          <Text fontSize="xs" mt={1}>
            Inspected By: [Consultant]
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
    </Box>
    </Box>
  );
};

export default DailySiteReport;
