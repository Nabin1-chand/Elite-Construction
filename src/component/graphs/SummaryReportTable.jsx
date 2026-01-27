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
} from '@chakra-ui/react';

const SummaryReportTable = () => {
  const headerStyle = {
    textAlign: "center",
    bg: "gray.50",
    fontSize: "xs",
    p: 2,
    border: "1px solid",
    borderColor: "gray.400",
    textTransform: "capitalize",
    fontWeight: "bold"
  };

  const cellStyle = {
    textAlign: "center",
    fontSize: "xs",
    p: 2,
    border: "1px solid",
    borderColor: "gray.400",
  };

  const tableData = [
    { no: 1, hole: "B71", ds: "06/08/2025", df: "06/08/2025", gs: "07/08/2025", gf: "07/08/2025" },
    { no: 2, hole: "B48", ds: "08/08/2025", df: "09/08/2025", gs: "11/08/2025", gf: "11/08/2025" },
    { no: 4, hole: "B02", ds: "27/08/2025", df: "28/08/2025", gs: "28/08/2025", gf: "28/08/2025" },
    { no: 5, hole: "B09", ds: "30/08/2025", df: "31/08/2025", gs: "31/08/2025", gf: "31/08/2025" },
    { no: 5, hole: "B09", ds: "30/08/2025", df: "31/08/2025", gs: "31/08/2025", gf: "31/08/2025" },

    { no: 6, hole: "B09", ds: "30/08/2025", df: "31/08/2025", gs: "31/08/2025", gf: "31/08/2025" },

    { no: 7, hole: "B09", ds: "30/08/2025", df: "31/08/2025", gs: "31/08/2025", gf: "31/08/2025" },
    { no: 8, hole: "B09", ds: "30/08/2025", df: "31/08/2025", gs: "31/08/2025", gf: "31/08/2025" },

  ];

  return (
    <Box p={6} maxW="1000px" mx="auto">
      {/* SUMMARY STATS SECTION */}
      <Flex justify="space-between" align="flex-end" mb={4} fontSize="sm">
        <Box fontWeight="bold">
          <Text>Done today: 2</Text>
          <Text>Total: 20/92</Text>
          <Flex align="center" mt={1}>
            <Text mr={2}>Grouting complete:</Text>
            <Box border="1px solid black" px={2} py={0.5} color="red.500">
              21.74%
            </Box>
          </Flex>
        </Box>
        <Text fontWeight="bold">Date: 05/09/2025</Text>
      </Flex>

      {/* THE TABLE */}
      <TableContainer>
        <Table variant="unstyled" border="1px solid" borderColor="gray.400">
          <Thead>
            <Tr>
              <Th {...headerStyle} rowSpan={2}>No.</Th>
              <Th {...headerStyle} rowSpan={2}>Hole No.</Th>
              <Th {...headerStyle} colSpan={2}>Drilling</Th>
              <Th {...headerStyle} colSpan={2}>Grouting</Th>
            </Tr>
            <Tr>
              <Th {...headerStyle}>Start Date</Th>
              <Th {...headerStyle}>Finish Date</Th>
              <Th {...headerStyle}>Start Date</Th>
              <Th {...headerStyle}>Finish Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((row) => (
              <Tr key={row.no}>
                <Td {...cellStyle}>{row.no}</Td>
                <Td {...cellStyle} fontWeight="bold">{row.hole}</Td>
                <Td {...cellStyle}>{row.ds}</Td>
                <Td {...cellStyle}>{row.df}</Td>
                <Td {...cellStyle}>{row.gs}</Td>
                <Td {...cellStyle}>{row.gf}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SummaryReportTable;