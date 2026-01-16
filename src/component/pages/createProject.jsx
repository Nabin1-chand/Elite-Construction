import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
}  from "@chakra-ui/react";
import Sidebar from "../sidebar";
import Header from "../Header";
const CreateProject = () => {
  return (
    <Flex direction="column" minH="100vh" w="100vw">
      {/* Header */}
      <Header />

      {/* Sidebar + Content */}
      <Flex flex="1">
        <Sidebar />

        {/* Main Content */}
        <Box flex="1" p={6} bg="gray.50">
          <Box
            bg="white"
            p={6}
            rounded="md"
            shadow="sm"
            maxW="900px"
          >
            <Heading size="md" mb={6}>
              Create Project
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl>
                <FormLabel>Project Name</FormLabel>
                <Input placeholder="Enter project name" />
              </FormControl>

              <FormControl>
                <FormLabel>Client Name</FormLabel>
                <Input placeholder="Enter client name" />
              </FormControl>

              <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input type="date" />
              </FormControl>

              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input type="date" />
              </FormControl>
            </SimpleGrid>

            <FormControl mt={4}>
              <FormLabel>Project Description</FormLabel>
              <Textarea placeholder="Write project details..." />
            </FormControl>

            <Flex justify="flex-end" mt={6} gap={3}>
              <Button variant="outline">Cancel</Button>
              <Button colorScheme="blue">Create Project</Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CreateProject;
