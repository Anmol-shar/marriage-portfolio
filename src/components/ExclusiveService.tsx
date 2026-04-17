import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Icon,
  HStack
} from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";
import { MdTune } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

const features = [
  {
    img: "/src/assets/images/meeting/meeting.jpg",
    icon: FaUserFriends,
    title: "Meet Your Relationship Manager",
    desc: "Connect with our highly experienced advisor who manages your profile."
  },
  {
    img: "/src/assets/images/meeting/meeting1.png",
    icon: MdTune,
    title: "Communicate your preferences",
    desc: "Consultation to understand your expectations in a prospective partner."
  },
  {
    img: "/src/assets/images/meeting/meeting.jpg",
    icon: AiFillCheckCircle,
    title: "Choose from handpicked profiles",
    desc: "We shortlist profiles matching your criteria for offline interactions."
  }
];

const ExclusiveService = () => {
  return (
    <Box m="0.5rem" py={{ base: 10, md: 20 }}>
      <Container maxW="container.xl">

        {/* Heading */}
        <Stack gap={3} mb={12} textAlign="center">
          <Text
            fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
            fontWeight="bold"
            color="gray.500"
          >
            PERSONALISED MATCH-MAKING SERVICE
          </Text>

          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            Introducing{" "}
            <Text as="span" color="pink.500">
              Exclusive
            </Text>
          </Heading>
        </Stack>

        {/* Grid Layout */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
          {features.map((item, index) => (
            <Stack
              key={index}
              gap={4}
              textAlign="center"
              p={4}
              borderRadius="lg"
              bg="white"
              _hover={{
                boxShadow: "lg",
                transform: "translateY(-5px)"
              }}
              transition="0.3s"
            >
              <Image
                src={item.img}
                borderRadius="lg"
                w="100%"
                h="auto"
              />
<HStack gap={{ base: "0.2rem", md: "0.5rem" }} align="start">
  <Icon as={item.icon} boxSize={{ base: 5, md: 6 }} color="pink.500" />

  <Text
    fontWeight="bold"
    fontSize={{ base: "sm", md: "md", lg: "lg" }}
  >
    {item.title}
  </Text>
</HStack>

              <Text fontSize="sm" color="gray.600">
                {item.desc}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
};

export default ExclusiveService;