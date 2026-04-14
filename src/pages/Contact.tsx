import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
  SimpleGrid
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={10} >
      <Heading mb={10} fontSize="5xl" fontWeight="bold" textAlign="center" p="1rem">
        Contact Us
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap="0">
        
          <VStack p="1rem" maxW="80%" gap={4} bgColor="pink.500" align="stretch">
            <Input placeholder="Your Name" />
            <Input placeholder="Contact No." />
            <Input placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button colorScheme="pink" maxW="50%" alignSelf="center">
              Send Message
            </Button>
          </VStack>

        {/* Google Map */}
        <Box borderRadius="lg" overflow="hidden">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3474.16813427947!2d77.72128969430926!3d29.453100315513385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssurendra%20nagar%202nd%20phase%20muzaffarnagar!5e0!3m2!1sen!2sin!4v1773060295469!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Box>

      </SimpleGrid>
    </Box>
  );
};

export default Contact;