import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Button,
  Image
} from "@chakra-ui/react";

const steps = [
  {
    id: "01",
    title: "Define Your Partner Preferences",
    img: "/src/assets/images/process/procees1.png"
  },
  {
    id: "02",
    title: "Browse Profiles",
    img: "/src/assets/images/process/process2.png"
  },
  {
    id: "03",
    title: "Send Interests & Connect",
    img: "/src/assets/images/process/process3.png"
  }
];

const StepsSection = () => {
  return (
    <Box
      bg="gray.100"
      my="1rem"
      maxW={{ base: "95%", md: "90%", lg: "80%" }}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12, lg: 16 }}
      mx="auto"
      borderRadius="4xl"
    >
      <Container maxW="container.xl">

        {/* Heading */}
        <Stack gap={3} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Text
            fontSize={{ base: "lg", md: "2xl", lg: "5xl" }}
            color="pink.500"
            fontWeight="bold"
          >
            THREE SIMPLE STEPS TO
          </Text>

          <Heading fontSize={{ base: "lg", md: "xl", lg: "3xl" }}>
            Find the{" "}
            <Text as="span" color="pink.500">
              One for You
            </Text>
          </Heading>
        </Stack>

        {/* Steps */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          gap={{ base: 6, md: 10 }}
        >
          {steps.map((step) => (
            <Stack
              key={step.id}
              align="center"
              textAlign="center"
              p={{ base: 4, md: 6 }}
              borderRadius="xl"
              _hover={{
                boxShadow: "lg",
                transform: "translateY(-5px)"
              }}
              transition="0.3s"
              bg="white"
            >
              <Image
                src={step.img}
                alt={step.title}
                boxSize={{ base: "80px", md: "120px", lg: "140px" }}
                objectFit="contain"
              />

              <Text
                fontWeight="bold"
                color="pink.500"
                fontSize="sm"
              >
                {step.id}.
              </Text>

              <Text
                fontWeight="medium"
                fontSize={{ base: "sm", md: "md" }}
              >
                {step.title}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>

        {/* Button */}
        <Stack align="center" mt={{ base: 8, md: 12 }}>
          <Button
            size={{ base: "md", md: "lg" }}
            bg="pink.500"
            color="white"
            _hover={{ bg: "pink.600" }}
            w={{ base: "100%", sm: "auto" }}
          >
            Get Started
          </Button>
        </Stack>

      </Container>
    </Box>
  );
};

export default StepsSection;