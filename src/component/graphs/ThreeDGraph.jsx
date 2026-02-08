import React, { Suspense } from "react";
import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Grid,
  Billboard,
  Text as Text3D,
} from "@react-three/drei";
import * as THREE from "three";

/* =========================
   Borehole Component
========================= */
const Borehole = ({ position, color }) => (
  <mesh position={position}>
    <cylinderGeometry args={[0.28, 0.28, 8, 32]} />
    <meshStandardMaterial
      color={color}
      transparent
      opacity={0.6}
      roughness={0.1}
    />
  </mesh>
);

/* =========================
   Axis Labels
========================= */
const AxisLabels = () => {
  const ticks = [0, 1, 2, 3, 4, 5];

  return (
    <group>
      {/* X Axis */}
      {ticks.map((val) => (
        <Billboard key={`x-${val}`} position={[val - 2, 0.25, 3]} follow>
          <Text3D fontSize={0.22} color="black" anchorX="center">
            {val}
          </Text3D>
        </Billboard>
      ))}

      {/* Y Axis */}
      {ticks.map((val) => (
        <Billboard key={`y-${val}`} position={[-3, 0.25, val - 2]} follow>
          <Text3D fontSize={0.22} color="black" anchorX="center">
            {val}
          </Text3D>
        </Billboard>
      ))}

      {/* Depth Axis (0 to -8) */}
      {[0, -2, -4, -6, -8].map((val) => (
        <Billboard key={`z-${val}`} position={[-3.5, val, -2.5]} follow>
          <Text3D fontSize={0.22} color="gray" anchorX="right">
            {val}
          </Text3D>
        </Billboard>
      ))}
    </group>
  );
};

/* =========================
   Main Component
========================= */
const ThreeDGraph = () => {
  const colors = [
    "#4299E1",
    "#F56565",
    "#48BB78",
    "#ED8936",
    "#9F7AEA",
    "#38B2AC",
  ];

  const boreholes = [];

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      boreholes.push({
        pos: [x - 2, -4, y - 2],
        color: colors[(x + y) % colors.length],
      });
    }
  }

  return (
    <Box h="500px" w="90%" maxW="1000px" p={5} mt={8} bg="white" mx="auto">
      <VStack spacing={4}>
        <Center flexDirection="column">
          <Heading size="md">Hexagonal - 3D Overview</Heading>
          <Text fontSize="sm" color="gray.500" fontWeight="bold">
            Height: 8.0m
          </Text>
        </Center>

        <Box
          h="520px"
          w="100%"
          bg="#f8f9fa"
          borderRadius="lg"
          position="relative"
          border="1px solid #E2E8F0"
        >
          <Text
            position="absolute"
            top={3}
            left={3}
            fontSize="xs"
            fontWeight="bold"
          >
            Depth (m)
          </Text>
          <Text
            position="absolute"
            bottom={3}
            left="20%"
            fontSize="xs"
            fontWeight="bold"
          >
            Y (m)
          </Text>
          <Text
            position="absolute"
            bottom={3}
            right="20%"
            fontSize="xs"
            fontWeight="bold"
          >
            X (m)
          </Text>

          <Suspense fallback={<Center h="100%">Loading 3D...</Center>}>
            <Canvas>
              <PerspectiveCamera makeDefault position={[9, 6, 9]} fov={45} />

              <ambientLight intensity={0.8} />
              <pointLight position={[10, 15, 10]} />

              <AxisLabels />

              {/* Boreholes */}
              {boreholes.map((b, i) => (
                <Borehole key={i} position={b.pos} color={b.color} />
              ))}

              <Grid
                infiniteGrid
                fadeDistance={30}
                cellColor="#CBD5E0"
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
