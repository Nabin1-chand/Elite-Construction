import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Input,
  VStack,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Textarea,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FiImage } from "react-icons/fi";

const PhotoCard = () => {
  const [images, setImages] = useState([null, null, null, null,null,null]);
  const fileInputRefs = useRef([]);

  const handleBoxClick = (index) => {
    fileInputRefs.current[index].click();
  };

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    const updatedImages = [...images];
    updatedImages[index] = imageUrl;
    setImages(updatedImages);
  };

  return (
    <Box>
      {/* Photo Grid */}
      <Text align="center" fontSize="25" fontWeight="bold" textDecoration="underline">Daily Summary</Text>
      <SimpleGrid mt={4} columns={3} spacing={4}>
        {images.map((img, index) => (
          <Box
            key={index}
            height="200px"
            width="300px"
            borderRadius="lg"
            cursor="pointer"
            onClick={() => handleBoxClick(index)}
            bg={img ? "transparent" : "blue.500"}
            _hover={{ bg: img ? "transparent" : "blue.600" }}
          >
            <Input
              type="file"
              accept="image/*"
              display="none"
              ref={(el) => (fileInputRefs.current[index] = el)}
              onChange={(e) => handleImageChange(e, index)}
            />

            {img ? (
              <Image
                src={img}
                alt={`Photo ${index + 1}`}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="lg"
              />
            ) : (
              <VStack h="100%" justify="center" color="white">
                <FiImage size={34} />
                <Text fontSize="sm">Choose from gallery</Text>
              </VStack>
            )}
          </Box>
        ))}
      </SimpleGrid>

      {/* Remark Table */}
      <TableContainer mt={10}>
        <Table size="sm">
          <Tbody>
            <Tr>
              <Td
                
                fontWeight="bold"
                width="150px"

                border="1px solid #ccc"
                verticalAlign="top"
              >
                Remark
              </Td>
              <Td border="1px solid #ccc">
                 <Textarea
                 rowGap={2}
              rows={5}
                cols={10}

    size="sm"
    placeholder="Enter remark"
    resize="none"
    minH="36px"
    border="none"
  />
              </Td>
            </Tr>
          
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PhotoCard;




// export default PhotoCard;
