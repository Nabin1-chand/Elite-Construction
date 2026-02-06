import { Box, Text, SimpleGrid, Flex, Divider, Select,  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer, } from "@chakra-ui/react";
import DashboardCard from "../DashBoardCard";
import Header from "../Header";
import Sidebar from "../sidebar";
import HoleCard from "../HoleCard";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import HoleDetailModal from "../HoleDetailModal";
import { ProjectContext } from "../../provider/ProjectContext";
import { useLocation } from "react-router-dom";
import { useContext,  useEffect } from "react";
import HoleDetailFormModal from "../HoleDetailFormModal";
import BoreholeDashboard from "../graphs/BoreholeDashboard";
import CurveLine from "../graphs/CurveLine";
import DailySitePhoto from "./DailySitePhoto";
const Dashboard = () => {
  const { projects } = useContext(ProjectContext);
    const location = useLocation();
  const [selectedProject, setSelectedProject] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedHole, setSelectedHole] = useState(null)
  // const [project, setProject] = useState("");  


  const currentProject = projects.find((p) => p.id === selectedProject);

  // const totalHoles = 92;
  const totalHoles = currentProject ? currentProject.numberOfHoles : 92;
  const inProgressHoles = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"];
  const completedHoles = ["B11", "B12", "B13", "B14"];
  const holes = Array.from({ length: totalHoles }, (_, i) => `B${i + 1}`);

  const handleHoleClick = (hole) => {
    setSelectedHole(hole);
    onOpen();
  };

  const getHoleColor = (hole) => {
    if (completedHoles.includes(hole)) return "green.300";
    if (inProgressHoles.includes(hole)) return "yellow.400";
    return "gray.200";
  };

  const getHoleStatus = (hole) => {
    if (completedHoles.includes(hole)) return "completed";
    if (inProgressHoles.includes(hole)) return "in-progress";
    return "not-started";
  };

  const fromDrillingLog = location.state?.fromDrillingLog;
  const projectIdFromLog = location.state?.projectId;

  // useEffect(() => {
  //   if (projectIdFromLog) {
  //     setSelectedProject(projectIdFromLog);
  //   }
  // }, [projectIdFromLog]);

  useEffect(() => {
  // Case 1: Coming from Drilling Log
  if (projectIdFromLog) {
    setSelectedProject(projectIdFromLog);
    return;
  }

  // Case 2: Normal Dashboard load → auto select first project
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
              <Text mt={2}>
                Please select a project to view dashboard details.
              </Text>
            </Box>
          ) : (
            <>
              {/* ---------------------------- */}
              {/* CASE 1: FROM DRILLING LOG CLICK */}
              {/* ---------------------------- */}
              {fromDrillingLog ? (
                <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
                  <Text fontSize="lg" fontWeight="bold" mb={3}>
                    Drilling Holes (B1 - B{totalHoles})
                  </Text>
                  <Divider mb={4} />

                  <SimpleGrid
                    columns={{ base: 4, sm: 6, md: 10, lg: 12 }}
                    spacing={4}
                  >
                    {holes.map((hole) => (
                      
                      <HoleCard
                        key={hole}
                        label={hole}
                        status={getHoleStatus(hole)}
                        isClickable
                        onClick={() => handleHoleClick(hole)}
                      />
                    ))}
                  </SimpleGrid>
                </Box>
              ) : (
                <>
                  {/* ---------------------------- */}
                  {/* CASE 2: NORMAL DASHBOARD ACCESS */}
                  {/* ---------------------------- */}

                  {/* Project Dropdown */}
                  <Box
                    bg="white"
                    p={4}
                    borderRadius="lg"
                    boxShadow="md"
                    w="40%"
                    mb={6}
                  >
                    <Text fontWeight="bold" mb={2}>
                      Select Project
                    </Text>
                    {projects.length === 0 ? (
                      <Text color="red.500">
                        No projects available. Please create a project first.
                      </Text>
                    ) : (
                      <Select
                        placeholder="Select Project---"
                        value={selectedProject}
                        onChange={(e) => setSelectedProject(e.target.value)}
                      >
                        {projects.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Box>
                  
      {/* ================= SUMMARY ROW ================= */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={6}>
        {/* Status Summary */}
        <Box bg="white" p={4} >
          <Text fontSize="18" fontWeight="bold" textDecoration="underline" mb={2}>
            Status Summary
          </Text>
          <Text fontWeight="bold">Current Complexity: 72%</Text>
          <Text fontWeight="bold">Variance to Plan: +4%</Text>
        </Box>

        {/* Material Summary with Table */}
        <Box bg="white" p={4} >
          <Text fontSize="18" fontWeight="bold" textDecoration="underline" mb={3}>
            Material Summary
          </Text>

        <TableContainer border="1px solid" borderColor="gray.300">
  <Table size="sm" >
    <Thead bg="gray.100">
      <Tr>
        <Th border="1px solid" borderColor="gray.300">
          
        </Th>
        <Th border="1px solid" borderColor="gray.300">
          Cement
        </Th>
        <Th border="1px solid" borderColor="gray.300">
        Bentonite
        </Th>
      </Tr>
    </Thead>

    <Tbody>
      <Tr>
        <Td border="1px solid" borderColor="gray.300">Total Consumed</Td>
        <Td isNumeric border="1px solid" borderColor="gray.300">
        </Td>
        
      </Tr>

  

      <Tr>
        <Td border="1px solid" borderColor="gray.300">Remaining</Td>
        <Td isNumeric border="1px solid" borderColor="gray.300">
        </Td>
        <Td isNumeric border="1px solid" borderColor="gray.300">
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
        </Box>

        {/* Jetting Summary */}
        <Box bg="white" p={4} >
          <Text fontSize="18" fontWeight="bold" textDecoration="underline" mb={2}>
            Jetting Summary
          </Text>
          <Text>Total Jetting Length: 540 m</Text>
          <Text>Total Jetting Volume: 320 m³</Text>
        </Box>
      </SimpleGrid>
                      <BoreholeDashboard/>
                       <CurveLine/>
                       <DailySitePhoto/>
                  {/* Project Status Overview */}
                  <Box bg="white" p={5} borderRadius="lg" boxShadow="md" mb={6}>
                    <Flex justify="space-between" mb={4}>
                      <Text fontWeight="bold" fontSize="lg">
                        Project Status Overview
                      </Text>
                      <Flex gap={4}>
                        <Flex align="center" gap={1}>
                          <Box w={3} h={3} bg="gray.300" borderRadius="full" />
                          <Text fontSize="sm">Not Started</Text>
                        </Flex>
                        <Flex align="center" gap={1}>
                          <Box w={3} h={3} bg="yellow.400" borderRadius="full" />
                          <Text fontSize="sm">In Progress</Text>
                        </Flex>
                        <Flex align="center" gap={1}>
                          <Box w={3} h={3} bg="green.400" borderRadius="full" />
                          <Text fontSize="sm">Completed</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                      <DashboardCard
                        title="NOT STARTED"
                        value={
                          totalHoles -
                          inProgressHoles.length -
                          completedHoles.length
                        }
                        color="gray.100"
                      />
                      <DashboardCard
                        title="IN PROGRESS"
                        value={inProgressHoles.length}
                        color="yellow.100"
                      />
                      <DashboardCard
                        title="COMPLETED"
                        value={completedHoles.length}
                        color="green.100"
                      />
                      <DashboardCard
                        title="TOTAL HOLES"
                        value={totalHoles}
                        color="blue.100"
                      />
                    </SimpleGrid>
                  </Box>

                  {/* Drilling Holes Diagram */}
                  <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
                    <Text fontSize="lg" fontWeight="bold" mb={3}>
                      Drilling Holes Diagram (B1 - B{totalHoles})
                    </Text>
                    <Divider mb={4} />
                    <SimpleGrid
                      columns={{ base: 4, sm: 6, md: 10, lg: 12 }}
                      spacing={4}
                    >
                      {holes.map((hole) => (
                        <HoleCard
                          key={hole}
                          label={hole}
                          color={
                            completedHoles.includes(hole)
                              ? "green.300"
                              : inProgressHoles.includes(hole)
                              ? "yellow.400"
                              : "gray.200"
                          }
                          isClickable
                          onClick={() => handleHoleClick(hole)}
                        />
                      ))}
                    </SimpleGrid>
                  </Box>
                </>
              )}
            </>
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

export default Dashboard;
