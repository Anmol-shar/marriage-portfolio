import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box textAlign="center" p={20}>
      <Heading color="pink.500">
        Welcome to Marriage Portfolio
      </Heading>

      <Text mt={4} fontSize="lg">
        Find the perfect life partner with family values.
      </Text>

      <Button mt={6} colorScheme="pink">
        View Profiles
      </Button>
    </Box>
  );
};

export default Home;