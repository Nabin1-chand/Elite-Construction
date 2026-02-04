import { Box, VStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sections = [
    {
      title: "NAVIGATION",
      links: [
        { name: "Dashboard", path: "/dashboard", },
      ],
    },
    {
      title: "ADMINISTRATIVE",
      links: [
        { name: "Project Index", path: "/projects/showProject" },
        { name: "Create Project", path: "/projects/create" },
      ],
    },
    {
      title: "Drilling WORK",
      links: [
        {
          name: "Drilling ", path: "/projects/drilling",
        },

        { name: "Daily Drilling SummaryLog", path: "/projects/dailyDrillingSummary-log" },
        { name: "Angle Log", path: "/projects/angle-log" }


      ],
    },

    {
      title: "GROUTING WORK",
      links: [
        {
          name: "Grouting Log", path: "/projects/grouting-log",
        },
        {
          name: "Daily Grouting Log", path: "/projects/dailyGrouting-log",
        },
        ,
      ],
    },
    {
      title: "SUPERVISION WORK",
      links: [
        { name: "Daily Supervision Log", path: "/projects/supervision-log" },
      ],
    },
    {
      title: "REPORTS & ANALYTICS",
      links: [
        { name: "Daily Site Report", path: "/projects/dailySiteReport" },
        { name: "Summary Report", path: "/projects/summaryReport" },
        { name: "Deviation Graph", path: "/projects/devationGraph" },


      ],
    },

  ];

  return (
    <Box
      bg="white"
      h="100%"                 // ✅ take parent height
      overflowY="auto"         // ✅ enable sidebar scroll
      borderRight="1px solid"
      borderColor="gray.200"
      p={3}
      display={{ base: "none", md: "block" }}
      sx={{
        "&::-webkit-scrollbar": { width: "6px" },
        "&::-webkit-scrollbar-thumb": {
          background: "#CBD5E0",
          borderRadius: "4px",
        },
      }}
    >
      {sections.map((section) => (
        <Box key={section.title} mb={4}>
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="gray.400"
            mb={2}
            px={2}
          >
            {section.title}
          </Text>

          <VStack align="start" spacing={1}>
            {section.links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => ({
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  background: isActive ? "#2B6CB0" : "transparent",
                  color: isActive ? "white" : "#2D3748",
                  fontSize: "14px",
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </VStack>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
