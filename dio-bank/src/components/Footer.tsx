import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Link,
  keyframes,
} from "@chakra-ui/react";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const Footer = () => {
  return (
    <ChakraProvider>
      <footer>
        <Box
          width={"100%"}
          height={"60px"}
          bgGradient="linear(to-r, #151515, #000000, #151515)"
          color={"white"}
          fontSize={"md"}
          position="fixed"
          bottom={0}
        >
          <Center height={"100%"}>
            <Text animation={`${pulse} 2s infinite`}>
              &copy; {new Date().getFullYear()} Dio Bank. All rights reserved.
            </Text>
            <Box marginLeft={4}>
              <Link
                href="/privacy-policy"
                color="teal.200"
                marginRight={4}
                animation={`${pulse} 2s infinite`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                color="teal.200"
                animation={`${pulse} 2s infinite`}
              >
                Terms of Service
              </Link>
            </Box>
          </Center>
        </Box>
      </footer>
    </ChakraProvider>
  );
};

export default Footer;
