<h1 align="center"> Pay pilot </h1>

<h2 align="center"> Motivação do projeto  </h2>

Geralmente controlamos nosso dinheiro de uma forma **confusa e sem controle**, principalmente quando se trata de objetivos a longo prazo, como uma viagem no final do ano. 

É comum que as pessoas **não tenham clareza sobre seus gastos mensais** e optem por planilhas ou papel, o que pode ser cansativo e confuso. 

Uma solução proposta é um aplicativo que permita visualizar e controlar os gastos em tempo real, de forma integrada e prática, considerando que o uso do celular é comum na rotina atual das pessoas, é uma otima opção.

<h2 align="center"> Divisão do projeto </h2>

O projeto foi separado em três principais frentes, sendo elas **extremamente importante para o meu desenvolvimento**, já que é a primeira vez que desenvolvo um projeto aplicando esses conceitos, sendo eles:
- UX/UI
- Banco de dados + Backend
- Mobile

Durante todo o período de desenvolvimento, fui aprendendo alguns conceitos importantes, e aplicando diretamente no projeto, dessa forma ficou claro para mim a importancia de cada processo/tecnologia/conceito que **aprendi durante a criação do projeto**, e sempre tentado aplicar as melhores práticas de cada área.

<h2 align="center"> UX/UI </h2>

