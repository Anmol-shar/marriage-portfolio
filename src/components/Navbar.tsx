import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { open, onToggle,onClose  } = useDisclosure();

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

        {/* Desktop Menu */}
        <Flex gap={4} display={{ base: "none", md: "flex" }}>
          <Link to="/">
            <Button variant="ghost" color="white" _hover={{ textDecoration: "underline" }}>
              Home
            </Button>
          </Link>

          <Link to="/about">
            <Button variant="ghost" color="white" _hover={{ textDecoration: "underline" }}>
              About Us
            </Button>
          </Link>

          <Link to="/boys">
            <Button variant="ghost" color="white" _hover={{ textDecoration: "underline" }}>
              Boys
            </Button>
          </Link>

          <Link to="/girls">
            <Button variant="ghost" color="white" _hover={{ textDecoration: "underline" }}>
              Girls
            </Button>
          </Link>

          <Link to="/contact">
            <Button variant="ghost" color="white" _hover={{ textDecoration: "underline" }}>
              Contact Us
            </Button>
          </Link>
        </Flex>

        {/* Mobile Hamburger */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          variant="ghost"
          color="white"
          aria-label="Toggle Menu"
        >{open ? <IoMdClose /> : <RxHamburgerMenu/>}</IconButton>
      </Flex>

      {/* Mobile Menu */}
      {open &&
       <VStack
  gap={3}
  align="start"
  display={{ md: "none" }}
  position="absolute"
  top="100%"
  left="0"
  width="100%"
  bg="pink.500"
  p={4}
  zIndex="999"
>
          <Link to="/" onClick={onClose}>
            <Button variant="ghost" w="100%" color="white">
              Home
            </Button>
          </Link>

          <Link to="/about" onClick={onClose}>
            <Button variant="ghost" w="100%" color="white">
              About Us
            </Button>
          </Link>

          <Link to="/boys" onClick={onClose}>
            <Button variant="ghost" w="100%" color="white">
              Boys
            </Button>
          </Link>

          <Link to="/girls" onClick={onClose}>
            <Button variant="ghost" w="100%" color="white">
              Girls
            </Button>
          </Link>

          <Link to="/contact" onClick={onClose}>
            <Button variant="ghost" w="100%" color="white">
              Contact Us
            </Button>
          </Link>
        </VStack>}
    </Box>
  );
};

export default Navbar;