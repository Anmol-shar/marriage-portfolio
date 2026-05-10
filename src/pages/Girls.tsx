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

const Girls = () => {
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

        {/* TEXT */}
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
              Girls Profile
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
              Find Your Perfect Bride
              with Confidence
            </Heading>

            <Text
              color="gray.200"
              fontSize={{
                base: "sm",
                md: "lg",
              }}
              textAlign="center"
            >
              We bring you trusted and
              carefully verified profiles
              to help you find the right
              partner with ease.
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
            gender: "Girl",
            name: "Priya Verma",
            location: "Delhi",
            religion: "Hindu",
            caste: "Brahmin",
            age: 26,
            profession: "Teacher",
            image:
              "/src/assets/images/Girls/Ashtha.jpeg",
          }}
        />

        <ProfileCard
          profile={{
            id: 2,
            gender: "Girl",
            name: "Sneha Gupta",
            location: "Noida",
            religion: "Hindu",
            caste: "Baniya",
            age: 27,
            profession: "Doctor",
            image:
              "/src/assets/images/Girls/Deepshika_Goel.jpeg",
          }}
        />

        <ProfileCard
          profile={{
            id: 3,
            gender: "Girl",
            name: "Harshita Singhal",
            location: "Gurgaon",
            religion: "Hindu",
            caste: "Agarwal",
            age: 25,
            profession: "Designer",
            image:
              "/src/assets/images/Girls/Harshita_Singhal.jpeg",
          }}
        />

        <ProfileCard
          profile={{
            id: 4,
            gender: "Girl",
            name: "Kajal Mittal",
            location: "Delhi",
            religion: "Hindu",
            caste: "Mittal",
            age: 24,
            profession: "Teacher",
            image:
              "/src/assets/images/Girls/Kajal_Mittal.jpeg",
          }}
        />

        <ProfileCard
          profile={{
            id: 5,
            gender: "Girl",
            name: "Muskan",
            location: "Faridabad",
            religion: "Hindu",
            caste: "Gupta",
            age: 26,
            profession: "HR Manager",
            image:
              "/src/assets/images/Girls/Muskan.jpeg",
          }}
        />

        <ProfileCard
          profile={{
            id: 6,
            gender: "Girl",
            name: "Nikita Gupta",
            location: "Delhi",
            religion: "Hindu",
            caste: "Gupta",
            age: 25,
            profession: "Doctor",
            image:
              "/src/assets/images/Girls/Nikita_Gupta.jpeg",
          }}
        />

      </SimpleGrid>

    </Box>
  );
};

export default Girls;