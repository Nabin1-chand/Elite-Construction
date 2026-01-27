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

// Data simulating depth-based readings
const generateLogData = (baseValue, variance) => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((depth) => ({
    depth,
    value: baseValue + (Math.random() * variance - variance / 2),
  }));
};

const LogChart = ({ title, unit, data, avg, specRange, showYAxis = false }) => {
  return (
    <VStack align="stretch" spacing={0} flex="1">
      {/* Header matching */}
      <VStack spacing={0} mb={2}>
        <Text fontSize="xs" fontWeight="bold" textAlign="center">{title}</Text>
        <Text fontSize="10px" color="gray.500">({unit})</Text>
      </VStack>

      <Box h="450px" border="1px solid" borderColor="gray.200" position="relative" bg="white">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            layout="vertical"
            data={data}
            margin={{ top: 10, right: 10, left: showYAxis ? 10 : -25, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#f0f0f0" />
            
            {/* X Axis at bottom: Represents the sensor 'Value' */}
            <XAxis 
              type="number" 
              dataKey="value" 
              domain={['auto', 'auto']} 
              tick={{ fontSize: 9 }} 
              label={{ value: 'Value', position: 'insideBottom', offset: -10, fontSize: 10 }}
            />

            {/* Y Axis: Represents 'Depth (m)'. Reversed so 0 is at the top */}
            <YAxis
              type="number"
              dataKey="depth"
              reversed
              hide={!showYAxis}
              domain={[1, 11]}
              tick={{ fontSize: 10, fontWeight: 'bold' }}
              label={showYAxis ? { value: 'Depth (m)', angle: -90, position: 'insideLeft', fontSize: 12 } : null}
            />

            <Tooltip cursor={{ stroke: 'red', strokeWidth: 1 }} />

            {/* Shaded Specs Range */}
            {specRange && (
              <ReferenceArea
                x1={specRange.min}
                x2={specRange.max}
                fill="#dcfce7"
                fillOpacity={0.6}
              />
            )}

            {/* Measured Data Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#1A365D"
              strokeWidth={2}
              dot={{ r: 3, fill: '#1A365D' }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Average Label at bottom */}
      <Center mt={2}>
        <Box border="1px solid" borderColor="blue.200" borderRadius="md" px={3} py={1} bg="blue.50">
          <Text fontSize="10px" color="blue.700" fontWeight="bold">Avg: {avg}</Text>
        </Box>
      </Center>
    </VStack>
  );
};

const JettingGraph = () => {
  const chartData = [
    { title: "Jetting Speed", unit: "rpm", avg: "8.00", spec: null },
    { title: "Lift Rate", unit: "m/min", avg: "10.0", spec: null },
    { title: "Jetting Pressure", unit: "MPa", avg: "330.00", spec: { min: 310, max: 350 } },
    { title: "Flow Rate", unit: "L/min", avg: "360.00", spec: { min: 340, max: 380 } },
    { title: "Air Flow", unit: "m³/min", avg: "10.00", spec: { min: 9, max: 12 } },
    { title: "Air Pressure", unit: "MPa", avg: "11.00", spec: { min: 10, max: 12 } },
  ];

  return (
    <Box w="full" p={8} bg="white">
      <VStack spacing={8} align="stretch">
        <Center>
          <Heading size="lg" color="gray.700">Borehole Geochemical Log</Heading>
        </Center>

        {/* Flex container to hold the Y-Axis label and the grid of charts */}
        <Flex>
          <SimpleGrid columns={6} spacing={0} w="full">
            {chartData.map((item, index) => (
              <LogChart
                key={index}
                title={item.title}
                unit={item.unit}
                avg={item.avg}
                specRange={item.spec}
                data={generateLogData(parseFloat(item.avg), parseFloat(item.avg) * 0.1)}
                showYAxis={index === 0} // Only show depth numbers on the first chart
              />
            ))}
          </SimpleGrid>
        </Flex>

        {/* Legend */}
        <HStack justify="center" spacing={10} pt={4}>
          <HStack spacing={2}>
            <Box w="30px" h="2px" bg="#1A365D" />
            <Text fontSize="xs" fontWeight="bold">Measured</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="30px" h="15px" bg="#dcfce7" borderRadius="sm" />
            <Text fontSize="xs" fontWeight="bold">Specs Range</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default JettingGraph;