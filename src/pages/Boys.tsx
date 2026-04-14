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
          image="/src/assets/images/Boys/Abhishek_Goel.jpeg"
        />

        <ProfileCard
          name="Amit Kumar"
          age={30}
          profession="Businessman"
          image="/src/assets/images/Boys/Akhil_Garg.jpeg"
        />
        <ProfileCard
          name="Rahul Sharma"
          age={28}
          profession="Software Engineer"
          image="/src/assets/images/Boys/Ankit_Goel.jpeg"
        />

        <ProfileCard
          name="Amit Kumar"
          age={30}
          profession="Businessman"
          image="/src/assets/images/Boys/Gaurav_Singla.jpeg"
        />
        <ProfileCard
          name="Rahul Sharma"
          age={28}
          profession="Software Engineer"
          image="/src/assets/images/Boys/Prajjval_Garg.jpeg"
        />

        <ProfileCard
          name="Amit Kumar"
          age={30}
          profession="Businessman"
          image="/src/assets/images/Boys/Rohit_Singla.jpeg"
        />
        <ProfileCard
          name="Amit Kumar"
          age={30}
          profession="Businessman"
          image="/src/assets/images/Boys/Udit_Garg.jpeg"
        />
        <ProfileCard
          name="Amit Kumar"
          age={30}
          profession="Businessman"
          image="/src/assets/images/Boys/Vidit_Garg.jpeg"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Boys;