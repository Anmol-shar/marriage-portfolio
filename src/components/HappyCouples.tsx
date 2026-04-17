import { Box, Heading, SimpleGrid, Image, Text, Stack } from "@chakra-ui/react";

const HappyCouples = () => {
  return (
    <Box bg="gray.50" py={{ base: 10, md: 16 }} px={{ base: 4, md: 8 }}>
      
      <Heading
        textAlign="center"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        mb={{ base: 6, md: 10 }}
      >
        Our Happy Couples ❤️
      </Heading>
      <Text
  textAlign="center"
  fontSize={{ base: "sm", md: "lg" }}
  color="gray.500"
  fontStyle="italic"
  maxW="600px"
  mx="auto"
  mb={{ base: 6, md: 10 }}
>
  Real love stories built on trust, compatibility, and meaningful connections.
</Text>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={{ base: 6, md: 8 }}
        maxW="1200px"
        mx="auto"
      >

        <Stack align="center" borderRadius="lg" 
          _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
          transition="0.3s"
        >
          <Image  
            src="/src/assets/images/couples/couple1.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h={{ base: "200px", md: "250px" }}
            w="100%"
          />
          <Text fontWeight="bold">Rahul ❤️ Priya</Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Married in 2025
          </Text>
        </Stack>

        <Stack align="center"   borderRadius="lg" 
          _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
          transition="0.3s"
        >
          <Image
            src="/src/assets/images/couples/couple2.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h={{ base: "200px", md: "250px" }}
            w="100%"
          />
          <Text fontWeight="bold">Aman ❤️ Neha</Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Married in 2025
          </Text>
        </Stack>

        <Stack align="center"   borderRadius="lg"  
          _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
          transition="0.3s"
        >
          <Image
            src="/src/assets/images/couples/couple3.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h={{ base: "200px", md: "250px" }}
            w="100%"
          />
          <Text fontWeight="bold">Karan ❤️ Meera</Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Married in 2024
          </Text>
        </Stack>

        <Stack align="center"   borderRadius="lg"  
          _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
          transition="0.3s"
        >
          <Image
            src="/src/assets/images/couples/couple4.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h={{ base: "200px", md: "250px" }}
            w="100%"
          />
          <Text fontWeight="bold">Rohit ❤️ Ananya</Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Married in 2024
          </Text>
        </Stack>

        <Stack align="center"   borderRadius="lg"  
          _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
          transition="0.3s"
        >
          <Image
            src="/src/assets/images/couples/couple5.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h={{ base: "200px", md: "250px" }}
            w="100%"
          />
          <Text fontWeight="bold">Vikram ❤️ Pooja</Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Married in 2023
          </Text>
        </Stack>

        <Stack align="center"   borderRadius="lg"  
          _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
          transition="0.3s"
        >
          <Image
            src="/src/assets/images/couples/couple1.jpeg"
            borderRadius="lg"
            objectFit="cover"
            h={{ base: "200px", md: "250px" }}
            w="100%"
          />
          <Text fontWeight="bold">Siddharth ❤️ Kavya</Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Married in 2025
          </Text>
        </Stack>

      </SimpleGrid>
    </Box>
  );
};

export default HappyCouples;