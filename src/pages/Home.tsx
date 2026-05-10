import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import { useState } from "react";

import StepCount from "../components/StepCount";
import ExclusiveService from "../components/ExclusiveService";
import HappyCouples from "../components/HappyCouples";
import WhyChooseUs from "../components/WhyChooseUs";
import FounderPopup from "../components/FounderPopup";

import UserEntryPopup from "../components/UserEntryPopup";
import RequirementForm from "../components/RequirementForm";
import ProfileCard from "../components/ProfileCard";
import profiles from "../data/Profile";
import type { Profile } from "../data/Profile";
import type { Requirement } from "../data/Profile";


const Home = () => {

  // STEP 1 SHOW REQUIREMENT FORM
  const [showRequirement, setShowRequirement] =
    useState(false);

  // STEP 2 REQUIREMENT DATA
  const [requirement, setRequirement] =
    useState<Requirement>({
      gender: "",
      location: "",
      religion: "",
      caste: "",
    });

  // STEP 3 MATCH RESULTS
  const [results, setResults] =
    useState<Profile[]>([]);

  // SEARCH FUNCTION
  const handleSearch = () => {

    const filtered = profiles.filter((profile) => {

      return (

        profile.gender
          .toLowerCase()
          .includes(
            requirement.gender.toLowerCase()
          ) &&

        profile.location
          .toLowerCase()
          .includes(
            requirement.location.toLowerCase()
          ) &&

        profile.religion
          .toLowerCase()
          .includes(
            requirement.religion.toLowerCase()
          ) &&

        profile.caste
          .toLowerCase()
          .includes(
            requirement.caste.toLowerCase()
          )

      );
    });

    setResults(filtered);
  };

  return (
    <>

      {/* Founder Popup */}
      <FounderPopup />

      {/* User Entry Popup */}
      {!showRequirement && (
        <UserEntryPopup
          onNext={() =>
            setShowRequirement(true)
          }
        />
      )}

      {/* HERO SECTION */}
      <Box
        h="90vh"
        w="100%"
        bgImage="url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486')"
        bgSize="cover"
        bgRepeat="no-repeat"
        position="relative"
      >

        {/* DARK OVERLAY */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="blackAlpha.700"
        />

        {/* CONTENT */}
        <Flex
          position="relative"
          h="100%"
          align="center"
          justify="center"
          textAlign="center"
          color="white"
          px={4}
        >
        <Stack gap={6}>
          <Heading size="5xl" fontWeight="bold">
            Find Your Perfect Life Partner
            </Heading>

            <Text
              fontSize={["md", "lg"]}
              
            >
              Trusted Matrimonial Platform where
              families connect and relationships
              begin with love, trust, and values.
            </Text>

            <Flex
              gap={4}
              justify="center"
              flexWrap="wrap"
            >

              <Button
                size="lg"
                colorScheme="pink"
              >
                View Profiles
              </Button>

              <Button
                size="lg"
                bg="white"
                color="pink.500"
                _hover={{
                  bg: "gray.100",
                }}
              >
                Register Now
              </Button>

            </Flex>

          </Stack>

        </Flex>
      </Box>

      {/* REQUIREMENT FORM */}
      {showRequirement && (

        <Box
          py={20}
          px={4}
          bg="gray.50"
        >

          <RequirementForm
            requirement={requirement}
            setRequirement={setRequirement}
            onSearch={handleSearch}
          />

        </Box>
      )}

      {/* MATCHING RESULTS */}
      {results.length > 0 && (

        <Box
          py={20}
          px={[4, 8]}
        >

          <Heading
            textAlign="center"
            mb={10}
          >
            Matching Profiles ❤️
          </Heading>

          <SimpleGrid
            columns={[1, 2, 3]}
            gap={8}
          >

            {results.map((profile) => (

              <ProfileCard
                key={profile.id}
                profile={profile}
              />

            ))}

          </SimpleGrid>

        </Box>
      )}

      {/* OTHER SECTIONS */}

      <StepCount />

      <ExclusiveService />

      <HappyCouples />

      <WhyChooseUs />

    </>
  );
};

export default Home;