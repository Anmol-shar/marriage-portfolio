import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Image,
  Button
} from "@chakra-ui/react";

const steps = [
  {
    id: "01",
    title: "Define Your Partner Preferences",
    img: "/src/assets/images/procees1.png"
  },
  {
    id: "02",
    title: "Browse Profiles",
    img: "/src/assets/images/process2.png"
  },
  {
    id: "03",
    title: "Send Interests & Connect",
    img: "/src/assets/images/process3.png"
  }
];

const StepsSection = () => {
  return (
    <Box bg="gray.100" my="4px" maxW="80%" p={20} mx="auto" borderRadius="4xl">
  
      <Container maxW="container.xl">

        <Stack gap={4} textAlign="center" mb={12}>
          <Text
            fontSize="3xl"
            color="pink.500"
            fontWeight="bold"
          >
            THREE SIMPLE STEPS TO
          </Text>

          <Heading>
            Find the <Text as="span" color="pink.500">One for You</Text>
          </Heading>
        </Stack>

        <SimpleGrid columns={[1, 1, 3]} gap={10}>

          {steps.map((step) => (
            <Stack key={step.id} align="center" textAlign="center">

              <Image
                src={step.img}
                alt={step.title}
                boxSize="160px"
                objectFit="contain"
              />

              <Text
                fontWeight="bold"
                color="pink.500"
                fontSize="sm"
              >
                {step.id}.
              </Text>

              <Text fontWeight="medium">
                {step.title}
              </Text>

            </Stack>
          ))}

        </SimpleGrid>

        <Stack align="center" mt={12}>
          <Button
            size="lg"
            bg="pink.500"
            color="white"
            _hover={{ bg: "pink.600" }}
          >
            Get Started
          </Button>
        </Stack>

      </Container>
    </Box>
  );
};

export default StepsSection;