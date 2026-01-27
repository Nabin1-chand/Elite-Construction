import React from 'react';
import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Grid,
  Tooltip,
  Container,
} from '@chakra-ui/react';
import SummaryReportTable from './SummaryReportTable';
import ThreeDGraph from './ThreeDGraph';
import TopViewGraph from './TopViewGraph';
import CurveLine from './CurveLine';
import JettingVolumeGraph from './JettingVolumeGraph';

const SummaryReportGraph = () => {
  // Common styles for the 3 tables at the bottom
  const headerStyle = {
    textAlign: "center",
    bg: "gray.100",
    fontSize: "xs",
    p: 2,
    border: "1px solid",
    borderColor: "gray.500",
  };

  const cellStyle = {
    textAlign: "center",
    fontSize: "sm",
    p: 2,
    border: "1px solid",
    borderColor: "gray.500",
  };

  // IDs that should appear as "white holes" (background)
  const holeIds = [14, 15, 31, 40, 51, 53, 62, 65, 81]; 

  const sensors = Array.from({ length: 92 }, (_, i) => {
    const id = i + 1;
    return {
      id: `B${String(id).padStart(2, '0')}`,
      isHole: holeIds.includes(id),
      isGreen: id === 88, 
    };
  });

  return (
    <Container maxW="container.xl" py={10}>
      <Text fontSize="xl" fontWeight="700" mb={6} textAlign="center">
        Air Flow Control Overlay
      </Text>

      {/* 1. THE INTERSECTING SENSOR MAP */}
      <Box 
        p={10} 
        bg="white" 
        border="1px solid" 
        borderColor="gray.300" 
        borderRadius="md"
        mb={12}
        display="flex"
        justifyContent="center"
      >
        <Grid 
          templateColumns="repeat(12, 50px)" // Fixed width columns to force overlap
          gap={0} 
        >
          {sensors.map((s) => (
            <Tooltip key={s.id} label={s.id}>
              <Box
                w="65px"   // Width is larger than the grid column (50px)
                h="65px"   // Height is larger than the grid row
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="11px"
                fontWeight="bold"
                border="1px solid"
                borderColor={s.isHole ? "gray.200" : "rgba(0,0,0,0.1)"}
                
                /* THE OVERLAP & INTERSECTION LOGIC */
                // 1. Negative margin pulls B01 and B02 together
                m="-6px" 
                
                // 2. Multiply blend mode creates the "Set Intersection" visual
                style={{ mixBlendMode: s.isHole ? "normal" : "multiply" }}
                
                // 3. Holes stay in the back, pink/green overlap on top
                zIndex={s.isHole ? 1 : 2}
                
                bg={
                  s.isHole ? "white" : 
                  s.isGreen ? "rgba(144, 238, 144, 0.7)" : "rgba(237, 100, 166, 0.6)"
                }
                color={s.isHole ? "black" : "white"}
                
                transition="all 0.2s"
                _hover={{ zIndex: 20, transform: "scale(1.15)", cursor: "pointer" }}
              >
                {s.id}
              </Box>
            </Tooltip>
          ))}
        </Grid>
      </Box>

<SummaryReportTable/>
{/* <ThreeDGraph/>
 */}
 <TopViewGraph/>
 <CurveLine/>
 <JettingVolumeGraph/>
    </Container>
  );
};

export default SummaryReportGraph;