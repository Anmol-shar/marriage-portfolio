import {
  Box,
  Stack,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

import type { Requirement } from "../data/Profile";

interface RequirementFormProps {
  requirement: Requirement;

  setRequirement: React.Dispatch<
    React.SetStateAction<Requirement>
  >;

  onSearch: () => void;
}

const RequirementForm = ({
  requirement,
  setRequirement,
  onSearch,
}: RequirementFormProps) => {
  return (
    <Box
      p={8}
      bg="white"
      borderRadius="xl"
      shadow="md"
    >
      <Heading mb={6}>
        Find Your Match
      </Heading>

      <Stack gap={4}>

        <select
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
          onChange={(e) =>
            setRequirement({
              ...requirement,
              gender: e.target.value,
            })
          }
        >
          <option value="">
            Looking For
          </option>

          <option value="Boy">
            Boy
          </option>

          <option value="Girl">
            Girl
          </option>
        </select>

        <Input
          placeholder="Location"
          onChange={(e) =>
            setRequirement({
              ...requirement,
              location: e.target.value,
            })
          }
        />

        <Input
          placeholder="Religion"
          onChange={(e) =>
            setRequirement({
              ...requirement,
              religion: e.target.value,
            })
          }
        />

        <Input
          placeholder="Caste"
          onChange={(e) =>
            setRequirement({
              ...requirement,
              caste: e.target.value,
            })
          }
        />

        <Button
          colorScheme="pink"
          onClick={onSearch}
        >
          Search Match
        </Button>

      </Stack>
    </Box>
  );
};

export default RequirementForm;