import {
  Dialog,
  Portal,
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

const FounderPopup = () => {
  return (
    <Dialog.Root defaultOpen placement="center">
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content
            maxW="900px"
            borderRadius="2xl"
            overflow="hidden"
          >
            <Dialog.CloseTrigger
  position="absolute"
  top="4"
  right="4"
  p={2}
  cursor="pointer"
>
  <IoClose size="20px"
  color="red"
     />
</Dialog.CloseTrigger>

            <Dialog.Body p={0} >
              <Flex direction={["column", "column", "row"]}>

                {/* Left Side Image */}
               <Box
  flex="1"
  display="flex"
  alignItems="center"
  justifyContent="center"
  overflow="hidden"
  p="2rem"
>
  <Image
    src="/src/assets/images/CEO.jpeg"
    w="100%"
    h="100%"
    maxH="400px"
    objectFit="cover"
    objectPosition="center"
  />
</Box>

                {/* Right Side Content */}
                <Box flex="1" p={8}>
                  <Stack gap={5}>

                    <Text
                      color="pink.500"
                      fontWeight="bold"
                      letterSpacing="wide"
                    >
                      FOUNDER MESSAGE
                    </Text>

                    <Heading size="lg">
                      Abha Sharma
                    </Heading>

                    <Text fontWeight="semibold" color="gray.600">
                      BA.LLB | 16+ Years Experience
                    </Text>

                    <Text color="gray.600">
                      Welcome to our trusted matrimonial platform.
                      For the last 16 years, we have helped families
                      find meaningful and lifelong relationships.
                    </Text>

                    <Text color="gray.600">
                      We also proudly support marriages for
                      underprivileged girls free of cost.
                    </Text>

                   <Dialog.CloseTrigger asChild position="relative">
  <Button colorScheme="pink">
    Explore Website
  </Button>
</Dialog.CloseTrigger>
                  </Stack>
                </Box>

              </Flex>
            </Dialog.Body>

          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default FounderPopup;