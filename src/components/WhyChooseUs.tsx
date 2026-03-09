import { Box, Heading, Text, SimpleGrid, Stack, Icon } from "@chakra-ui/react";
import { FaUserCheck, FaHeart, FaShieldAlt, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <Box py={20} bg="white">
      <Heading textAlign="center" mb={12}>
        Why Choose Us
      </Heading>

      <SimpleGrid columns={[1, 2, 4]} gap={10} maxW="1200px" mx="auto">

        <Stack align="center" textAlign="center">
          <Icon as={FaUserCheck} boxSize={10} color="pink.500" />
          <Text fontWeight="bold">Verified Profiles</Text>
          <Text fontSize="sm" color="gray.500">
            Every profile is verified to ensure genuine and trusted matches.
          </Text>
        </Stack>

        <Stack align="center" textAlign="center">
          <Icon as={FaHeart} boxSize={10} color="pink.500" />
          <Text fontWeight="bold">Successful Marriages</Text>
          <Text fontSize="sm" color="gray.500">
            We have helped many couples find their perfect life partner.
          </Text>
        </Stack>

        <Stack align="center" textAlign="center">
          <Icon as={FaShieldAlt} boxSize={10} color="pink.500" />
          <Text fontWeight="bold">Privacy & Security</Text>
          <Text fontSize="sm" color="gray.500">
            Your personal information is always safe and protected.
          </Text>
        </Stack>

        <Stack align="center" textAlign="center">
          <Icon as={FaHandshake} boxSize={10} color="pink.500" />
          <Text fontWeight="bold">Personal Support</Text>
          <Text fontSize="sm" color="gray.500">
            Our team provides dedicated support to help you find the right match.
          </Text>
        </Stack>

      </SimpleGrid>
    </Box>
  );
};

export default WhyChooseUs;