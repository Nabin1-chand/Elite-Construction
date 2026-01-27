import React from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine,
  Dot,
} from 'recharts';

// Data based on specfic.PNG pattern
const data = [
  { date: '2024-08-13', sg: 1.442 },
  { date: '2024-08-15', sg: 1.477 },
  { date: '2024-08-16', sg: 1.464 },
  { date: '2024-08-17', sg: 1.456 },
  { date: '2024-08-18', sg: 1.430 },
  { date: '2024-08-19', sg: 1.430 },
  { date: '2024-08-20', sg: 1.424 },
  { date: '2024-08-21', sg: 1.472 },
  { date: '2024-08-22', sg: 1.456 },
  { date: '2024-08-23', sg: 1.462 },
  { date: '2024-08-24', sg: 1.422 },
  { date: '2024-08-25', sg: 1.478 },
  { date: '2024-08-26', sg: 1.520 }, // Out of Spec (High)
  { date: '2024-08-27', sg: 1.433 },
  { date: '2024-08-28', sg: 1.431 },
  { date: '2024-08-29', sg: 1.431 },
  { date: '2024-08-30', sg: 1.438 },
  { date: '2024-08-31', sg: 1.452 },
  { date: '2024-09-01', sg: 1.446 },
  { date: '2024-09-02', sg: 1.438 },
  { date: '2024-09-03', sg: 1.457 },
  { date: '2024-09-04', sg: 1.428 },
  { date: '2024-09-05', sg: 1.380 }, // Out of Spec (Low)
  { date: '2024-09-06', sg: 1.442 },
  { date: '2024-09-07', sg: 1.447 },
  { date: '2024-09-08', sg: 1.467 },
  { date: '2024-09-09', sg: 1.432 },
  { date: '2024-09-10', sg: 1.451 },
  { date: '2024-09-11', sg: 1.456 },
  { date: '2024-09-12', sg: 1.423 },
];

const MIN_SPEC = 1.400;
const MAX_SPEC = 1.500;

// Custom Dot to handle "Out of Spec" red styling
const CustomizedDot = (props) => {
  const { cx, cy, payload } = props;
  if (payload.sg > MAX_SPEC || payload.sg < MIN_SPEC) {
    return <Dot cx={cx} cy={cy} r={6} fill="red" stroke="black" strokeWidth={1} />;
  }
  return <Dot cx={cx} cy={cy} r={4} fill="#2D3748" />;
};

const GroutQualityChart = () => {
  return (
    <Box w="full" maxW="1100px" mx="auto" p={6} bg="white" borderRadius="xl">
      <VStack align="stretch" spacing={4}>
        <Heading size="md" fontWeight="normal">Grout Specific Gravity: Daily Quality Control Chart</Heading>
        
        <Box h="450px" w="100%" border="1px solid" borderColor="gray.800" p={2}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#E2E8F0" />
              
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 11 }} 
                tickLine={true}
                axisLine={true}
                interval={4}
              />
              
              <YAxis 
                domain={[1.350, 1.550]} 
                ticks={[1.350, 1.375, 1.400, 1.425, 1.450, 1.475, 1.500, 1.525, 1.550]}
                tick={{ fontSize: 11 }}
                label={{ value: 'Specific Gravity (SG)', angle: -90, position: 'insideLeft', fontSize: 12, offset: 0 }}
              />

              <Tooltip />

              {/* Shaded Allowed Range (1.4 - 1.5) */}
              <ReferenceArea 
                y1={MIN_SPEC} 
                y2={MAX_SPEC} 
                fill="#E6FFFA" 
                fillOpacity={0.8} 
              />

              {/* Red Dashed Spec Lines */}
              <ReferenceLine y={MIN_SPEC} stroke="#E53E3E" strokeDasharray="5 5" />
              <ReferenceLine y={MAX_SPEC} stroke="#E53E3E" strokeDasharray="5 5" />

              <Line
                type="monotone"
                dataKey="sg"
                stroke="#2D3748"
                strokeWidth={2}
                dot={<CustomizedDot />}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Legend matching specfic.PNG */}
        <HStack justify="flex-end" spacing={6} pr={4}>
          <HStack spacing={2}>
            <Box w="12px" h="12px" borderRadius="full" bg="#2D3748" border="1px solid black" />
            <Text fontSize="xs">Daily Reading</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="20px" h="12px" bg="#E6FFFA" border="1px solid" borderColor="teal.100" />
            <Text fontSize="xs">Allowed Range (1.4 - 1.5)</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="12px" h="12px" borderRadius="full" bg="red" border="1px solid black" />
            <Text fontSize="xs">Out of Spec</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default GroutQualityChart;