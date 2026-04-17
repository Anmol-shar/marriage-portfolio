import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Container,
  SimpleGrid
} from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box>

      {/* ✅ Hero Section */}
      <Box position="relative" w="100%" h={{ base: "40vh", md: "60vh" }}>
        
        <Image
          src="/src/assets/images/meeting/aboutUs.jpg" // change image if needed
          w="100%"
          h="100%"
          objectFit="cover"
        />

        {/* Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.400"
        />

        {/* Centered Text */}
     <Flex
  position="absolute"
  top="0"
  left="0"
  w="100%"
  h="100%"
  align="center"
  justify="center"
>
  <Stack align="center" gap={3}>
    <Heading
      color="white"
      fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
      fontWeight="bold"
    >
      About Us
    </Heading>

    <Text
      color="gray.200"
      fontSize={{ base: "sm", md: "lg" }}
      fontStyle="italic"
      mt="1rem"
    >
      Your Trusted Partner in Innovation
    </Text>
  </Stack>
</Flex>
      </Box>


      {/* Founder Section */}
      <Container maxW="container.xl">
        <Flex
          py="2rem"
          align="center"
          gap={10}
          direction={["column", "column", "row"]}
        >

          <Box flex="1">
            <Image
              src="/src/assets/images/CEO.jpeg"
              borderRadius="lg"
              shadow="xl"
              w="100%"
              h={{ base: "10%", md: "400px" }}
              objectFit="cover"
            />
          </Box>

          <Box flex="1">
            <Stack gap={5}>
              <Heading color="pink.500">
                Meet Our Founder
              </Heading>

              <Heading size="lg">Abha Sharma</Heading>

              <Text fontWeight="bold">
                BA.LLB | 16+ Years Experience in Marriage Bureau
              </Text>

              <Text fontSize="lg">
                For the last 16 years, our mission has been to help
                families find meaningful and lifelong relationships
                built on trust and shared values.
              </Text>

              <Text>
                Marriage is not just about two individuals, it is about
                the coming together of two families with love and respect.
              </Text>
            </Stack>
          </Box>

        </Flex>
      </Container>


      {/* VIP Shaadi Section */}
      <Box bg="pink.50" py={20}>
        <Container maxW="container.xl">

          <Heading textAlign="center" mb={10} color="pink.600">
            VIP Shaadi Service
          </Heading>

          <Text textAlign="center" maxW="700px" mx="auto" mb={10}>
            Our VIP Shaadi service provides personalized matchmaking
            for families looking for premium and verified profiles.
          </Text>

          <SimpleGrid columns={[1, 1, 3]} gap={8}>

            <Box p={6} bg="white" shadow="md" borderRadius="lg">
              <Heading size="md">Premium Profiles</Heading>
              <Text mt={3}>
                Access to high-quality and verified profiles.
              </Text>
            </Box>

            <Box p={6} bg="white" shadow="md" borderRadius="lg">
              <Heading size="md">Personal Matchmaking</Heading>
              <Text mt={3}>
                Dedicated support to find the perfect partner.
              </Text>
            </Box>

            <Box p={6} bg="white" shadow="md" borderRadius="lg">
              <Heading size="md">Confidential Service</Heading>
              <Text mt={3}>
                100% privacy and secure matchmaking process.
              </Text>
            </Box>

          </SimpleGrid>

        </Container>
      </Box>


      {/* Weekly Shaadi Section */}
      <Container maxW="container.xl" py={20}>

        <Heading textAlign="center" mb={10}>
          Weekly Shaadi Meetings
        </Heading>

        <Text textAlign="center" maxW="700px" mx="auto" mb={10}>
          Every week we organize meetings where families can meet
          suitable matches in a friendly and comfortable environment.
        </Text>

        <SimpleGrid columns={[1, 1, 3]} gap={8}>

          <Box p={6} shadow="md" borderRadius="lg">
            <Heading size="md">Family Interaction</Heading>
            <Text mt={3}>
              Families can meet and interact personally.
            </Text>
          </Box>

          <Box p={6} shadow="md" borderRadius="lg">
            <Heading size="md">Verified Participants</Heading>
            <Text mt={3}>
              All participants are verified by our bureau.
            </Text>
          </Box>

          <Box p={6} shadow="md" borderRadius="lg">
            <Heading size="md">Comfortable Environment</Heading>
            <Text mt={3}>
              A respectful and secure space for discussions.
            </Text>
          </Box>

        </SimpleGrid>

      </Container>


      {/* Experience Section */}
      <Box bg="pink.500" color="white" py={20}>
        <Container maxW="container.xl">

          <SimpleGrid columns={[1, 2, 4]} gap={8} textAlign="center">

            <Box>
              <Heading>16+</Heading>
              <Text>Years Experience</Text>
            </Box>

            <Box>
              <Heading>1000+</Heading>
              <Text>Successful Matches</Text>
            </Box>

            <Box>
              <Heading>5000+</Heading>
              <Text>Registered Profiles</Text>
            </Box>

            <Box>
              <Heading>100%</Heading>
              <Text>Trusted Service</Text>
            </Box>

          </SimpleGrid>

        </Container>
      </Box>

    </Box>
  );
};

export default AboutUs;