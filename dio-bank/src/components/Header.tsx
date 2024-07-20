import { ChakraProvider, Box, Center, Heading, Image, keyframes } from "@chakra-ui/react";
import logo from "../logo.svg";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Header = () => {
  return (
    <ChakraProvider>
      <header>
        <Box
          width={"100%"}
          height={"80px"}
          bgGradient="linear(to-r, #151515, #000000, #151515)"
          color={"white"}
          fontSize={"3xl"}
        >
          <Center
            justifyContent={"flex-start"}
            height={"100%"}
            alignSelf={"center"}
            padding={"15px"}
          >
            <Heading>Dio Bank</Heading>
            <Image 
              animation={`${spin} infinite 10s linear`} 
              boxSize={"60px"} 
              src={logo} 
              alt="logo" 
            />
          </Center>
        </Box>
      </header>
    </ChakraProvider>
  );
};

export default Header;

