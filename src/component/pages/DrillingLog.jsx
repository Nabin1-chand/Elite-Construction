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
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
  Center,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const DrillingLog = () => {
  const location = useLocation();

    const {
    workSection = "",
    holeReference = "",
  } = location.state || {};
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeRow, setActiveRow] = useState(null);
  const [captured, setCaptured] = useState({});
  const [soilValues, setSoilValues] = useState({});


  const data = [
    {
      id: 1,
      lengthFrom: 0,
      lengthTo: 1.5,
      elevationFrom: "101.665",
      elevationTo: "100.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
    {
      id: 2,
      lengthFrom: 1.5,
      lengthTo: 3.5,
      elevationFrom: "100.165",
      elevationTo: "98.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
    {
      id: 3,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
       {
      id: 4,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
       {
      id: 5,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 6,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 7,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 8,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 9,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 10,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 11,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 12,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 13,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 14,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 15,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 16,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 17,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
      {
      id: 18,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
    {
      id: 19,
      lengthFrom: 9.0,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
    {
      id: 20,
      lengthFrom: 3.5,
      lengthTo: 5.5,
      elevationFrom: "98.165",
      elevationTo: "96.165",
      start: "HH:MM",
      finish: "HH:MM",
    },
  ];
  const soilOptions = [
    "Soft clay",
    "Medium clay",
    "Soft clay / Stiff clay",
    "Stiff clay",
    "Sand / Stiff clay",
    "Sand",
  ];
  // ✅ OPEN FRONT CAMERA
  const openCamera = async (rowId) => {
    setActiveRow(rowId);
    onOpen();

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" }, // FRONT CAMERA
    });

    streamRef.current = stream;
    videoRef.current.srcObject = stream;
  };

  // ✅ CAPTURE PHOTO
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video, 0, 0);

    setCaptured((prev) => ({
      ...prev,
      [activeRow]: true,
    }));

    closeCamera();
  };

  // ✅ CLOSE CAMERA
  const closeCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    onClose();
  };

  return (

<>
 <Box 
   minH="100vh"
    overflowY="auto"
    bg="gray.50"
    p={4}>

<Box
  bg="white"
  p={4}
  mb={4}
  borderRadius="lg"
  boxShadow="md"
>
        <Flex gap={4} wrap="wrap" align="center">
    
    <Box flex="1">
      <Text fontSize="sm" mb={1} fontWeight="semibold">
        Work Section
      </Text>
    <Input value={workSection} isReadOnly />
    </Box>

    <Box flex="1">
      <Text fontSize="sm" mb={1} fontWeight="semibold">
        Hole Reference
      </Text>
   <Input value={holeReference} isReadOnly />
    </Box>

    <Box flex="1">
      <Text fontSize="sm" mb={1} fontWeight="semibold">
        Tool Diameter
      </Text>
      <Input size="sm" placeholder="mm" />
    </Box>

    <Box flex="1">
      <Text fontSize="sm" mb={1} fontWeight="semibold">
        Start Time
      </Text>
      <Input size="sm" type="time" />
    </Box>

    <Box flex="1">
      <Text fontSize="sm" mb={1} fontWeight="semibold">
        Finish Time
      </Text>
      <Input size="sm" type="time" />
    </Box>

  </Flex>
  
</Box>
<Flex mb={3} justify="flex-end">
  <Button
    size="sm"
    colorScheme="blue"
  >
    Save
  </Button>
</Flex>
         
          <Box bg="white" mt={5} p={5} borderRadius="lg" boxShadow="md"></Box>
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

                        <Td> 
      <Input size="sm" type="time" />

                </Td> 
              <Td> 
      <Input size="sm" type="time" />

                </Td> 
      

                {/* ✅ SOIL LAYER DROPDOWN */}
                <Td>
                  <Select
                    size="sm"
                    placeholder="Select soil"
                    value={soilValues[row.id] || ""}
                    onChange={(e) =>
                      setSoilValues((prev) => ({
                        ...prev,
                        [row.id]: e.target.value,
                      }))
                    }
                  >
                    {soilOptions.map((soil) => (
                      <option key={soil} value={soil}>
                        {soil}
                      </option>
                    ))}
                  </Select>
                </Td>

                {/* CAPTURE BUTTON */}
                <Td>
                  <Button
                    size="sm"
                    colorScheme={captured[row.id] ? "green" : "blue"}
                    onClick={() => openCamera(row.id)}
                  >
                    {captured[row.id] ? "Captured" : "CAPTURE"}
                  </Button>
                </Td>

                <Td>
                  <Input size="sm" placeholder="Remarks" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        
<Center mt={4}>

<Box
  mt={4}
  alignContent="center"
  p={3}

  bg="gray.100"
  borderRadius="md"
  border="1px solid"
  borderColor="gray.300"
>
 
  <Text fontSize="sm" p='10' textAlign="center" color="gray.700">
   57.5 M
  </Text>
</Box>
</Center>


      </Box>

      {/* ✅ CAMERA MODAL */}
      <Modal isOpen={isOpen} onClose={closeCamera} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={closeCamera}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={takePhoto}>
              Take Photo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      </>
  );
};

export default DrillingLog;
