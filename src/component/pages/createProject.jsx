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
import { useState, useContext } from "react";
import { ProjectContext } from "../../provider/ProjectContext";
import { useNavigate } from "react-router-dom";
const CreateProject = () => {
  const {addProject} = useContext(ProjectContext);
  const [projectName, setProjectName] = useState("");
  
  const [numberOfHoles, setNumberOfHoles] = useState("");
  const [clientName, setClientName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const navigate = useNavigate();

  const handleCreate = () => {
    if (!projectName) return alert("Enter project name");
    if (!numberOfHoles) return alert("Enter number of holes");
    addProject({
      id: projectName.toLowerCase().replace(/\s+/g, "-"),
      name: projectName,
      numberOfHoles: Number(numberOfHoles),
      client:clientName,
      description: projectDescription,

      
    });
    setProjectName("");
    setClientName("");
    setNumberOfHoles("");
    setProjectDescription("");
    alert("Project created!");
    navigate("/projects/showProject");
  };
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
                <Input
                value={projectName}
                onChange={(e)=>setProjectName(e.target.value)}
                 placeholder="Enter project name" />
              </FormControl>

              <FormControl>
                <FormLabel>Section</FormLabel>
                <Input 
                value={clientName}
                onChange={(e)=>setClientName(e.target.value)}
                placeholder="Enter Section" />
              </FormControl>

              <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input type="date" />
              </FormControl>

              <FormControl>
                <FormLabel>Number of Hole</FormLabel>
                <Input 
                // value={numberOfHoles}
                //  onChange={(e) => setNumberOfHoles(e.target.value)}
                   value={numberOfHoles}
                  onChange={(e) => setNumberOfHoles(e.target.value)}
                type="number"
                placeholder="Enter number of hole" />
              </FormControl>
            </SimpleGrid>

            <FormControl mt={4}>
              <FormLabel>Project Description</FormLabel>
              <Textarea
              value={projectDescription}
              onChange={(e)=>setProjectDescription(e.target.value)}
               placeholder="Write project details..." />
            </FormControl>

            <Flex justify="flex-end" mt={6} gap={3}>
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleCreate} colorScheme="blue">Create Project</Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CreateProject;
