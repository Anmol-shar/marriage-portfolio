import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      bg="pink.500"
      px={6}
      py={4}
      color="white"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        <Heading size="md">Marriage Portfolio</Heading>

        <Flex gap={4}>
          <Link to="/">
            <Button bgColor="pink.500" _hover={{ textDecoration: "underline" }} color="white">Home</Button>
          </Link>

          <Link to="/about">
            <Button bgColor="pink.500" _hover={{ textDecoration: "underline" }} variant="ghost" color="white">About Us</Button>
          </Link>

          <Link to="/boys">
            <Button bgColor="pink.500" _hover={{ textDecoration: "underline" }} variant="ghost" color="white">Boys</Button>
          </Link>

          <Link to="/girls">
            <Button bgColor="pink.500" _hover={{ textDecoration: "underline" }} variant="ghost" color="white">Girls</Button>
          </Link>

          <Link to="/contact">
            <Button bgColor="pink.500" _hover={{ textDecoration: "underline" }} variant="ghost" color="white">Contact Us</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;