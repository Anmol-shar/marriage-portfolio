import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="pink.500" px={6} py={4} color="white">
      <Flex justify="space-between" align="center">
        <Heading size="md">Marriage Portfolio</Heading>

        <Flex gap={4}>
           <Link to="/">
  <Button variant="ghost" color="white">
    Home
  </Button>
</Link>
         <Link to="/about">
  <Button variant="ghost" color="white">About</Button>
</Link>

<Link to="/boys">
  <Button variant="ghost" color="white">Boys</Button>
</Link>

<Link to="/girls">
  <Button variant="ghost" color="white">Girls</Button>
</Link>

<Link to="/contact">
  <Button variant="ghost" color="white">Contact</Button>
</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;