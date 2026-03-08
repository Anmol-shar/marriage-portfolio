import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import ProfileCard from "../components/ProfileCard";

const Girls = () => {
  return (
    <Box p={10}>
      <Heading mb={6}>Girls Profiles</Heading>

      <SimpleGrid columns={[1,2,3]} gap={6}>
        <ProfileCard
          name="Priya Verma"
          age={26}
          profession="Teacher"
          image="https://randomuser.me/api/portraits/women/1.jpg"
        />

        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="https://randomuser.me/api/portraits/women/2.jpg"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Girls;