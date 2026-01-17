import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Box,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

/* TEMP DATA (replace with API later) */
const mockRows = [
  {
    depth: "1.50",
    from: "-",
    to: "-",
    speed: 19,
    length: "1.50",
    volume: 417,
    cement: 205,
    pressure: 411,
  },
    {
    depth: "3.00",
    from: "-",
    to: "-",
    speed: 22,
    length: "1.50",
    volume: 408,
    cement: 272,
    pressure: 392,
  },
    {
    depth: "3.00",
    from: "-",
    to: "-",
    speed: 22,
    length: "1.50",
    volume: 408,
    cement: 272,
    pressure: 392,
  },
    {
    depth: "3.00",
    from: "-",
    to: "-",
    speed: 22,
    length: "1.50",
    volume: 408,
    cement: 272,
    pressure: 392,
  },
    {
    depth: "3.00",
    from: "-",
    to: "-",
    speed: 22,
    length: "1.50",
    volume: 408,
    cement: 272,
    pressure: 392,
  },
    {
    depth: "4.00",
    from: "-",
    to: "-",
    speed: 22,
    length: "1.50",
    volume: 488,
    cement: 272,
    pressure: 392,
  },
    {
    depth: "3.00",
    from: "-",
    to: "-",
    speed: 22,
    length: "1.50",
    volume: 408,
    cement: 272,
    pressure: 392,
  },
  {
    depth: "3.00",
    from: "-",
    to: "-",
    speed: 22,
    length: "1.50",
    volume: 408,
    cement: 272,
    pressure: 392,
  },
];

const HoleDetailModal = ({ isOpen, onClose, hole, status }) => {
  if (!hole) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hole {hole} Details</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={6}>
          {/* ================= TOP INFO ================= */}
          <Box mb={4}>
            <Text><strong>Project:</strong> MRTA Purple Line (South) Project Contract 3 Underground Civil Works</Text>
            <Text><strong>Shaft No:</strong> {hole}</Text>
            <Text><strong>Date:</strong> 2026-01-17</Text>
            <Text><strong>Diameter of Column:</strong> 1.20 m</Text>
            <Text><strong>Location:</strong> -</Text>
          </Box>

          <Divider my={4} />

          {/* ================= WORKING ================= */}
          <Text fontWeight="bold" mb={3} borderLeft="4px solid blue" pl={2}>
            WORKING
          </Text>

          <Box overflowX="auto" mb={6}>
            <Table border="2px solid #CBD5E0" size="sm" variant="simple">
              <Thead borderTop="2px solid #CBD5E0">
                <Tr borderBottom="2px solid #CBD5E0">
                  <Th borderRight="1px solid #CBD5E0">Hole No.</Th>
                  <Th borderRight="1px solid #CBD5E0">Depth Drilled (m)</Th>
                  <Th borderRight="1px solid #CBD5E0">From</Th>
                  <Th borderRight="1px solid #CBD5E0">To</Th>
                  <Th borderRight="1px solid #CBD5E0">Jetting Speed (rpm)</Th>
                  <Th borderRight="1px solid #CBD5E0">Length of Jetting (m)</Th>
                  <Th borderRight="1px solid #CBD5E0">Jetting Volume (ltr)</Th>
                  <Th borderRight="1px solid #CBD5E0">Cement Used (kg)</Th>
                  <Th borderRight="1px solid #CBD5E0">Jetting Pressure (kgf/cm²)</Th>
                  <Th borderRight="1px solid #CBD5E0">Mix Ratio</Th>
                  <Th borderLeft="1px solid #CBD5E0">Remark</Th>
                </Tr>
              </Thead>

              <Tbody>
                {/* IN PROGRESS → show data */}
                {status === "in-progress" &&
                  mockRows.map((row, i) => (
                    <Tr key={i} borderBottom="1px solid" borderColor="gray.200">
                      <Td borderRight="1px solid #CBD5E0">{hole}</Td>
                      <Td borderRight="1px solid #CBD5E0">{row.depth}</Td>
                      <Td borderRight="1px solid #CBD5E0">{row.from}</Td>
                      <Td borderRight="1px solid #CBD5E0">{row.to}</Td>
                      <Td borderRight="1px solid #CBD5E0">{row.speed}</Td>
                      <Td borderRight="1px solid #CBD5E0">{row.length}</Td>
                      <Td borderRight="1px solid #CBD5E0">{row.volume}</Td>
                      <Td borderRight="1px solid #CBD5E0">{row.cement}</Td>
                      <Td borderRight="1px solid #CBD5E0">{row.pressure}</Td>
                      <Td borderRight="1px solid #CBD5E0">1:1</Td>
                      <Td>-</Td>
                    </Tr>
                  ))}

                {/* NOT STARTED → empty state */}
                {status === "not-started" && (
                  <Tr>
                    <Td colSpan={11} textAlign="center" color="gray.500">
                      No working data recorded.
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </Box>

          {/* ================= ACTIVITY ================= */}
          {status === "not-started" && (
            <>
              <Text fontWeight="bold" mb={2} borderLeft="4px solid orange" pl={2}>
                ACTIVITY
              </Text>

              <Box overflowX="auto" mb={6}>
                <Table size="sm">
                  <Thead bg="gray.100">
                    <Tr>
                      <Th>Time</Th>
                      <Th>Description</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>08:00 - 08:30</Td>
                      <Td>Safety Meeting & Site Preparation</Td>
                    </Tr>
                    <Tr>
                      <Td>12:00 - 13:00</Td>
                      <Td>Lunch Break</Td>
                    </Tr>
                    <Tr>
                      <Td>17:00 - 17:30</Td>
                      <Td>Site Cleanup & Equipment Check</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              <Text fontWeight="bold" mb={2} borderLeft="4px solid red" pl={2}>
                STANDBY
              </Text>

              <Box
                p={3}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                color="gray.600"
              >
                <Text>
                  <strong>Reason:</strong> No standby recorded today.
                </Text>
              </Box>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HoleDetailModal;
