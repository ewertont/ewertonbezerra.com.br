# Portfólio Pessoal — Ewerton Bezerra

Este repositório contém o código-fonte do meu website pessoal e portfólio profissional. O projeto foi idealizado como um espaço para consolidar minha trajetória como desenvolvedor senior, apresentando experiências, formação acadêmica e formas de contato de maneira limpa e moderna.

## Contexto e Objetivo

A proposta deste projeto é ir além de um simples currículo online. Ele serve como uma vitrine técnica onde aplico conceitos modernos de desenvolvimento web para criar uma experiência de usuário fluida e esteticamente refinada. O foco principal está na performance, na acessibilidade e no uso de uma identidade visual que reflita profissionalismo e atenção aos detalhes.

## Tecnologias Utilizadas

A stack tecnológica foi selecionada para garantir escalabilidade, tipagem forte e rapidez no desenvolvimento:

*   **Next.js**: Framework principal para renderização e roteamento, utilizando a estrutura de App Router.
*   **TypeScript**: Garantia de segurança no desenvolvimento através de tipagem estática.
*   **React**: Biblioteca base para a construção das interfaces declarativas e componentes modulares.
*   **Tailwind CSS**: Utilizado para utilitários de estilização e responsividade.
*   **Vanilla CSS**: Implementação de detalhes finos, animações personalizadas e efeitos de vidro (glassmorphism).

## Arquitetura do Projeto

O projeto segue uma organização modular, facilitando a manutenção e futuras expansões:

*   **Camada de Dados (`src/lib/data.ts`)**: Centraliza todas as informações textuais, experiências e links. Isso permite alterar o conteúdo do site sem a necessidade de navegar por múltiplos componentes de interface.
*   **Componentes de Seção (`src/components/sections/`)**: Cada parte da página (Hero, Sobre, Experiência, Formação, Contato) é tratada como um módulo independente. Isso isola a lógica e o estilo de cada bloco do site.
*   **Camada Global (`src/app/`)**: Define a estrutura base da aplicação, incluindo as variáveis de design no CSS global e o layout principal que envolve todas as páginas.
*   **Interatividade**: Sistema personalizado de revelação ao rolar a página (scroll reveal) e animações de entrada para melhorar o engajamento sem comprometer a performance.

## Como Executar o Projeto

Caso deseje rodar uma instância local deste projeto para desenvolvimento, siga os passos abaixo:

1.  Clone este repositório.
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
4.  Acesse `http://localhost:3000` no seu navegador.

## Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para explorar e utilizar referências de código.
