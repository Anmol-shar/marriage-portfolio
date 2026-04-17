import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaUserCheck, FaHeart, FaShieldAlt, FaHandshake } from "react-icons/fa";


type FeatureCardProps = {
  icon: IconType;
  title: string;
  desc: string;
};

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => {
  return (
    <Stack
      align="center"
      textAlign="center"
      gap={3}
      p={{ base: 4, md: 6 }}
      borderRadius="xl"
      bg="white"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
      _hover={{
        boxShadow: "xl",
        transform: "translateY(-8px)",
      }}
      transition="0.3s"
    >
      <Box bg="pink.100" p={3} borderRadius="full">
        <Icon as={icon} boxSize={6} color="pink.500" />
      </Box>

      <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
        {title}
      </Text>

      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
        {desc}
      </Text>
    </Stack>
  );
};


const WhyChooseUs = () => {
  // ✅ Data Array
  const features = [
    {
      icon: FaUserCheck,
      title: "Verified Profiles",
      desc: "Every profile is verified to ensure genuine and trusted matches."
    },
    {
      icon: FaHeart,
      title: "Successful Marriages",
      desc: "We have helped many couples find their perfect life partner."
    },
    {
      icon: FaShieldAlt,
      title: "Privacy & Security",
      desc: "Your personal information is always safe and protected."
    },
    {
      icon: FaHandshake,
      title: "Personal Support",
      desc: "Our team provides dedicated support to help you find the right match."
    }
  ];

  return (
    <Box py={{ base: 10, md: 16, lg: 20 }} bg="white" mx="1rem">

      {/* Heading Section */}
      <Box textAlign="center" mb={10}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
        >
          Why Choose Us
        </Heading>

        <Text
          mt="2rem"
          fontSize={{ base: "sm", md: "lg" }}
          color="gray.500"
          maxW="600px"
          fontStyle="italic"
          mx="auto"
        >
          We provide trusted, secure, and personalized matchmaking to help you find your perfect life partner.
        </Text>
      </Box>

      {/* Cards Grid */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 4 }}
        gap={{ base: 6, md: 10 }}
        p={{ base: "1rem", md: "2rem" }}
        maxW="1200px"
        mx="auto"
      >
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </SimpleGrid>

    </Box>
  );
};

export default WhyChooseUs;