**Ferramentas e tecnlogias:**
- [Behance](https://www.behance.net/) inspirações e referencias;
- [MockFlow WireframePro](https://www.mockflow.com/apps/wireframepro) criação do Wireframe;
- [Figma](https://www.figma.com/) Design Guide, Prototipação e Interações;

Essa foi a primeira etapa do projeto, onde eu **mais investi tempo**, pois é uma área que me chama **muita atenção**, conheci bastante conceitos importantes e me aprofundar o maximo que pude em cada etapa e processo.

Comecei então respondendo duas perguntas primordicais, para o inicio do projeto:

### O que é UX?

"...O User Experience Design busca projetar a **experiência global do usuário**, incluindo pesquisa, entendimento do mercado e design da jornada completa do usuário, não se limitando apenas ao meio digital. Seus conceitos podem ser aplicados a produtos físicos e serviços intangíveis..."

[Mais informações.](https://www.hostinger.com.br/tutoriais/ux-o-que-e-user-experience)

### O que é UI?

"...User inferface é a capacidade de hierarquizar informações de maneira que o usuário **encontre facilmente o caminho que deseja seguir**, permitindo seu sucesso. Embora essa prática esteja ligada principalmente a produtos e interfaces digitais, pode ser aplicada a qualquer tipo de interface ou interação entre o usuário e o mundo ao seu redor..."

[Mais informações.](https://rockcontent.com/br/blog/o-que-e-ui/)

---

Com essa clareza, busquei por metologias que me ajudassem a ter mais clareza do projeto, como, seu publico, sua necessidade de fato no mercado (utilizando um exemplo de aplicação real), foi então que cheguei em dois conceitos importantes, o `Double diamond` e o `Golden circle`.

#### Double diamond:

![image](https://user-images.githubusercontent.com/69824782/227813040-b1eed382-77a7-46b6-b189-f7f8a2e26dca.png)

"O conceito de double diamond em UX/UI é um modelo de processo criativo que consiste em quatro fases: **descoberta, definição, desenvolvimento e entrega.**

Cada fase é representada por um "diamante", sendo que o primeiro diamante representa a exploração e geração de ideias e o segundo diamante representa a convergência e a seleção de soluções. O objetivo é que o processo comece com a **geração de muitas ideias e possibilidades**, para então, após um processo de seleção e refinamento, chegar a uma solução final que atenda às necessidades do usuário e ao objetivo do projeto. Esse modelo ajuda a garantir que o **design final seja bem pensado** e testado para garantir que atenda às necessidades do usuário e seja efetivo...".

[Mais informações.](https://aelaschool.com/experienciadousuario/double-diamond-como-trabalhar-com-essa-metodologia-na-pratica/)

#### Golden circle:

![image](https://user-images.githubusercontent.com/69824782/227813183-2959351e-10a9-4b18-8886-052596ae345b.png)

"O conceito de Golden Circle em UX/UI é uma abordagem que busca **entender e comunicar a essência do negócio ou produto** por trás da experiência do usuário. O Golden Circle consiste em três círculos concêntricos, com o "por quê" no círculo mais interno, o "como" no círculo do meio e o "o quê" no círculo mais externo. 

A ideia é que começar com o **"por quê" (a motivação ou propósito)** ajuda a definir o **"como" (os processos e ações)** e, por fim, o **"o quê" (os resultados)**. Ao entender e comunicar o "por quê" de um produto ou serviço, é possível criar uma experiência mais significativa e envolvente para o usuário...".

[Mais informações.](https://www.zendesk.com.br/blog/o-que-e-golden-circle/)

---

Nessa etapa, já tinha bastante coisa definida sobre a importancia e criação do app, e então chegou a hora de criar o `User Flow`, uma maneira de **mapear toda a jornada do usuário** na aplicação, para definir de fato quais páginas e possibilidades seria capaz do aplicativo proporcionar.

A partir daqui, o processo foi buscar por inspirações de aplicações parecidas no `Behance` e coletar alguns insights, para ter informações suficientes para então criar o `Wireframe`.

Após a definição das páginas e principais seções, foi criado ao design guide, como fontes e cores:
- Fonte: `Roboto`, nos pesos `400`, `700`, `900`.
- Cores: `Azul`, `100/#668CFF`, `300/#4977FF`, `500/#245BFF`

Para então chegarmos na prototipação e interação das páginas e componentes no `Figma`.

**Todo o design guide e prototipação disponivel [AQUI](https://www.figma.com/file/WQ0y9ploZyCotRBJQs3HXv/Finance-App?node-id=1%3A497&t=fiSIHRQcHxCWIiAc-1).**

_Todas as informações detalhadas [AQUI](https://www.figma.com/file/dJh51vXqLjFRa7OYJOvsBP/Project-Full-Stack?node-id=1-238&t=ajojCgQxDQx1Npbd-4)._

<h2 align="center"> Banco de dados + Backend </h2>

**Ferramentas e tecnlogias:**
- [Prisma](https://www.prisma.io/) de banco de dados;
- [Typescript](https://typescript.org/) na linguagem de programção;
- [Node.js](https://nodejs.org) como backend;
- [Express](https://expressjs.com/pt-br/) framework do Node.js;
- [Swagger](https://swagger.io/) documentação do projeto;
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) geração e validação de token jwt;
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js) encriptação das senhas dos usuários;

O banco de dados foi criado utilizando o **Prisma.io**, e então foram criados três tabelas:

1. `User`:
```sql
model User {
  id           String         @id @default(uuid())
  email        String         @unique
  password     String
  Transaction  Transaction[]
  RefreshToken RefreshToken[]

  @@map("users")
}
```

2. `Transaction`:
```sql
model Transaction {
  id          String   @id @default(uuid())
  title       String
  value       Int
  description String?
  type        String
  created_at  DateTime @default(now())
  user_id     String
  user        User     @relation(fields: [user_id], references: [id])

  @@map("transactions")
}
```

3. `RefreshToken`:
```sql
model RefreshToken {
  id        String @id @default(uuid())
  expiresIn Int
  user      User   @relation(fields: [user_id], references: [id])
  user_id   String

  @@map("refresh_token")
}

```

As rotas do projeto são resumidas em dois grupos, `User` e `Transactions`.

![image](https://user-images.githubusercontent.com/69824782/227813563-14b79b97-4ce7-4a73-96e6-a1c552e9a411.png)

_Todas as informações detalhadas [AQUI](https://www.figma.com/file/dJh51vXqLjFRa7OYJOvsBP/Project-Full-Stack?node-id=1-509&t=ajojCgQxDQx1Npbd-4)._

<h2 align="center"> Mobile </h2>

**EM CONTRUÇÃO...**