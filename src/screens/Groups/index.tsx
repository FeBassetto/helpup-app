import { Header } from "@components/Header";
import { Container, ContentContainer } from "./styles";
import { Slider } from "@components/Slider";
import { DataList } from "@components/DataList";

export function Groups() {
  const mock = [
    {
      id: "1",
      title: "Felipe testandodsadsadsacsazxczx",
      participants: 123,
      profileUrl:
        "https://s3-helpup.s3.sa-east-1.amazonaws.com/users/default.png",
    },
    {
      id: "12",
      title: "Felipe testandodsadsadsacsazxczx",
      participants: 123,
      profileUrl:
        "https://s3-helpup.s3.sa-east-1.amazonaws.com/users/default.png",
    },
    {
      id: "13",
      title: "Felipe testandodsadsadsacsazxczx",
      participants: 123,
      profileUrl:
        "https://s3-helpup.s3.sa-east-1.amazonaws.com/users/default.png",
    },
    {
      id: "14",
      title: "Felipe testandodsadsadsacsazxczx",
      participants: 123,
      profileUrl:
        "https://s3-helpup.s3.sa-east-1.amazonaws.com/users/default.png",
    },
    {
      id: "15",
      title: "Felipe testandodsadsadsacsazxczx",
      participants: 123,
      profileUrl:
        "https://s3-helpup.s3.sa-east-1.amazonaws.com/users/default.png",
    },
    {
      id: "16",
      title: "Felipe testandodsadsadsacsazxczx",
      participants: 123,
      profileUrl:
        "https://s3-helpup.s3.sa-east-1.amazonaws.com/users/default.png",
    },
  ];

  return (
    <Container>
      <Header />
      <ContentContainer>
        <Slider
          firstContent={
            <DataList
              onChangeSearchText={() => {}}
              onSearchPress={() => {}}
              searchPlaceholder="Pesquise um grupo..."
              cardButtonTitle="Ver mais"
              list={mock}
              type="group"
              onCardButtonPress={() => {}}
              activePage={1}
              totalPages={5}
              isLoading={false}
              emptyButtonPressed={() => {}}
              emptyButtonText="Criar novo grupo!"
              emptyMessage="Não encontramos nenhum grupo por aqui. Aproveita e crie o seu!"
            />
          }
          firstTitle="Novos grupos"
          secondContent={
            <DataList
              onChangeSearchText={() => {}}
              onSearchPress={() => {}}
              searchPlaceholder="Pesquise um grupo..."
              cardButtonTitle="Ver mais"
              list={mock}
              type="group"
              onCardButtonPress={() => {}}
              activePage={1}
              totalPages={5}
              isLoading={false}
              emptyButtonPressed={() => {}}
              emptyButtonText="Criar novo grupo!"
              emptyMessage="Não encontramos nenhum grupo por aqui. Aproveita e crie o seu!"
            />
          }
          secondTitle="Meus grupos"
        />
      </ContentContainer>
    </Container>
  );
}
