import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import Header from "../Header";
import Sidebar from "../sidebar";

const DailySupervisionLog = () => {
  return (


        <Box flex="1" p={6} bg="gray.50">
          <Box bg="white" p={6} rounded="md" shadow="sm">

            <Flex justify="space-between" mb={4}>
              <Heading size="md">DAILY SUPERVISION LOG</Heading>
              <Text fontSize="sm">Date: 08/28/2025</Text>
            </Flex>

            {/* 1. Plant & Equipment */}
            <Heading size="sm" mb={2}>1. PLANT & EQUIPMENT (Daily / Accumulate)</Heading>
            <SimpleGrid columns={4} spacing={3} mb={6}>
              <Text>Item</Text>
              <Text>Daily</Text>
              <Text>Accumulate</Text>
              <Text></Text>

              {[
                "Drilling Machine",
                "Drilling Pump",
                "Grouting Machine",
                "Grouting Pump",
                "Air Compressor",
                "Generator",
                "Cement Silo",
                "Excavator",
              ].map((item) => (
                <>
                  <Text>{item}</Text>
                  <Input size="sm" />
                  <Input size="sm" />
                  <Text />
                </>
              ))}
            </SimpleGrid>

            {/* 2. Material */}
            <Heading size="sm" mb={2}>2. MATERIAL (Daily / Accumulate)</Heading>
            <SimpleGrid columns={3} spacing={3} mb={6}>
              <Text>Item</Text>
              <Text>Daily</Text>
              <Text>Accumulate</Text>

              {[
                "Cement (ton)",
                "Bentonite (kg)",
                "Additive",
              ].map((item) => (
                <>
                  <Text>{item}</Text>
                  <Input size="sm" />
                  <Input size="sm" />
                </>
              ))}
            </SimpleGrid>

            {/* 3. Manpower */}
            <Heading size="sm" mb={2}>3. MANPOWER (Daily / Accumulate)</Heading>
            <SimpleGrid columns={3} spacing={3} mb={6}>
              <Text>Role</Text>
              <Text>Daily</Text>
              <Text>Accumulate</Text>

              {["Engineer", "Supervisor", "Operator", "Worker"].map((role) => (
                <>
                  <Text>{role}</Text>
                  <Input size="sm" />
                  <Input size="sm" />
                </>
              ))}
            </SimpleGrid>

            <Button colorScheme="blue">Save Log</Button>
          </Box>
        </Box>
    
  );
};

export default DailySupervisionLog;
