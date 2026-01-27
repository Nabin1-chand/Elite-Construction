import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  useToken
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label
} from 'recharts';

// Mock data following the S-curve pattern from Aug to Dec
const data = [
  { date: 'Aug 12', baseline: 0, actual: 0 },
  { date: 'Sep 01', baseline: 5, actual: 3 },
  { date: 'Sep 21', baseline: 15, actual: 10 },
  { date: 'Oct 11', baseline: 30, actual: 25 },
  { date: 'Oct 21', baseline: 45, actual: 40 }, // Current Status Point
  { date: 'Oct 31', baseline: 60, actual: 52 },
  { date: 'Nov 20', baseline: 80, actual: 78 },
  { date: 'Dec 10', baseline: 95, actual: 94 },
  { date: 'Dec 30', baseline: 100, actual: 100 },
];

const CurveLine = () => {
  const [blue200, gray300] = useToken('colors', ['blue.50', 'gray.300']);

  return (
    <Box w="full" maxW="1000px" mx="auto" p={6} bg="white" borderRadius="xl" boxShadow="sm">
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Complexity Accumulation (%)</Heading>
        
        <Box h="500px" w="100%" position="relative">
          {/* Custom Overlay for Background Phases (Discovery, Integration, Delivery) */}
          <HStack position="absolute" top="0" left="65px" right="5px" bottom="60px" zIndex={0} spacing={0}>
            <Box flex="1" bg="gray.50" h="100%" opacity={0.5} borderRight="1px dashed" borderColor="gray.200">
               <Text fontSize="xs" mt="auto" textAlign="center" color="gray.400" fontWeight="bold">Discovery</Text>
            </Box>
            <Box flex="1" bg="blue.50" h="100%" opacity={0.3} borderRight="1px dashed" borderColor="gray.200">
               <Text fontSize="xs" mt="auto" textAlign="center" color="gray.400" fontWeight="bold">Integration</Text>
            </Box>
            <Box flex="1" bg="blue.100" h="100%" opacity={0.2}>
               <Text fontSize="xs" mt="auto" textAlign="center" color="gray.400" fontWeight="bold">Delivery</Text>
            </Box>
          </HStack>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#718096' }} 
              />
              
              <YAxis 
                tickFormatter={(val) => `${val}%`} 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#718096' }}
              />

              <Tooltip />

              {/* Reference Line for "Current Status" */}
              <ReferenceLine x="Oct 21" stroke="#E53E3E" strokeWidth={2}>
                <Label 
                    value="Current Status (Oct 21)" 
                    position="top" 
                    fill="#E53E3E" 
                    fontSize={12} 
                    fontWeight="bold"
                    offset={10}
                />
              </ReferenceLine>

              {/* Target Complexity (Baseline) - Dashed Line */}
              <Line
                type="monotone"
                dataKey="baseline"
                stroke="#A0AEC0"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="Target Complexity Index (Baseline)"
              />

              {/* Actual Build-up (Continuous) - Thick Dark Line */}
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#1A202C"
                strokeWidth={3}
                dot={false}
                name="Actual Build-up (Continuous)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Custom Legend to match curve.PNG exactly */}
        <HStack justify="flex-start" spacing={6} pl="65px">
          <HStack spacing={2}>
            <Box w="20px" h="2px" borderTop="2px dashed" borderColor="gray.400" />
            <Text fontSize="xs">Target Complexity Index (Baseline)</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="20px" h="3px" bg="gray.800" />
            <Text fontSize="xs">Actual Build-up (Continuous)</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CurveLine;