# Movies App

Projeto frontend desenvolvido em **React + TypeScript** com **Vite**.  
Utiliza **React Query** para gerenciamento de dados, **Bootstrap** para estilização e **Axios** para requisições.

## Requisitos

- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Executando o projeto

O arquivo **`.env` já está presente na raiz do projeto**, então **não é necessário criar um novo**.  

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto será executado em: [http://localhost:3000](http://localhost:3000)

## Scripts disponíveis

- **Iniciar em modo desenvolvimento**  
  ```bash
  npm run dev
  ```

- **Build para produção**  
  ```bash
  npm run build
  ```

- **Pré-visualizar build**  
  ```bash
  npm run preview
  ```

- **Lint**  
  ```bash
  npm run lint
  ```

- **Executar testes de integração**  
  ```bash
  npm test
  ```

## Estrutura do Projeto

```
src/
  ├── layouts/         # Layouts principais
  ├── pages/           # Páginas (Dashboard, List)
  ├── router/          # Configuração de rotas
  ├── shared/          # Componentes e utilitários compartilhados
  └── main.tsx         # Ponto de entrada
```

## Tecnologias utilizadas

- **React + TypeScript**
- **Vite**
- **React Query**
- **React Router**
- **Bootstrap / React-Bootstrap**
- **Axios**
- **Sass**
