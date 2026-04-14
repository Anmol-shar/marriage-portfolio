import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Flex,
  Icon
} from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";
import { MdTune } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

const ExclusiveService = () => {
  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="container.xl">

        {/* Heading */}
        <Stack align="center" gap={3} mb={10}>
          <Text
            fontSize="4xl" fontWeight="bold" 
            letterSpacing="wide"
            color="gray.500"
          >
            PERSONALISED MATCH-MAKING SERVICE
          </Text>

          <Heading textAlign="center"fontSize="2xl" fontWeight="bold" >
            Introducing{" "}
            <Text as="span" color="pink.500">
              Exclusive
            </Text>
          </Heading>

      
        </Stack>

        {/* Image */}
      <Flex justify="center" gap={6} mb={12}>
  <Box borderRadius="lg" overflow="hidden" maxW="400px">
    <Image
      src="/src/assets/images/meeting/meeting.jpg"
      w="100%"
      h="100%"
      objectFit="cover"
    />
  </Box>

  <Box borderRadius="lg" overflow="hidden" maxW="400px">
    <Image
      src="/src/assets/images/meeting/meeting1.png"
      w="100%"
      h="100%"
      objectFit="cover"
    />
  </Box>
    <Box borderRadius="lg" overflow="hidden" maxW="450px">
    <Image
      src="/src/assets/images/meeting/meeting2.jpg"
      w="100%"
      h="100%"
      objectFit="cover"
    />
  </Box>
</Flex>   

        {/* Features */}
        <SimpleGrid columns={[1, 1, 3]} gap={10}>

          <Flex gap={4}>
            <Icon as={FaUserFriends} boxSize={6} color="pink.500" />
            <Box>
              <Text fontWeight="bold">
                Meet Your Relationship Manager
              </Text>
              <Text fontSize="sm" color="gray.600">
                Connect with our highly experienced advisor who manages your profile.
              </Text>
            </Box>
          </Flex>

          <Flex gap={4}>
            <Icon as={MdTune} boxSize={6} color="pink.500" />
            <Box>
              <Text fontWeight="bold">
                Communicate your preferences
              </Text>
              <Text fontSize="sm" color="gray.600">
                Consultation to understand your expectations in a prospective partner.
              </Text>
            </Box>
          </Flex>

          <Flex gap={4}>
            <Icon as={AiFillCheckCircle} boxSize={6} color="pink.500" />
            <Box>
              <Text fontWeight="bold">
                Choose from handpicked profiles
              </Text>
              <Text fontSize="sm" color="gray.600">
                We shortlist profiles matching your criteria for offline interactions.
              </Text>
            </Box>
          </Flex>

        </SimpleGrid>

      </Container>
    </Box>
  );
};

export default ExclusiveService;