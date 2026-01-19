import {
  Box,
  Flex,
  Heading,
  Text,
  Select,
  Input,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Header from "../Header";
import Sidebar from "../sidebar";

const AngleLog = () => {
  return (
    <Flex direction="column" minH="100vh" w="100vw">
      <Header />

      <Flex flex="1">
        <Sidebar />

        <Box flex="1" p={6} bg="gray.50">
          <Box bg="white" p={6} rounded="md" shadow="sm" maxW="900px">
            <Heading size="md" mb={4}>
              ⏱ Angle Recording Form
            </Heading>

            {/* Project */}
            <FormControl mb={4}>
              <FormLabel>Project</FormLabel>
              <Select placeholder="Select Project">
                <option>
                  MRTA Purple Line (South) Project Contract 3 Underground Civil Works
                </option>
              </Select>
            </FormControl>

            {/* Hole */}
            <FormControl mb={4}>
              <FormLabel>Hole No.</FormLabel>
              <Select>
                <option>B1</option>
                <option>B2</option>
                <option>B3</option>
              </Select>
            </FormControl>

            {/* Angle */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl>
                <FormLabel>Angle (Degrees)</FormLabel>
                <Input placeholder="e.g. 45.5" />
              </FormControl>

              <FormControl>
                <FormLabel>Shape Accelerator Array Result</FormLabel>
                <Button variant="outline" w="full">
                  Upload Image
                </Button>
              </FormControl>
            </SimpleGrid>

            {/* Calibrated Angle */}
            <FormControl mt={4}>
              <FormLabel>Calibrated Angle (Degrees)</FormLabel>
              <Input placeholder="e.g. 45.2" />
            </FormControl>

            {/* Deviation */}
            <Box mt={4}>
              <Text fontWeight="bold" mb={2}>
                Deviation (mm)
              </Text>

              <SimpleGrid columns={3} spacing={3}>
                <Input placeholder="X Axis" />
                <Input placeholder="Y Axis" />
                <Input placeholder="Z Axis" />
              </SimpleGrid>
            </Box>

            {/* Save */}
            <Button mt={6} colorScheme="blue">
              Save Angle Record
            </Button>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AngleLog;
