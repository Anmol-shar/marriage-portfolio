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
  Stack,
  Icon,
  Image,  
  Flex
} from "@chakra-ui/react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Box>
<Box position="relative" w="100%" h={{ base: "60vh", md: "60vh" }}>
        
        <Image
          src="/src/assets/images/meeting/aboutUs.jpg" // change image if needed
          w="100%"
          h="100%"
          objectFit="cover"
        />

        {/* Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.400"
        />

        {/* Centered Text */}
     <Flex
  position="absolute"
  top="0"
  left="0"
  w="100%"
  h="100%"
  align="center"
  justify="center"
>
  <Stack align="center" w={{base:"80%",lg:"40%"}} gap={{base:3,lg:7}}>
    <Heading
      color="white"
      fontSize={{ base: "4xl", md: "3xl", lg: "6xl" }}
      fontWeight="bold"
    >
      Contact Us
    </Heading>
<Heading 
 color="white"
      fontSize={{ base: "sm", md: "2xl", lg: "xl" }}
      fontWeight="bold">
  We’d Love to Hear From You
</Heading>
    <Text
      color="gray.200"
      fontSize={{ base: "sm", md: "lg" }}
      fontStyle="italic"
      textAlign="center"
      
    >
     We value your feedback. Reach out and let us know how we can help.
    </Text>
  </Stack>
</Flex>
      </Box>
      {/* 🔥 Top Info Section */}
      <Box bg="gray.100" py={{ base: 10, md: 16 }} px={4} textAlign="center">

        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          color="blue.900"
        >
          Get in touch
        </Heading>

        <Text
          mt={4}
          fontSize={{ base: "sm", md: "lg" }}
          color="gray.600"
          maxW="600px"
          mx="auto"
          fontStyle="italic"
        >
          Reach out to discover how we can transform your ideas into reality.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={8}
          mt={12}
          maxW="800px"
          mx="auto"
        >

          {/* Address Card */}
          <Box
            bg="white"
            p={8}
            borderRadius="2xl"
            boxShadow="md"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
            transition="0.3s"
          >
            <Stack align="center" gap={4}>
              <Icon as={FaMapMarkerAlt} boxSize={50} color="blue.900" />

              <Heading size="lg" color="blue.900">
                Address
              </Heading>

              <Text color="gray.600" textAlign="center">
                Altruist Citi Plaza 2nd Floor, Ambala City
              </Text>
            </Stack>
          </Box>

          {/* Email Card */}
          <Box
            bg="white"
            p={8}
            borderRadius="2xl"
            boxShadow="md"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
            transition="0.3s"
          >
            <Stack align="center" gap={4}>
              <Icon as={FaEnvelope} boxSize={50} color="blue.900" />

              <Heading size="lg" color="blue.900">
                Email
              </Heading>

              <Text color="gray.600">
                abha01sharma01@gmail.com
              </Text>
            </Stack>
          </Box>

        </SimpleGrid>
      </Box>


      {/* 🔥 Contact Form + Map */}
      <Box bg="gray.50" py={16} px={[4, 6, 10]}>
        
        <SimpleGrid columns={[1, 1, 2]} gap={10} maxW="90%" mx="auto">
          
          {/* Form */}
          <Box
            bg="white"
            p={8}
            borderRadius="2xl"
            boxShadow="lg"
            _hover={{ boxShadow: "2xl" }}
            transition="0.3s"
          >
            <VStack gap={5} align="stretch">
              
              <Text fontSize={{base:"2xl",lg:"4xl"}}  textAlign="center" fontWeight="bold" color="gray.600">
Free Consulting              </Text>

              <InputGroup>
                <Input placeholder="Your Name" />
              </InputGroup>

              <InputGroup>
                <Input placeholder="Contact Number" />
              </InputGroup>

              <InputGroup>
                <Input placeholder="Email Address" />
              </InputGroup>

              <Textarea
                placeholder="Your Message..."
                rows={5}
              />

              <Button
                colorScheme="pink"
                size="lg"
                borderRadius="full"
                _hover={{ transform: "scale(1.05)" }}
                transition="0.2s"
              >
                Send Message
              </Button>

            </VStack>
          </Box>

          {/* Map */}
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

    </Box>
  );
};

export default Contact;