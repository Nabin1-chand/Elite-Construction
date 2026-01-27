import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Center,
} from '@chakra-ui/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  Label
} from 'recharts';

// Mock data reflecting the pattern in the image
const data = [
  { id: 'B1001', volume: 50000 },
  { id: 'B0001', volume: 58500 },
  { id: 'B1006', volume: 21000 },
  { id: 'B0022', volume: 60000 },
  { id: 'B0003', volume: 5000 },
  { id: 'B0002', volume: 40000 },
  { id: 'B0017', volume: 30000 },
  { id: 'B1002', volume: 2300 },
  { id: 'B0033', volume: 2150 },
  { id: 'B0022', volume: 24000 },
  { id: 'B1009', volume: 22500 },
  { id: 'B1112', volume: 26000 },
  { id: 'B1111', volume: 27000 },
  { id: 'B1105', volume: 58000 },
  { id: 'B715', volume: 58200 },
  { id: 'B006', volume: 4500 },
  { id: 'B113', volume: 50000 },
  { id: 'B007', volume: 58100 },
  { id: 'T002', volume: 57900 },
  { id: 'B110', volume: 58050 },
  { id: 'B004', volume: 58300 },
  { id: 'B92', volume: 58400 },
];

const JettingVolumeGraph = () => {
  // Average calculation for the red reference line
  const averageValue = 58000; 

  return (
    <Box w="full" p={6} bg="white" borderRadius="xl" boxShadow="md">
      <VStack spacing={6} align="stretch">
        <Heading size="md" textAlign="center" fontWeight="normal">
          Jetting Volume for 92 Boreholes
        </Heading>

        <Box h="500px" w="100%">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              
              <XAxis 
                dataKey="id" 
                tick={{ fontSize: 10, fill: '#4A5568' }}
                angle={-45}
                textAnchor="end"
                interval={0}
                label={{ value: 'Borehole ID', position: 'insideBottom', offset: -45, fontSize: 12, fontWeight: 'bold' }}
              />
              
              <YAxis 
                domain={[0, 65000]}
                tick={{ fontSize: 12, fill: '#4A5568' }}
                label={{ value: 'Jetting Volume (H)', angle: -90, position: 'insideLeft', offset: -30, fontSize: 12, fontWeight: 'bold' }}
              />

              <Tooltip 
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />

              {/* Red Horizontal Average Line */}
              <ReferenceLine y={averageValue} stroke="#E53E3E" strokeWidth={2}>
                <Label 
                  value="Average" 
                  position="right" 
                  fill="#E53E3E" 
                  fontSize={10} 
                  fontWeight="bold" 
                />
              </ReferenceLine>

              {/* Data Bars with specific Green color */}
              <Bar dataKey="volume" fill="#48BB78" barSize={15}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#48BB78" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Legend matching the image layout */}
        <HStack justify="flex-end" pr={10} spacing={4}>
          <HStack spacing={2}>
            <Box w="20px" h="2px" bg="#E53E3E" />
            <Text fontSize="xs" color="gray.600">Average</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default JettingVolumeGraph;