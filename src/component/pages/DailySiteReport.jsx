import React from 'react';
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
  Image
} from "@chakra-ui/react";

const DailySiteReport = () => {
  // Border style to match the physical form
  const borderStyle = "1px solid black";

  return (
    <Box
      p={4}
      bg="white"
      color="black"
      fontFamily="'Times New Roman', serif"
      maxW="1200px"
      mx="auto"
      border={borderStyle}
    >
      {/* 1. Top Header Section */}
      <Flex borderBottom={borderStyle}>
        <Box p={2} borderRight={borderStyle} w="25%">
          <Center h="full">
            <Text fontWeight="bold">LOGO</Text>
          </Center>
        </Box>
        <Box p={2} flex="1">
          <Center h="full">
            <Text fontSize="xl" fontWeight="bold">Daily Report of Jet Grouting</Text>
          </Center>
        </Box>
      </Flex>

      {/* 2. Project Metadata */}
      <SimpleGrid columns={4} fontSize="xs" borderBottom={borderStyle}>
        <Box p={1} borderRight={borderStyle}><strong>Project:</strong> METRO Line South-North</Box>
        <Box p={1} borderRight={borderStyle}><strong>Date:</strong> 2024-09-10</Box>
        <Box p={1} borderRight={borderStyle}><strong>Shift:</strong> Day</Box>
        <Box p={1}><strong>No:</strong> 1</Box>
      </SimpleGrid>

      {/* 3. The Main Data Table */}
      <TableContainer>
        <Table variant="unstyled" border={borderStyle} size="sm" sx={{ borderCollapse: 'collapse' }}>
          <Thead borderBottom={borderStyle}>
            <Tr fontSize="10px">
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Item</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Column No. (m)</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Diameter(m.)</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">MachineNo.</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Drilling Length.</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Angle(")</Th>
              <Th borderRight={borderStyle} p={1} colSpan={2} textAlign="center">Drilling Time</Th>
              <Th borderRight={borderStyle} p={1} colSpan={2} textAlign="center">Grouting Level</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Grouting Length</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center"></Th>
              <Th borderRight={borderStyle} p={1} colSpan={2} textAlign="center">Grouting Time</Th>


              <Th borderRight={borderStyle} p={1} colSpan={3} textAlign="center">Proportion of Materials</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Pressure</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Flow Rate</Th>
              <Th borderRight={borderStyle} p={1} rowSpan={2} textAlign="center">Grouting Amount</Th>


              <Th p={1} rowSpan={2} textAlign="center">Remarks</Th>
            </Tr>
            <Tr fontSize="10px" borderBottom={borderStyle}>
              <Th borderRight={borderStyle} p={1}>From</Th>
              <Th borderRight={borderStyle} p={1}>To</Th>
              <Th borderRight={borderStyle} p={1}>From</Th>
              <Th borderRight={borderStyle} p={1}>To</Th>
              <Th borderRight={borderStyle} p={1}>From</Th>
              <Th borderRight={borderStyle} p={1}>To</Th>

              <Th borderRight={borderStyle} p={1}>Cement (kg)</Th>
              <Th borderRight={borderStyle} p={1}>Water (L)</Th>
              <Th borderRight={borderStyle} p={1}>Admix</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[...Array(5)].map((_, i) => (
              <Tr key={i} borderBottom={borderStyle} height="25px">
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>

                <Td borderRight={borderStyle}></Td>

                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>
                <Td borderRight={borderStyle}></Td>

                <Td></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Box
        mt={8}
        maxH="200px"      // height limit for scrolling
        overflowY="auto"  // vertical scroll
        overflowX="auto"  // horizontal scroll if table is wide
        border="1px solid black"
      >
        <Flex direction="row" borderTop="1px solid black" minW="800px" gap={4} >

          {/* 1. LEFT TABLE: Equipment / Plant Status */}
          <Box flex="1" borderRight={borderStyle}>
            <Box bg="gray.50" borderBottom={borderStyle} p={1} textAlign="center">
              <Text fontSize="xs" fontWeight="bold">Plant / Equipment (Daily / Accumulative)</Text>
            </Box>
            <Table variant="unstyled" border={borderStyle} size="sm" sx={{ borderCollapse: 'collapse' }}>
              <Tbody>
                <Tr borderBottom={borderStyle} fontSize="12px" fontWeight="bold" textAlign="center">
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



                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">0</Td>
                  <Td borderRight={borderStyle} textAlign="center">1</Td>
                  <Td borderRight={borderStyle} textAlign="center">0</Td>

                  <Td borderRight={borderStyle} textAlign="center">0</Td>
                  <Td borderRight={borderStyle} textAlign="center">0</Td>

                  <Td borderRight={borderStyle} textAlign="center">1</Td>
                  <Td borderRight={borderStyle} textAlign="center">0</Td>
                  <Td borderRight={borderStyle} textAlign="center">1</Td>
                  <Td borderRight={borderStyle} textAlign="center">1</Td>
                  <Td borderRight={borderStyle} textAlign="center">0</Td>



                  <Td textAlign="center">1</Td>
                </Tr>

              </Tbody>
            </Table>
          </Box>

          {/* // second */}
          <Box flex="1" borderRight={borderStyle}>
            <Box bg="gray.50" borderBottom={borderStyle} p={1} textAlign="center">
              <Text fontSize="xs" fontWeight="bold">Material(Daily / Accumulative)</Text>
            </Box>
            <Table variant="unstyled" border={borderStyle} size="sm" sx={{ borderCollapse: 'collapse' }}>
              <Tbody>
                <Tr borderBottom={borderStyle} fontSize="12px" fontWeight="bold" textAlign="center">
                  <Td borderRight={borderStyle}>Item</Td>
                  <Td borderRight={borderStyle}>Delivery</Td>
                  <Td borderRight={borderStyle}>Accumulate</Td>
                  <Td borderRight={borderStyle}>Daily Consumed</Td>
                  <Td borderRight={borderStyle}>Remaning</Td>



                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">0</Td>
                  <Td borderRight={borderStyle} textAlign="center">1</Td>
                  <Td borderRight={borderStyle} textAlign="center">0</Td>

                  <Td borderRight={borderStyle} textAlign="center">0</Td>
                  <Td borderRight={borderStyle} textAlign="center">0</Td>




                </Tr>

              </Tbody>
            </Table>
          </Box>

          <Box flex="1" borderRight={borderStyle}>
            <Box bg="gray.50" borderBottom={borderStyle} p={1} textAlign="center">
              <Text fontSize="xs" fontWeight="bold">Manpower(Daily / Accumulative)</Text>
            </Box>
            <Table variant="unstyled" border={borderStyle} size="sm" sx={{ borderCollapse: 'collapse' }}>
              <Tbody>
                <Tr borderBottom={borderStyle} fontSize="12px" fontWeight="bold" textAlign="center">
                  <Td borderRight={borderStyle}>Enginner</Td>
                  <Td borderRight={borderStyle}>Supervisor</Td>
                  <Td borderRight={borderStyle}>Operator</Td>
                  <Td borderRight={borderStyle}>Worker</Td>
                  <Td borderRight={borderStyle}>Sub Total</Td>
                  <Td borderRight={borderStyle}>Daily</Td>




                </Tr>
                <Tr borderBottom={borderStyle} height="20px">
                  <Td borderRight={borderStyle} textAlign="center">0</Td>
                  <Td borderRight={borderStyle} textAlign="center">1</Td>
                  <Td borderRight={borderStyle} textAlign="center">0</Td>

                  <Td borderRight={borderStyle} textAlign="center">0</Td>
                  <Td borderRight={borderStyle} textAlign="center">0</Td>


                  <Td borderRight={borderStyle} textAlign="center">0</Td>



                  <Td textAlign="center">1</Td>
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
          <Text fontSize="xs" fontWeight="bold" mb={1}>Equipment Status:</Text>
          <SimpleGrid columns={3} fontSize="9px">
            <Text>Drill Rig: Active</Text>
            <Text>Grout Pump: Active</Text>
            <Text>Mixer: Active</Text>
          </SimpleGrid>
        </Box>
        <Box flex="1" p={2}>
          <Text fontSize="xs" fontWeight="bold" mb={1}>Material Consumption:</Text>
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
          <Text fontSize="xs" mt={1}>Recorded By: [Site Engineer]</Text>
        </Flex>
        <Flex direction="column" justify="flex-end" px={4}>
          <Divider borderColor="black" />
          <Text fontSize="xs" mt={1}>Checked By: [QA/QC]</Text>
        </Flex>
        <Flex direction="column" justify="flex-end">
          <Divider borderColor="black" />
          <Text fontSize="xs" mt={1}>Inspected By: [Consultant]</Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default DailySiteReport;