import { VStack, Divider, ScrollView } from "native-base";
import { Botao } from "../components/Botao";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";

export default function Consultas() {
  return (
    <ScrollView p="5">
      <Titulo color="blue.500">Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>
        Agendar nova consulta
      </Botao>

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Próximas consultas
      </Titulo>
      <CardConsulta
        nome="Dra. Giovana"
        especialidade="Cardiologista"
        foto="https://github.com/giovanafurlan.png"
        data="20/04/2023"
        foiAgendado
      />

      <Divider mt={5} />

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Consultas passadas
      </Titulo>
      <CardConsulta
        nome="Dra. Giovana"
        especialidade="Cardiologista"
        foto="https://github.com/giovanafurlan.png"
        data="20/04/2023"
        foiAtendido
      />
      <CardConsulta
        nome="Dra. Giovana"
        especialidade="Cardiologista"
        foto="https://github.com/giovanafurlan.png"
        data="20/04/2023"
        foiAtendido
      />
      <CardConsulta
        nome="Dra. Giovana"
        especialidade="Cardiologista"
        foto="https://github.com/giovanafurlan.png"
        data="20/04/2023"
        foiAtendido
      />
    </ScrollView>
  );
}
