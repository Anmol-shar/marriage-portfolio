import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import ProfileCard from "../components/ProfileCard";

const Boys = () => {
  return (
    <Box p={10}>
      <Heading mb={6}>Boys Profiles</Heading>

      <SimpleGrid columns={[1,2,3]} gap={6}>
        <ProfileCard
          name="Rahul Sharma"
          age={28}
          profession="Software Engineer"
          image="https://randomuser.me/api/portraits/men/1.jpg"
        />

        <ProfileCard
          name="Amit Kumar"
          age={30}
          profession="Businessman"
          image="https://randomuser.me/api/portraits/men/2.jpg"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Boys;