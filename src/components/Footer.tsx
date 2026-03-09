import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Heading,
  Flex,
  Icon
} from "@chakra-ui/react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white"  pt={16} pb={8}>
      <Container maxW="container.xl">

        <SimpleGrid columns={[1, 2, 4]} gap={10}>

          {/* Brand Section */}
          <Stack gap={4}>
            <Heading size="md" color="white">
              VipShaadi
            </Heading>

            <Text fontSize="sm" >
              Trusted matrimonial platform helping families connect
              and build meaningful relationships based on values,
              trust, and compatibility.
            </Text>
          </Stack>

          {/* Quick Links */}
          <Stack gap={3}  >
            <Heading size="sm" color="white">
              Quick Links
            </Heading>

            <Link href="/" color="white">Home</Link>
            <Link href="/about" color="white">About Us</Link>
            <Link href="/profiles" color="white">Browse Profiles</Link>
            <Link href="/contact" color="white">Contact</Link>
          </Stack>

          {/* Services */}
          <Stack gap={3}  >
            <Heading size="sm" color="white">
              Services
            </Heading>

            <Link color="white">VIP Matchmaking</Link>
            <Link color="white">Verified Profiles</Link>
            <Link color="white">Relationship Manager</Link>
            <Link color="white">Privacy Protection</Link>
          </Stack>

          {/* Contact */}
          <Stack gap={3}>
            <Heading size="sm" color="white">
              Contact Us
            </Heading>

            <Text fontSize="sm">
              Gurgaon, Haryana
            </Text>

            <Text fontSize="sm">
              +91 98765 43210
            </Text>

            <Text fontSize="sm">
              support@vipshaadi.com
            </Text>

            <Flex gap={4} mt={2}>
              <Icon as={FaFacebook} boxSize={5} cursor="pointer" />
              <Icon as={FaInstagram} boxSize={5} cursor="pointer" />
              <Icon as={FaLinkedin} boxSize={5} cursor="pointer" />
            </Flex>
          </Stack>

        </SimpleGrid>

        {/* Bottom Section */}

        <Box
          borderTop="1px solid"
          borderColor="gray.700"
          mt={10}
          pt={6}
          textAlign="center"
        >
          <Text fontSize="sm" color="gray.400">
            © 2026 VipShaadi. All Rights Reserved.
          </Text>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;