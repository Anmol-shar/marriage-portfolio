import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  VStack
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={10}>
      <Heading mb={6}>Contact Us</Heading>

      <VStack gap={4}>
        <Input placeholder="Your Name" />
        <Input placeholder="Email" />
        <Textarea placeholder="Message" />
        <Button colorScheme="pink">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;