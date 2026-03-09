import { Box, Heading, SimpleGrid, Image, Text, Stack } from "@chakra-ui/react";

const HappyCouples = () => {
  return (
    <Box py={20} bg="gray.50">
      <Heading textAlign="center" mb={10}>
        Our Happy Couples ❤️
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} gap={8} maxW="1200px" mx="auto">
        
        <Stack align="center">
          <Image
            src="/src/assets/images/couple1.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Rahul ❤️ Priya</Text>
          <Text fontSize="sm" color="gray.500">Married in 2023</Text>
        </Stack>

        <Stack align="center">
          <Image
            src="/src/assets/images/couple2.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Aman ❤️ Neha</Text>
          <Text fontSize="sm" color="gray.500">Married in 2024</Text>
        </Stack>
        <Stack align="center">
          <Image
            src="/src/assets/images/couple2.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Aman ❤️ Neha</Text>
          <Text fontSize="sm" color="gray.500">Married in 2024</Text>
        </Stack>
        <Stack align="center">
          <Image
            src="/src/assets/images/couple2.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Aman ❤️ Neha</Text>
          <Text fontSize="sm" color="gray.500">Married in 2024</Text>
        </Stack>
        <Stack align="center">
          <Image
            src="/src/assets/images/couple2.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Aman ❤️ Neha</Text>
          <Text fontSize="sm" color="gray.500">Married in 2024</Text>
        </Stack>
        <Stack align="center">
          <Image
            src="/src/assets/images/couple2.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Aman ❤️ Neha</Text>
          <Text fontSize="sm" color="gray.500">Married in 2024</Text>
        </Stack>

        </SimpleGrid>
        </Box>
  );
}

export default HappyCouples;