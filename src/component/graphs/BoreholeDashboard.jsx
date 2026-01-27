import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Select,
  Text,
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
  Label,
} from 'recharts';

const boreholeData = [
  { id: 'B1001', jetting: 30000, cement: 45 },
  { id: 'B0001', jetting: 58500, cement: 120 },
  { id: 'B1006', jetting: 25000, cement: 30 },
  { id: 'B1105', jetting: 58000, cement: 115 },
  { id: 'B715', jetting: 58200, cement: 118 },
  { id: 'B006', jetting: 45000, cement: 80 },
  { id: 'B007', jetting: 58100, cement: 110 },
  { id: 'T002', jetting: 57900, cement: 105 },
  { id: 'B92', jetting: 58400, cement: 125 },
];

const BoreholeDashboard = () => {
  const [viewType, setViewType] = useState('jetting');

  // Dynamic config based on dropdown selection
  const chartConfig = {
    jetting: {
      title: "Jetting Volume for Boreholes",
      yLabel: "Jetting Volume (H)",
      dataKey: "jetting",
      color: "#48BB78", // Green
      avgValue: 58000,
    },
    cement: {
      title: "Cement Used per Borehole",
      yLabel: "Cement Quantity (kg)",
      dataKey: "cement",
      color: "#3182CE", // Blue
      avgValue: 110,
    }
  };

  const active = chartConfig[viewType];

  return (
    <Box w="full" maxW="1000px" mx="auto" p={8} bg="gray.50" borderRadius="xl">
      <VStack spacing={1} align="stretch" bg="white" p={6} borderRadius="lg" boxShadow="md">
        
        {/* Dropdown Header */}
        <HStack justify="space-between" mb={4}>
          <Heading size="md">{active.title}</Heading>
          <Box w="250px">
            <Text fontSize="xs" fontWeight="bold" mb={1} color="gray.500">SELECT CHART VIEW</Text>
            <Select 
              value={viewType} 
              onChange={(e) => setViewType(e.target.value)}
              borderColor="gray.300"
              focusBorderColor="green.400"
            >
              <option value="jetting">Jetting Volume vs Borehole</option>
              <option value="cement">Cement Used vs Borehole</option>
            </Select>
          </Box>
        </HStack>

        {/* Dynamic Chart */}
        <Box h="500px" w="100%">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={boreholeData} margin={{ top: 20, right: 10, left: 30, bottom: 50 }}>
              <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#EDF2F7" />
              
              <XAxis 
                dataKey="id" 
                tick={{ fontSize: 10, fill: '#4A5568' }}
                angle={-45}
                textAnchor="end"
                interval={0}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#4A5568' }}
                label={{ value: active.yLabel, angle: -90, position: 'insideLeft', offset: -30, fontSize: 12, fontWeight: 'bold' }}
              />

              <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />

              {/* Dynamic Reference Line */}
              <ReferenceLine y={active.avgValue} stroke="#E53E3E" strokeWidth={1} strokeDasharray="3 3">
                <Label 
                  value={`Avg: ${active.avgValue}`} 
                  position="right" 
                  fill="#E53E3E" 
                  fontSize={10} 
                  fontWeight="bold" 
                />
              </ReferenceLine>

              {/* Dynamic Bar Color and Data Key */}
              <Bar 
                dataKey={active.dataKey} 
                fill={active.color} 
                barSize={20}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Legend */}
        <HStack justify="flex-end" pr={10}>
          <HStack spacing={2}>
            <Box w="12px" h="12px" bg={active.color} borderRadius="sm" />
            <Text fontSize="xs" fontWeight="bold">{active.dataKey.toUpperCase()}</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="20px" h="2px" bg="#E53E3E" borderTop="2px dashed" />
            <Text fontSize="xs" fontWeight="bold">AVERAGE</Text>
          </HStack>
        </HStack>

      </VStack>
    </Box>
  );
};

export default BoreholeDashboard;