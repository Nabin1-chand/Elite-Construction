import Header from "../Header";
import Sidebar from "../sidebar";
import {
    Box,
    Text,
    Heading,
    Flex,
    Button,
    IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { ProjectContext } from "../../provider/ProjectContext";
const ProjectCard = (
) => {
    const {projects, deleteProject} =useContext(ProjectContext);
      const navigate = useNavigate();
        const handleConfigure = (projectId) => {
    // navigate to create project page
    // optionally, you can pass projectId as state to edit later
    navigate("/projects/create", { state: { projectId } });
  };
    return (
        <Flex direction="column" minH="100vh" w="100vw">
            <Header />
            <Flex flex="1">
                <Sidebar />
 <Flex wrap="wrap" gap={4} p={6} bg="gray.50">

         {projects.map((p) => (
        <Box
          key={p.id}
          bg="white"
          p={4}
          mr={15}
          rounded="md"
          shadow="md"
          w="300px"
          h="300px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {p.name}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Client: {p.client || "N/A"}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Holes: {p.numberOfHoles}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {p.description || "No description"}
            </Text>
          </Box>

          <Flex justify="space-between" mt={4}>
            <Button size="sm" colorScheme="blue" onClick={() => handleConfigure(p.id)}>
              Configure
            </Button>
            <IconButton
              size="sm"
              colorScheme="red"
              icon={<DeleteIcon />}
                onClick={() => deleteProject(p.id)}

            />
          </Flex>
        </Box>
        
      ))}

</Flex>
            </Flex>
        </Flex>


    );
};

export default ProjectCard;
