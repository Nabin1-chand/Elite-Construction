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
} from "@chakra-ui/react";
import Header from "../Header";
import Sidebar from "../sidebar";
import { useRef, useState } from "react";

const DrillingLog = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeRow, setActiveRow] = useState(null);
  const [captured, setCaptured] = useState({});

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
        <Box bg="white" p={5} borderRadius="lg" boxShadow="md" overflowX="auto" w="100%">
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

                  {/* ✅ CAPTURE BUTTON */}
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
                    <Input size="sm" />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
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
