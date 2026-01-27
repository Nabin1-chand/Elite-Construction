import { Flex, Box } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <Flex direction="column" h="100vh" w="100vw" overflow="hidden">
      {/* Header */}
      <Box flexShrink={0} position="sticky" top={0} zIndex={10}>
        <Header />
      </Box>

      {/* Body: Sidebar + Main content */}
      <Flex flex="1" overflow="hidden">
        {/* Sidebar */}
        <Box w="250px" flexShrink={0} bg="white">
          <Sidebar />
        </Box>

        {/* Scrollable content */}
        <Box
          flex="1"
          p={6}
          bg="gray.50"
          minH="0"
          display="flex"
          flexDirection="column"
          overflowY="auto"
        >
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

// ✅ Make sure default export exists
export default DashBoardLayout;
