import { Box, Divider, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { Titulo } from "../components/Titulo";
import Logo from "../assets/Logo.png";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

export default function Principal() {
  const depoimentos = [
    {
      id: 1,
      nome: "Julio",
      idade: "40 anos",
      localizacao: "São Paulo, SP",
      depoimento:
        "Lorem ipsum dolor sit amet. Qui animi laborum ut omnis recusandae quo sint commodi vel dolor voluptates. Non consequatur enim eos quis cumque et dolorum totam eum odit voluptatem ea distinctio maiores a explicabo sint sit iure omnis. Et impedit laboriosam cum voluptas modi ut beatae iusto qui nemo quia qui distinctio excepturi!",
    },
    {
      id: 2,
      nome: "Julio",
      idade: "40 anos",
      localizacao: "São Paulo, SP",
      depoimento:
        "Lorem ipsum dolor sit amet. Qui animi laborum ut omnis recusandae quo sint commodi vel dolor voluptates. Non consequatur enim eos quis cumque et dolorum totam eum odit voluptatem ea distinctio maiores a explicabo sint sit iure omnis. Et impedit laboriosam cum voluptas modi ut beatae iusto qui nemo quia qui distinctio excepturi!",
    },
    {
      id: 3,
      nome: "Julio",
      idade: "40 anos",
      localizacao: "São Paulo, SP",
      depoimento:
        "Lorem ipsum dolor sit amet. Qui animi laborum ut omnis recusandae quo sint commodi vel dolor voluptates. Non consequatur enim eos quis cumque et dolorum totam eum odit voluptatem ea distinctio maiores a explicabo sint sit iure omnis. Et impedit laboriosam cum voluptas modi ut beatae iusto qui nemo quia qui distinctio excepturi!",
    },
  ];

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Image mt={6} source={Logo} alt="Logo" alignSelf={"center"} />
        <Titulo color="blue.500">Boas vindas!</Titulo>
        <Box
          shadow={3}
          p={4}
          w="100%"
          borderRadius={4}
          borderWidth={1}
          borderColor="gray.100"
        >
          <EntradaTexto label="" placeholder="Digite a especialidade" />
          <EntradaTexto label="" placeholder="Digite sua localização" />
          <Botao mt={6} mb={3}>
            Buscar
          </Botao>
        </Box>
        <Titulo my={6} color="gray.500">
          Depoimentos
        </Titulo>
        {depoimentos.map((depo) => (
          <Box key={depo.id}>
            <Text color="gray.300">{depo.depoimento}</Text>
            <Text textAlign="center" color="gray.500">
              {depo.nome}, {depo.idade}, {depo.localizacao}
            </Text>
            <Divider mt={5} />
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
}
