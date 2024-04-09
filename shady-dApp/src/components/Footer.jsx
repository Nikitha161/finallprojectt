import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="9xl" marginInline="auto">
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Box maxW="300px">
          <Image w="60px" src="logo.svg" alt="Shady labs" />
          <Text mt={2} color="gray.500" fontSize="md">
            The Decentralised Music Platform made FOR Indie Music & Artists.
          </Text>
        </Box>
        <HStack
          spacing={10}
          d={{ base: "none", sm: "flex" }}
          justifyContent={{ sm: "space-between", md: "normal" }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Overview
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Documentation</CustomLink>
              <CustomLink>npm organization</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>About Shady</CustomLink>
              <CustomLink>Contribute</CustomLink>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      
    </Box>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
