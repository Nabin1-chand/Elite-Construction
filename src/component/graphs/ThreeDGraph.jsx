import React, { Suspense } from 'react';
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid, Billboard, Text as Text3D } from '@react-three/drei';
import * as THREE from 'three';

// Individual Borehole Component
const Borehole = ({ position, color }) => (
  <mesh position={position}>
    <cylinderGeometry args={[0.28, 0.28, 12, 32]} />
    <meshStandardMaterial 
      color={color} 
      transparent 
      opacity={0.6} 
      roughness={0.1} 
    />
  </mesh>
);

// Numeric labels for the downside (floor) of the graph
const AxisLabels = () => {
  const ticks = [0, 1, 2, 3, 4, 5];
  return (
    <group>
      {/* X-Axis Numbers (Along the bottom front edge) */}
      {ticks.map((val) => (
        <Billboard
          key={`x-label-${val}`}
          position={[val - 2, 0.3, 3]} // Adjusted to sit near the red boundary
          follow={true}
        >
          <Text3D fontSize={0.25} color="black" anchorX="center">
            {val}
          </Text3D>
        </Billboard>
      ))}

      {/* Y-Axis Numbers (Along the bottom side edge) */}
      {ticks.map((val) => (
        <Billboard
          key={`y-label-${val}`}
          position={[-3, 0.3, val - 2]}
          follow={true}
        >
          <Text3D fontSize={0.25} color="black" anchorX="center">
            {val}
          </Text3D>
        </Billboard>
      ))}

      {/* Depth Axis Labels (Vertical markers) */}
      {[0, -4, -8, -12].map((val) => (
        <Billboard
          key={`z-label-${val}`}
          position={[-3.5, val, -2.5]}
          follow={true}
        >
          <Text3D fontSize={0.25} color="gray" anchorX="right">
            {val}
          </Text3D>
        </Billboard>
      ))}
    </group>
  );
};

const ThreeDGraph = () => {
  const colors = ["#4299E1", "#F56565", "#48BB78", "#ED8936", "#9F7AEA", "#38B2AC"];
  const boreholes = [];
  
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      boreholes.push({
        pos: [x - 2, -6, y - 2], // 12m height centered at -6 gives 0 to -12 range
        color: colors[(x + y) % colors.length]
      });
    }
  }

  return (
    <Box p={5} bg="white" borderRadius="xl" shadow="lg" maxW="900px" mx="auto">
      <VStack spacing={4} align="stretch">
        <Center flexDirection="column">
          <Heading size="md" fontWeight="600">Hexagonal - 3D Overview</Heading>
          <Text fontSize="sm" color="gray.500" fontWeight="bold">Height: 10.0m</Text>
        </Center>

        <Box h="600px" w="100%" bg="#f8f9fa" borderRadius="lg" position="relative" border="1px solid #E2E8F0">
          {/* UI Text Overlays */}
          <Text position="absolute" top={4} left={4} fontSize="xs" fontWeight="bold">Depth (m)</Text>
          <Text position="absolute" bottom={4} left="20%" fontSize="xs" fontWeight="bold">Y (m)</Text>
          <Text position="absolute" bottom={4} right="20%" fontSize="xs" fontWeight="bold">X (m)</Text>

          <Suspense fallback={<Center h="100%">Initializing 3D Engine...</Center>}>
            <Canvas>
              <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={45} />
              <ambientLight intensity={0.8} />
              <pointLight position={[10, 15, 10]} />
              
              {/* The Numeric Values on the downside */}
              <AxisLabels />

              {/* Red Surface Boundary */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <ringGeometry args={[3.45, 3.55, 4, 1, Math.PI / 4]} />
                <meshBasicMaterial color="red" side={THREE.DoubleSide} />
              </mesh>

              {/* Borehole Cylinders */}
              {boreholes.map((b, i) => (
                <Borehole key={i} position={b.pos} color={b.color} />
              ))}

              <Grid 
                infiniteGrid 
                fadeDistance={40} 
                cellColor="#cbd5e0" 
                sectionColor="#718096"
              />
              <OrbitControls enableDamping />
            </Canvas>
          </Suspense>
        </Box>
      </VStack>
    </Box>
  );
};

export default ThreeDGraph;