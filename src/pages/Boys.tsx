import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";

import ProfileCard from "../components/ProfileCard";

const Boys = () => {
  return (
    <Box>

      {/* HERO SECTION */}
      <Box
        position="relative"
        w="100%"
        h={{ base: "60vh", md: "60vh" }}
      >

        <Image
          src="/src/assets/images/meeting/aboutUs.jpg"
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

        {/* Text */}
        <Flex
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >

          <Stack
            align="center"
            gap={{ base: 3, lg: 7 }}
            w={{ base: "80%", lg: "40%" }}
          >

            <Heading
              color="white"
              fontSize={{
                base: "3xl",
                md: "5xl",
                lg: "6xl",
              }}
              fontWeight="bold"
            >
              Boys Profile
            </Heading>

            <Heading
              color="gray.200"
              fontSize={{
                base: "sm",
                md: "2xl",
                lg: "xl",
              }}
              textAlign="center"
            >
              Explore Trusted Boys Profiles
              for a Perfect Match
            </Heading>

            <Text
              color="gray.200"
              fontSize={{
                base: "sm",
                md: "lg",
              }}
              textAlign="center"
            >
              We bring you carefully verified
              profiles to help you find the
              perfect match with trust and
              confidence.
            </Text>

          </Stack>

        </Flex>

      </Box>

      {/* PROFILE CARDS */}
      <SimpleGrid
        columns={[1, 2, 3]}
        gap={6}
        p={5}
      >

        <ProfileCard
          profile={{
            id: 1,
            gender: "Boy",
            name: "Rahul Sharma",
            location: "Delhi",
            religion: "Hindu",
            caste: "Brahmin",
            age: 28,
            profession: "Software Engineer",
            image:
              "/src/assets/images/Boys/Abhishek_Goel.jpeg",
          }}
        />

        <ProfileCard
          profile={{
            id: 2,
            gender: "Boy",
            name: "Amit Kumar",
            location: "Noida",
            religion: "Hindu",
            caste: "Baniya",
            age: 30,
            profession: "Businessman",
            image:
              "/src/assets/images/Boys/Akhil_Garg.jpeg",
          }}
        />

        <ProfileCard
          profile={{
            id: 3,
            gender: "Boy",
            name: "Ankit Goel",
            location: "Gurgaon",
            religion: "Hindu",
            caste: "Agarwal",
            age: 27,
            profession: "CA",
            image:
              "/src/assets/images/Boys/Ankit_Goel.jpeg",
          }}
        />

      </SimpleGrid>

    </Box>
  );
};

export default Boys;