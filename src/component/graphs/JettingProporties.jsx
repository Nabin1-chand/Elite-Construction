import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Heading,
  SimpleGrid,
  Center,
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
} from 'recharts';

// Realistic log data points
const data = [
  { depth: 1, val: 8.0 }, { depth: 2, val: 7.9 }, { depth: 3, val: 8.1 },
  { depth: 4, val: 8.2 }, { depth: 5, val: 8.0 }, { depth: 6, val: 7.9 },
  { depth: 7, val: 8.1 }, { depth: 8, val: 8.0 }, { depth: 9, val: 7.9 },
  { depth: 10, val: 8.0 }, { depth: 11, val: 7.9 }
];

const LogChart = ({ title, unit, avg, spec, showYAxis = false }) => {
  return (
    <VStack align="stretch" spacing={2} flex="1">
      {/* Title Section */}
      <VStack spacing={0}>
        <Text fontSize="xs" fontWeight="semibold" textAlign="center">{title}</Text>
        <Text fontSize="10px" color="gray.500">({unit})</Text>
      </VStack>

      {/* Chart Border Container */}
      <Box h="500px" border="1px solid" borderColor="gray.300" bg="white" position="relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 10, left: showYAxis ? 10 : -30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="1 1" stroke="#e2e8f0" />
            
            {/* Value Axis (Horizontal) */}
            <XAxis 
              type="number" 
              dataKey="val" 
              hide={false}
              axisLine={false}
              tick={{ fontSize: 9, fill: '#718096' }}
              label={{ value: 'Value', position: 'insideBottom', offset: -10, fontSize: 10 }}
              domain={['dataMin - 1', 'dataMax + 1']}
            />

            {/* Depth Axis (Vertical) */}
            <YAxis
              type="number"
              dataKey="depth"
              reversed
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fontWeight: 'bold' }}
              label={showYAxis ? { value: 'Depth (m)', angle: -90, position: 'insideLeft', offset: 10 } : null}
              domain={[1, 11]}
            />

            <Tooltip cursor={{ stroke: '#cbd5e0', strokeWidth: 1 }} />

            {/* Green Specs Range Background */}
            {spec && (
              <ReferenceArea
                x1={spec.min}
                x2={spec.max}
                fill="#dcfce7"
                fillOpacity={0.7}
              />
            )}

            {/* Data Line */}
            <Line
              type="monotone"
              dataKey="val"
              stroke="#1a365d"
              strokeWidth={2}
              dot={{ r: 2, fill: '#1a365d' }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Average Label Box */}
      <Center>
        <Box border="1px solid" borderColor="blue.200" borderRadius="md" px={2} py={0.5} bg="blue.50">
          <Text fontSize="10px" color="blue.800" fontWeight="bold">Avg: {avg}</Text>
        </Box>
      </Center>
    </VStack>
  );
};

const JettingGraph = () => {
  const chartConfigs = [
    { title: "Jetting Speed", unit: "rpm", avg: "5.00", spec: null },
    { title: "Lift Rate", unit: "m/min", avg: "18.00", spec: null },
    { title: "Jetting Pressure", unit: "MPa", avg: "230.00", spec: { min: 7, max: 9 } },
    { title: "Flow Rate", unit: "L/min", avg: "566.37", spec: { min: 7, max: 9 } },
    { title: "Air Flow", unit: "m³/min", avg: "10.00", spec: { min: 7.5, max: 9.5 } },
    { title: "Air Pressure", unit: "MPa", avg: "10.00", spec: { min: 7.5, max: 9.5 } },
  ];

  return (
    <Box w="full" p={10} bg="white">
      <VStack spacing={8} align="stretch">
        <Center>
          <Heading size="md" letterSpacing="wide">Borehole Geochemical Log</Heading>
        </Center>

        {/* 6-Column Grid matching image */}
        <SimpleGrid columns={6} spacing={4}>
          {chartConfigs.map((cfg, index) => (
            <LogChart
              key={index}
              title={cfg.title}
              unit={cfg.unit}
              avg={cfg.avg}
              spec={cfg.spec}
              showYAxis={index === 0} // Only show depth scale on the first chart
            />
          ))}
        </SimpleGrid>

        {/* Legend */}
        <HStack justify="center" spacing={12} pt={4}>
          <HStack spacing={2}>
            <Box w="30px" h="2px" bg="#1a365d" />
            <Text fontSize="xs" fontWeight="bold">Measured</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="30px" h="15px" bg="#dcfce7" border="1px solid" borderColor="green.200" />
            <Text fontSize="xs" fontWeight="bold">Specs Range</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default JettingGraph;