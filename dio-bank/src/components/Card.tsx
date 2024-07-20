import {
  ChakraProvider,
  // Flex,
  Button,
  Box,
  Input,
  Text,
  Center,
} from "@chakra-ui/react";
import { AlertMessage } from "../services/BoasVindas";

const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight={"100vh"} bg={"#932ED1"} padding={"25px"}>
        <Box bg={"white"} borderRadius={"25px"} padding={"45px"}>
          <Center>
            <Text fontSize={"2xl"}>Faça o login:</Text>
          </Center>
          <Input margin="20px 0" placeholder="Email" size="lg" variant="flushed" />
          <Input margin="20px 0" placeholder="Password" size="lg" variant="flushed" />
          <Center padding={"20px"}>
            <Button onClick={AlertMessage} colorScheme="blue" variant="solid" size="lg" width={"40%"}>
              Entrar
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Card