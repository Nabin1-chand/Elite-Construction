import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
} from "@chakra-ui/react";

const DailySitePhotoHeader = () => {
  const labelStyle = {
    fontWeight: "600",
    bg: "gray.100",
    width: "180px",
    whiteSpace: "nowrap",
  };

  const cellStyle = {
    border: "1px solid #CBD5E0",
    fontSize: "13px",
    padding: "8px",
  };

  return (
    <Box border="1px solid #CBD5E0" width="100%" maxW="900px">
      <Table size="sm" borderCollapse="collapse">
        <Tbody>
          <Tr>
            <Td {...cellStyle} {...labelStyle}>Project</Td>
            <Td {...cellStyle} colSpan={3}>
              MRTA Purple Line Project Contract 1 Underground Civil Works
            </Td>
          </Tr>

          <Tr>
            <Td {...cellStyle} {...labelStyle}>Site</Td>
            <Td {...cellStyle}>P19 (Receiving)</Td>

            <Td {...cellStyle} {...labelStyle}>Date</Td>
            <Td {...cellStyle}>22/10/2025</Td>
          </Tr>

          <Tr>
            <Td {...cellStyle} {...labelStyle}>Work</Td>
            <Td {...cellStyle} colSpan={3}>
              Mobilization Drilling machine and equipment
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default DailySitePhotoHeader;
