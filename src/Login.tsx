import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";
import { Botao } from "./components/Botao";

export default function Login() {
  return (
    <VStack justifyContent={"center"} flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt="Logo" />

      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira Senha endereço de email"
        />
        <EntradaTexto label="Senha" placeholder="Insira sua senha" />
      </Box>
      <Botao>Entrar</Botao>
      <Link mt={2} href="https.:ww.alura.com.br">
        Esqueceu sua senha?
      </Link>
      <Box mt={8} w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
