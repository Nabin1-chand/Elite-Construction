import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Box,
    Text,
    Input,
    Grid,
    Divider,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Textarea,
    Button,
} from "@chakra-ui/react";
import CompletedDetailFormModal from "./CompletedDetailFormModal";

/* Small reusable field */
const Field = ({ label }) => (
    <Box>
        <Text fontSize="12px" mb={1}>{label}</Text>
        <Input size="sm" />
    </Box>
);

const HoleDetailFormModal = ({ isOpen, onClose, hole, status }) => {
    const renderContent=()=>{
        if(status ==="completed"){
           return <CompletedDetailFormModal/>
        }
            if (status === "not-started") {
      return   (
      <Box
        minH="300px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="gray.400"
        fontSize="14px"
      >
        No data available. Hole not started yet.
      </Box>
    );
    }


        return (
      <>
        {/* BASIC INFO */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={4}>
          <Field label="Diameter (m)" />
        </Grid>

        {/* DRILLING LOG */}
        <Box p={3} mb={4}>
          <Text fontWeight="bold" textAlign="center" mb={3}>
            Drilling Log
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Field label="Drilling Depth (m)" />
            <Field label="Start Date" />
            <Field label="End Date" />
          </Grid>
        </Box>

        {/* JETTING PARAMETERS */}
        <Box p={3} mb={4}>
          <Text fontWeight="bold" mb={2}>
            Jetting Parameters
          </Text>
          <Table
            size="sm"
            sx={{
              th: {
                border: "1px solid",
                borderColor: "gray.500",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "600",
                padding: "6px",
              },
              td: {
                border: "1px solid",
                borderColor: "gray.500",
                height: "24px",
              },
            }}
          >
            <Thead>
              <Tr>
                <Th colSpan={2}>Grouting Machine</Th>
                <Th colSpan={2}>Grouting Pump</Th>
                <Th colSpan={2}>Airflow Cell</Th>
              </Tr>
              <Tr>
                <Th>Jetting Speed</Th>
                <Th>Lift Rate</Th>
                <Th>Jetting Pressure</Th>
                <Th>Flow Rate</Th>
                <Th>Air Flow</Th>
                <Th>Air Pressure</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(3)].map((_, r) => (
                <Tr key={r}>
                  {[...Array(6)].map((_, c) => (
                    <Td key={c} />
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* JETTING LOG */}
        <Box p={3} mb={4}>
          <Table
            size="sm"
            sx={{
              th: {
                border: "1px solid",
                borderColor: "gray.500",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "600",
                padding: "6px",
              },
              td: {
                border: "1px solid",
                borderColor: "gray.500",
                height: "24px",
              },
            }}
          >
            <Thead>
              <Tr>
                <Th rowSpan={2}>Date</Th>
                <Th colSpan={2}>Grouting Time</Th>
                <Th rowSpan={2}>Length of Jetting (m)</Th>
                <Th rowSpan={2}>Cement Used (Kg)</Th>
                <Th rowSpan={2}>Jetting Volume (Ltr)</Th>
              </Tr>
              <Tr>
                <Th>From</Th>
                <Th>To</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(3)].map((_, r) => (
                <Tr key={r}>
                  {[...Array(6)].map((_, c) => (
                    <Td key={c} />
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* SLUDGE & SG */}
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={4}>
          <Field label="Sludge Discharge" />
          <Field label="Specific Gravity" />
        </Grid>

        {/* REMARKS */}
        <Box>
          <Text fontWeight="bold" mb={2}>
            Remarks
          </Text>
          <Box mb={2}>
            <Text mb={1}>Drilling</Text>
            <Textarea size="sm" />
          </Box>
          <Box>
            <Text mb={1}>Jetting</Text>
            <Textarea size="sm" />
          </Box>
        </Box>
      </>
    );
  };



  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <Text fontSize="22px" fontWeight="bold">
            Hole {hole} Details
          </Text>
          <Text fontSize="13px">
            Project: MRTA Purple Line (South) Project Contract 3 Underground Civil Works
          </Text>
          <Text fontSize="15px" mt="4">
            Section:
          </Text>
        </ModalHeader>

        <Divider />

        <ModalBody fontSize="sm">{renderContent()}</ModalBody>

        <Divider />

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
          {status === "in-progress" && <Button colorScheme="purple">Save</Button>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};



export default HoleDetailFormModal;
