import { Box, Heading, SimpleGrid, Image, Text, Stack } from "@chakra-ui/react";

const HappyCouples = () => {
  return (
    <Box bg="gray.50">
      <Heading textAlign="center" fontSize="5xl" fontWeight="bold"  mb={10}>
        Our Happy Couples ❤️
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} gap={8} maxW="1200px" mx="auto">
        
        <Stack align="center">
          <Image
            src="/src/assets/images/couples/couple1.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Rahul ❤️ Priya</Text>
          <Text fontSize="sm" color="gray.500">Married in 2025</Text>
        </Stack>

        <Stack align="center">
          <Image
            src="/src/assets/images/couples/couple2.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Aman ❤️ Neha</Text>
          <Text fontSize="sm" color="gray.500">Married in 2025</Text>
        </Stack>
        <Stack align="center">
          <Image
            src="/src/assets/images/couples/couple3.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Karan ❤️ Meera</Text>
          <Text fontSize="sm" color="gray.500">Married in 2024</Text>
        </Stack>
        <Stack align="center">
          <Image
            src="/src/assets/images/couples/couple4.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Rohit ❤️ Ananya</Text>
          <Text fontSize="sm" color="gray.500">Married in 2024</Text>
        </Stack>
        <Stack align="center">
          <Image
            src="/src/assets/images/couples/couple5.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Vikram ❤️ Pooja</Text>
          <Text fontSize="sm" color="gray.500">Married in 2023</Text>
        </Stack>
        <Stack align="center">
          <Image
            src="/src/assets/images/couples/couple1.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h="250px"
            w="100%"
          />
          <Text fontWeight="bold">Siddharth ❤️ Kavya</Text>
          <Text fontSize="sm" color="gray.500">Married in 2025</Text>
        </Stack>
       
       

        </SimpleGrid>
        </Box>
  );
}

export default HappyCouples;