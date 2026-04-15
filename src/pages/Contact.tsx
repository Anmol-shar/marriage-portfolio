import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
  SimpleGrid,
  Text,
  InputGroup,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";

const Contact = () => {
  return (
    <Box bg="gray.50" py={16} px={[4, 6, 10]}>
      <Heading
        mb={12}
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight="bold"
        textAlign="center"
        color="gray.700"
      >
        Contact Us
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={10} maxW="90%" mx="auto">
        
        {/* Contact Form */}
        <Box
          bg="white"
          p={8}
          borderRadius="2xl"
          boxShadow="lg"
          _hover={{ boxShadow: "2xl" }}
          transition="0.3s"
        >
          <VStack gap={5} align="stretch">
            <Text fontSize="lg" fontWeight="semibold" color="gray.600">
              Get in touch
            </Text>

           

             
              <InputGroup startElement={<FaUser />}  >
      <Input placeholder="Your Name"   border="pink.400" />
    </InputGroup>
              <InputGroup startElement={<FaPhone />}  >
      <Input placeholder="Contact Number" border="pink.400" />
    </InputGroup>
              <InputGroup startElement={<FaEnvelope />}>
      <Input placeholder="Email Address" />
    </InputGroup>

            <Textarea
              placeholder="Your Message..."
              border="pink.400"
              rows={5}
            />

            <Button
              colorScheme="pink"
              bgColor="pink.500"
              size="lg"
              borderRadius="full"
              _hover={{ transform: "scale(1.05)" }}
              transition="0.2s"
            >
              Send Message
            </Button>
          </VStack>
        </Box>

        {/* Google Map */}
        <Box
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="lg"
          _hover={{ boxShadow: "2xl" }}
          transition="0.3s"
        >
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3474.16813427947!2d77.72128969430926!3d29.453100315513385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssurendra%20nagar%202nd%20phase%20muzaffarnagar!5e0!3m2!1sen!2sin!4v1773060295469!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            loading="lazy"
          ></iframe>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;