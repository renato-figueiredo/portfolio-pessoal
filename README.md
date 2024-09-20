# Portfólio Pessoal

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

[![Acessar o site](https://img.shields.io/badge/Acessar%20o%20site-00B5E2?style=for-the-badge)](https://renato-figueiredo.github.io/portfolio-pessoal/)

## Capturas de Tela

![Home](./src/static/media/portfolio-home.webp)
![Habilidades](./src/static/media/portfolio-skills.webp)
![Projetos](./src/static/media/portfolio-projects.webp)
![Contatos](./src/static/media/portfolio-contacts.webp)

## Sobre o Projeto

Este é um portfólio pessoal desenvolvido com **React**, **Bootstrap**, **JavaScript**, **HTML5** e **CSS3**, hospedado no **GitHub Pages**. O objetivo deste projeto é apresentar minhas habilidades como desenvolvedor front-end e fornecer um local onde eu possa compartilhar meus projetos e informações de contato.

## Como Executar o Projeto

Para rodar o projeto, siga os passos abaixo:

### 1. Instalar as dependências
```bash
npm install
```

### 2. Rodar o projeto no modo de desenvolvimento
```bash
npm start
```

Isso irá iniciar o servidor de desenvolvimento e abrir o site no navegador.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```bash
src/
├── components/
│   ├── Contacts.js            # Componente da seção de contato
│   ├── CustomHook.js          # Hook customizado para funcionalidades específicas
│   ├── Home.js                # Componente da página inicial
│   ├── NavBar.js              # Componente de navegação (header)
│   ├── Projects.js            # Componente que lista os projetos
│   ├── Skills.js              # Componente para mostrar habilidades
│   └── useCopyToClipboard.js  # Hook para copiar texto para a área de transferência
├── redux/
│   ├── action.js              # Ações do Redux para gerenciar estados
│   ├── reducer.js             # Redutores do Redux
│   └── store.js               # Configuração da store do Redux
├── static/
│   └── media/                 # Arquivos estáticos
│       ├── avatar.webp        # Imagem Pessoal
│       ├── cv.pdf             # Currículo em PDF
│       ├── project-IA.webp    # Imagem do projeto gerada por IA
│       └── project-mgpocket.webp  # Imagem do projeto MG Pocket
├── App.css                    # Arquivo CSS principal
└── App.js                     # Componente principal do React
```

## Comandos Úteis

### Criar o build do projeto para produção
```bash
npm run build
```

### Fazer deploy no GitHub Pages
```bash
npm run deploy
```

Esse projeto utiliza **React** para o front-end e **Redux** para gerenciamento de estado.
