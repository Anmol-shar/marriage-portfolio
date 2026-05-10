import {
  Box,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";

import type { Profile } from "../data/Profile";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = ({
  profile,
}: ProfileCardProps) => {

  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      p={4}
    >

      <Image
        src={profile.image}
        h="250px"
        w="100%"
        objectFit="cover"
      />

      <Stack mt={4}>

        <Text fontWeight="bold">
          {profile.name}
        </Text>

        <Text>
          {profile.location}
        </Text>

      </Stack>

    </Box>
  );
};

export default ProfileCard;