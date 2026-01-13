import { Box, VStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <Box
      bg="gray.100"
      w={{ base: "full", md: "220px" }}
      minH="calc(100vh - 60px)"
      p={4}
      display={{ base: "none", md: "block" }}
    >
      <VStack align="start" spacing={4}>
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            style={({ isActive }) => ({
              width: "100%",
              padding: "8px",
              borderRadius: "md",
              background: isActive ? "#2B6CB0" : "transparent",
              color: isActive ? "white" : "black",
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
