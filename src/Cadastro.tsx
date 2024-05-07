import { Box, Image, Checkbox, ScrollView, Text } from "native-base";
import Logo from "./assets/Logo.png";
import { Alert } from "react-native";
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";
import { Botao } from "./components/Botao";
import { useState } from "react";
import { sessoes } from "./utils/CadastroEntradaTexto";

export default function Cadastro() {
  const [numSessao, setNumSessao] = useState(0);

  function avancarSessao() {
    if (numSessao + 1 < sessoes.length) {
      setNumSessao(numSessao + 1);
    } else {
      Alert.alert("Todas as sessões concluídas.");
    }
  }

  function voltarSessao() {
    if (numSessao > 0) {
      setNumSessao(numSessao - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image mt={6} source={Logo} alt="Logo" alignSelf={"center"} />

      <Titulo>{sessoes[numSessao]?.titulo}</Titulo>
      <Box>
        {sessoes[numSessao]?.entradaTexto?.map((entrada) => {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
            />
          );
        })}
      </Box>
      <Box>
        {numSessao === 2 && (
          <Text color="blue.800" fontWeight="bold" fontSize="md" my={2}>
            Selecione o plano
          </Text>
        )}
        {sessoes[numSessao]?.checkbox?.map((entrada) => {
          return (
            <Checkbox key={entrada.id} value={entrada.value}>
              {entrada.value}
            </Checkbox>
          );
        })}
      </Box>
      {numSessao > 0 && (
        <Botao bgColor="gray.500" onPress={() => voltarSessao()}>
          Voltar
        </Botao>
      )}
      <Botao mb={6} mt={4} onPress={() => avancarSessao()}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
