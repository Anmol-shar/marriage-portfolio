import { Box, Heading, Text, Button, Stack, Flex } from "@chakra-ui/react";
import StepCount from "../components/StepCount";
import ExclusiveService from "../components/ExclusiveService";

const Home = () => {
  return (
    <Box
      h="90vh"
      w="100%"
      bgImage="url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486')"
      bgSize="cover"
      position="sticky"
    
    >

      {/* Dark Overlay */}
      <Box
        position="absolute"
         
        w="100%"
        h="100%"
        bg="blackAlpha.600" 
      />

      {/* Content */}
      <Flex
        position="relative"
        h="100%"
        align="center"
        justify="flex-start"
        textAlign="center"
        color="white"
        px={4}
      >
        <Stack gap={6} >
          <Heading size="5xl" fontWeight="bold">
            Find Your Perfect Life Partner
          </Heading>

          <Text fontSize="lg">
            Trusted Matrimonial Platform where families connect
            and relationships begin with love and values.
          </Text>

          <Flex gap={4} justify="center">
            <Button    size="lg">
              View Profiles
            </Button>

            <Button bg="white" color="pink.500" size="lg">
              Register Now
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <StepCount /> 
            <ExclusiveService />


    </Box>
  );
};

export default Home;