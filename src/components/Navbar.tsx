import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="pink.500" px={6} py={4} color="white">
      <Flex justify="space-between" align="center">
        <Heading size="md">Marriage Portfolio</Heading>

        <Flex gap={4}>
          <Button as={Link}   variant="ghost" color="white">
            Home
          </Button>
          <Button as={Link}  variant="ghost" color="white">
            About
          </Button>
          <Button as={Link}   variant="ghost" color="white">
            Boys
          </Button>
          <Button as={Link}   variant="ghost" color="white">
            Girls
          </Button>
          <Button as={Link}   variant="ghost" color="white">
            Contact
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;