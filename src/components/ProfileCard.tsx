import { Box, Image, Text, Heading } from "@chakra-ui/react";

type Props = {
  name: string;
  age: number;
  profession: string;
  image: string;
};

const ProfileCard = ({ name, age, profession, image }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      textAlign="center"
      shadow="md"
    >
      <Image
        src={image}
        borderRadius="full"
        boxSize="200px"
        mx="auto"
      />

      <Heading size="md" mt={3}>
        {name}
      </Heading>

      <Text>Age: {age}</Text>
      <Text>{profession}</Text>
    </Box>
  );
};

export default ProfileCard;