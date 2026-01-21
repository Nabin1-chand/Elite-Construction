import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  Text,
  Flex
} from "@chakra-ui/react";
import Header from "../Header";
import Sidebar from "../sidebar";

const DrillingLog = () => {
  const data = [
    {
      id: 1,
      lengthFrom: 0,
      lengthTo: 1.5,
      elevationFrom: "101.665",
      elevationTo: "100.165",
      start: "HH:MM",
      finish: "HH:MM",
      soil: "Soft clay",
    },
    {
      id: 2,
      lengthFrom: 1.5,
      lengthTo: 3.5,
      elevationFrom: "100.165",
      elevationTo: "98.165",
      start: "HH:MM",
      finish: "HH:MM",
      soil: "Soft clay",
    },
    {
      id: 3,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
      soil: "Soft clay",
    },
  ];

  return (
    
            <Flex direction="column" minH="100vh" w="100vw">
              <Header />
        
              <Flex flex="1">
                <Sidebar />
    <Box bg="white" p={5} borderRadius="lg" boxShadow="md" overflowX="auto">
      <Table size="sm">
        <Thead bg="gray.900">
          <Tr>
            <Th color="white">ID</Th>
            <Th color="white">LENGTH (M)</Th>
            <Th color="white">ELEVATION (EL)</Th>
            <Th color="white">START</Th>
            <Th color="white">FINISH</Th>
            <Th color="white">SOIL LAYER</Th>
            <Th color="white">EVIDENCE</Th>
            <Th color="white">REMARKS</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              <Td>{row.id}</Td>

              <Td>
                {row.lengthFrom} – {row.lengthTo}
              </Td>

              <Td>
                <Text color="red.500" fontWeight="bold">
                  {row.elevationFrom}
                </Text>
                <Text color="red.500" fontWeight="bold">
                  {row.elevationTo}
                </Text>
              </Td>

              <Td>{row.start}</Td>
              <Td>{row.finish}</Td>
              <Td>{row.soil}</Td>

              <Td>
                <Button
                  size="sm"
                  colorScheme="blue"
                  borderRadius="md"
                >
                  CAPTURE
                </Button>
              </Td>

              <Td>
                <Input size="sm" placeholder="" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
    </Flex>
</Flex>
  );
};

export default DrillingLog;
