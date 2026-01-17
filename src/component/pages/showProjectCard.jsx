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
const ProjectCard = ({ name, description,
    onDelete,
}) => {
      const navigate = useNavigate();
    return (
        <Flex direction="column" minH="100vh" w="100vw">
            <Header />
            <Flex flex="1">
                <Sidebar />
                <Box
                    bg="white"
                    p={10}
                    ml={20}
                    mt={10}
                    borderRadius="lg"
                    boxShadow="md"
                    _hover={{ boxShadow: "lg" }}
                    transition="0.2s"
                >
                    {/* Project Name */}
                    <Heading size="md" mb={2}>
                        {name}
                    </Heading>

                    {/* Project Description */}
                    <Text fontSize="sm" color="gray.600">
                        {description || "No description provided."}
                    </Text>
                    {/* Bottom Actions */}
                    <Flex mt={4} justify="space-between" align="center">
                        <Button
                            size="sm"
                            colorScheme="blue"
                            variant="outline"
                            // onClick={onConfigure}
                               onClick={() => navigate("/projects/create")}
                        >
                            Configure
                        </Button>

                        <IconButton
                            size="sm"
                            colorScheme="red"
                            variant="ghost"
                            icon={<DeleteIcon />}
                            aria-label="Delete project"
                            onClick={onDelete}
                        />
                    </Flex>
                </Box>
            </Flex>
        </Flex>


    );
};

export default ProjectCard;
