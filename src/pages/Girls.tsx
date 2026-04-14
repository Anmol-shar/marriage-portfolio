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
          image="/src/assets/images/Girls/Ashtha.jpeg"
        />

        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Deepshika_Goel.jpeg"
        />
        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Girl1.jpeg"
        />
        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Harshita_Singhal.jpeg"
        />
        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Ignit_Goel.jpeg"
        />
        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Kajal_Mittal.jpeg"
        />
        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Mirdula Mittal.jpeg"
        />
        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Muskan.jpeg"
        />
        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Nikita_Gupta.jpeg"
        />
        <ProfileCard
          name="Sneha Gupta"
          age={27}
          profession="Doctor"
          image="/src/assets/images/Girls/Radha_Gupta.jpeg"
        />
        
      </SimpleGrid>
    </Box>
  );
};

export default Girls;