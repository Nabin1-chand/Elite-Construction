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
import { useContext } from "react";
import { ProjectContext } from "../../provider/ProjectContext";
const Drilling = (
) => {
  const { projects, deleteProject } = useContext(ProjectContext);

const navigate = useNavigate();
  const handleProjectClick = (projectId) => {
 navigate("/drilling-hole", {
      state: {
        projectId,
        fromDrillingLog: true,
        
      },
    });
  };

  

  return (

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
                  cursor="pointer"
              onClick={() => handleProjectClick(p.id)}
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "xl",
                transition: "0.2s",
                bg: "gray.100",
              }}
            >
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  {p.name}
                </Text>
                {/* <Text fontSize="sm" color="gray.600">
              Section: {p.client || "N/A"}
            </Text>          */}
                <Box
                  p={3}
                  bg="white"
                  borderRadius="md"
                  boxShadow="sm"   // elevation
                  display="inline-block"
                >
                  <Text fontSize="sm" color="gray.600">
                    Section: {p.client || "N/A"}
                  </Text>
                </Box>
              
            
              </Box>

       
            </Box>

          ))}

        </Flex>



  );
};

export default Drilling;
