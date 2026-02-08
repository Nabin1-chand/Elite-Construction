import { Box, Text, SimpleGrid, Flex, Divider } from "@chakra-ui/react";
import Header from "../Header";
import Sidebar from "../sidebar";
import HoleCard from "../HoleCard";
import { useState, useContext, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import HoleDetailFormModal from "../HoleDetailFormModal";
import { ProjectContext } from "../../provider/ProjectContext";
import { useLocation, useNavigate } from "react-router-dom";

const DrillingHole = () => {
    const navigate = useNavigate();
    const { projects } = useContext(ProjectContext);
    const location = useLocation();
    const [selectedProject, setSelectedProject] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedHole, setSelectedHole] = useState(null);

    const currentProject = projects.find((p) => p.id === selectedProject);

    const totalHoles = currentProject ? currentProject.numberOfHoles : 92;
    const inProgressHoles = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"];
    const completedHoles = ["B11", "B12", "B13", "B14"];
    const holes = Array.from({ length: totalHoles }, (_, i) => `B${i + 1}`);

    const handleHoleClick = (hole) => {
        navigate("/drilling-hole-log", {
            state: {
                holeReference: hole,
                projectId: selectedProject,
                projectDetails: currentProject,
                workSection: currentProject.client,
            },
        });
    };

    const getHoleStatus = (hole) => {
        if (completedHoles.includes(hole)) return "completed";
        if (inProgressHoles.includes(hole)) return "in-progress";
        return "not-started";
    };

    const fromDrillingLog = location.state?.fromDrillingLog;
    const projectIdFromLog = location.state?.projectId;

    useEffect(() => {
        if (projectIdFromLog) {
            setSelectedProject(projectIdFromLog);
            return;
        }
        if (projects.length > 0 && !selectedProject) {
            setSelectedProject(projects[0].id);
        }
    }, [projectIdFromLog, projects, selectedProject]);

    return (
        <>
            {!currentProject ? (
                <Box
                    bg="white"
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    textAlign="center"
                    color="gray.500"
                >
                    <Text fontSize="lg">No project selected.</Text>
                    <Text mt={2}>Please select a project to view dashboard details.</Text>
                </Box>
            ) : (
                <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
                    <Text fontSize="lg" fontWeight="bold" mb={3}>
                        Drilling Holes (B1 - B{totalHoles})
                    </Text>
                    <Divider mb={4} />

                    <SimpleGrid columns={{ base: 4, sm: 6, md: 10, lg: 12 }} spacing={4}>
                        {holes.map((hole) => {
                            const status = getHoleStatus(hole);
                            const statusText =
                                status === "completed"
                                    ? "Completed"
                                    : status === "in-progress"
                                    ? "In Progress"
                                    : "Not Started";

                            const statusColor =
                                status === "completed"
                                    ? "green.500"
                                    : status === "in-progress"
                                    ? "yellow.600"
                                    : "gray.500";

                            return (
                                <Box key={hole} textAlign="center">
                                    <HoleCard
                                        label={hole}
                                        color="gray.200" // container color neutral
                                        isClickable
                                        onClick={() => handleHoleClick(hole)}
                                    />
                                    <Text fontSize="sm" mt={1} color={statusColor} fontWeight="semibold">
                                        {statusText}
                                    </Text>
                                </Box>
                            );
                        })}
                    </SimpleGrid>
                </Box>
            )}

            {/* Hole Detail Modal */}
            <HoleDetailFormModal
                isOpen={isOpen}
                onClose={onClose}
                hole={selectedHole}
                status={selectedHole ? getHoleStatus(selectedHole) : null}
            />
        </>
    );
};

export default DrillingHole;
