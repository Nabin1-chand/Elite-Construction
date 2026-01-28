import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import Header from "../Header";
import Sidebar from "../sidebar";

const emptyRowTemplate = {
  date: "",
  holeNo: "",
  startTime: "",
  finishTime: "",
  machines: 1,
  length: 0,
};

export default function DailyDrillingSummaryLog() {
  const [rows, setRows] = useState([
    {
      date: "16/08/2025",
      holeNo: "B83",
      startTime: "08:30",
      finishTime: "11:30",
      machines: 1,
      length: 18,
    },
    {
      date: "16/08/2025",
      holeNo: "B25",
      startTime: "14:00",
      finishTime: "17:50",
      machines: 1,
      length: 43.5,
    },
  ]);

  const hasEmptyRow = () =>
    rows.some(
      (row) =>
        !row.date &&
        !row.holeNo &&
        !row.startTime &&
        !row.finishTime &&
        Number(row.length) === 0
    );

  const addEntry = () => {
    if (hasEmptyRow()) return;

    setRows([...rows, { ...emptyRowTemplate }]);
  };

  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const dailyTotal = rows.reduce(
    (sum, row) => sum + Number(row.length || 0),
    0
  );

  return (

    <Box p={6} bg="gray.50">
      <Box bg="white" p={6} rounded="md" shadow="md">
        <Heading size="md" textAlign="center" mb={6}>
          DAILY DRILLING SUMMARY LOG
        </Heading>

        {/* Controls */}
        <Flex gap={4} align="center" mb={4} flexWrap="wrap">
          <Text fontWeight="medium">Select Date:</Text>
          <Input type="date" maxW="200px" />
          <Button leftIcon={<SearchIcon />} colorScheme="blue">
            Load Data
          </Button>
          <Button>Save</Button>
        </Flex>

        {/* Add Entry */}
        <Button
          leftIcon={<AddIcon />}
          colorScheme="blue"
          size="sm"
          mb={3}
          onClick={addEntry}
          isDisabled={hasEmptyRow()}
        >
          Add Entry
        </Button>

        {/* Table */}
        <Table size="sm">
          <Thead bg="gray.100">
            <Tr>
              <Th>Date</Th>
              <Th>Hole No.</Th>
              <Th>Start Time</Th>
              <Th>Finish Time</Th>
              <Th>No. of Machines</Th>
              <Th isNumeric>Drilling Length (m)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, index) => (
              <Tr key={index}>
                <Td>
                  <Input
                    size="sm"
                    value={row.date}
                    onChange={(e) =>
                      updateRow(index, "date", e.target.value)
                    }
                  />
                </Td>

                <Td>
                  <Select
                    size="sm"
                    value={row.holeNo}
                    onChange={(e) =>
                      updateRow(index, "holeNo", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="B83">B83</option>
                    <option value="B25">B25</option>
                  </Select>
                </Td>

                <Td>
                  <Input
                    size="sm"
                    type="time"
                    value={row.startTime}
                    onChange={(e) =>
                      updateRow(index, "startTime", e.target.value)
                    }
                  />
                </Td>

                <Td>
                  <Input
                    size="sm"
                    type="time"
                    value={row.finishTime}
                    onChange={(e) =>
                      updateRow(index, "finishTime", e.target.value)
                    }
                  />
                </Td>

                <Td>
                  <Input
                    size="sm"
                    type="number"
                    value={row.machines}
                    onChange={(e) =>
                      updateRow(index, "machines", e.target.value)
                    }
                  />
                </Td>

                <Td isNumeric>
                  <Input
                    size="sm"
                    type="number"
                    value={row.length}
                    onChange={(e) =>
                      updateRow(index, "length", e.target.value)
                    }
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Summary */}
        <Flex
          mt={4}
          p={3}
          bg="gray.100"
          rounded="md"
          justify="space-between"
        >
          <Text fontWeight="medium">
            Daily Drilling Length (m): <b>{dailyTotal.toFixed(1)}</b>
          </Text>
          <Text fontWeight="medium">
            Accumulated Drilling Length (m): <b>273.5</b>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
