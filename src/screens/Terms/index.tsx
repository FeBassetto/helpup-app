import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
  StyledTitle,
  Title,
} from "./styles";

interface Sections {
  title: string;
  description: string;
}

export function Terms() {
  const sections: Sections[] = [
    {
      title: "Aceitação dos Termos",
      description:
        "Ao acessar e usar o aplicativo Helpup, você concorda em cumprir estes Termos e Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com estes termos, está proibido de usar ou acessar este aplicativo.",
    },
    {
      title: "Descrição do Serviço",
      description:
        "Helpup é um aplicativo que permite aos usuários criar grupos e organizar eventos para ajudar pessoas necessitadas. Os usuários podem compartilhar informações como nome, e-mail e localização.",
    },
    {
      title: "Requisitos de Idade",
      description:
        "Os usuários devem ter pelo menos 13 anos de idade para usar o Helpup, em conformidade com as leis gerais sobre a idade mínima para consentimento online.",
    },
    {
      title: "Privacidade e Proteção de Dados",
      description:
        "O Helpup respeita a privacidade dos usuários. Não compartilhamos suas informações com terceiros, exceto conforme necessário para fornecer o serviço do aplicativo (por exemplo, compartilhamento de informações de eventos, entre usuários). Para mais detalhes, consulte nossa Política de Privacidade.",
    },
    {
      title: "Conteúdo Gerado pelo Usuário",
      description:
        "Os usuários podem criar grupos e eventos com título, descrição e local. É proibido publicar conteúdo que seja ilegal, obsceno, ameaçador, difamatório, infrinja direitos de propriedade intelectual ou seja prejudicial a terceiros.",
    },
    {
      title: "Propriedade Intelectual",
      description:
        "Todo o conteúdo e software do Helpup é propriedade de seus respectivos autores e protegido por leis de direitos autorais.",
    },
    {
      title: "Limitações de Responsabilidade",
      description:
        "O Helpup não se responsabiliza pelos eventos e grupos criados pelos usuários no aplicativo. Os usuários são inteiramente responsáveis por suas ações dentro do aplicativo.",
    },
    {
      title: "Resolução de Disputas",
      description:
        "Em caso de disputas ou reclamações relacionadas ao uso do aplicativo, os usuários podem entrar em contato através da área de reclamações do aplicativo.",
    },
    {
      title: "Encerramento ou Suspensão de Contas",
      description:
        "O Helpup reserva-se o direito de suspender ou encerrar contas que violem estes Termos, incluindo a criação de eventos e grupos falsos ou com conteúdos inapropriados.",
    },
    {
      title: "Alterações nos Termos",
      description:
        "Estes Termos de Uso podem ser atualizados periodicamente. Os usuários serão notificados de quaisquer mudanças significativas.",
    },
    {
      title: "Feedback e Contato",
      description:
        "Para feedback ou suporte, entre em contato pelo e-mail [email protected] ou através da área de ajuda do aplicativo.",
    },
  ];

  return (
    <Container>
      <Title>
        Termos e Uso do <StyledTitle>Helpup</StyledTitle>
      </Title>
      {sections.map(({ description, title }, index) => (
        <Section key={title}>
          <SectionTitle>
            {index + 1}. {title}
          </SectionTitle>
          <SectionDescription>{description}</SectionDescription>
        </Section>
      ))}
    </Container>
  );
}
