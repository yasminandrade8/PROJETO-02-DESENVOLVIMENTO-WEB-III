# 📚 Projeto 02 - Apresentação do Curso & Disciplinas (3º Semestre)
> **Disciplina:** Desenvolvimento Web III  
> **Linguagem:** HTML, CSS3 e JavaScript (Node.js) 

Aplicação web desenvolvida para a apresentação do curso e das disciplinas do 3º semestre, com base nos conceitos trabalhados em aula (26/08/2026).

---

## 📌 Sobre o Projeto

Este projeto consiste em um servidor web desenvolvido em **Node.js puro (sem frameworks)**. O objetivo principal é consolidar o aprendizado sobre o funcionamento básico de um servidor HTTP, gerenciamento de rotas e manipulação de arquivos estáticos.

### 🎯 Requisitos Atendidos
- Servidor HTTP nativo com módulo `http` do Node.js.
- Sistema de roteamento simples para transição entre as páginas.
- Leitura e manipulação de arquivos via módulo `fs`.
- Servimento de arquivos estáticos (CSS, imagens, JS no cliente) contidos no diretório `/public`.
- Configuração correta e explícita dos cabeçalhos `Content-Type` para cada tipo de recurso (HTML, CSS, JS, imagens).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** (Módulos nativos: `http`, `fs`, `path`, `url`)
- **HTML5 & CSS3** (para a interface e apresentação das disciplinas)
- **JavaScript (ES6+)**

---

## 📁 Estrutura de Arquivos

```text
  ├── public/          # Arquivos estáticos (CSS, imagens, scripts do cliente)
  ├── app.js           # Servidor HTTP e lógica de roteamento em Node.js
  ├── LICENSE          # Licença do projeto (GPL-3.0)
  └── README.md        # Documentação do repositório
```

---

## 🔧 Como Executar o Projeto

### Pré-requisitos
  Ter o Node.js instalado em sua máquina.

### Passo a Passo
1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/yasminandrade8/PROJETO 02 – DESENVOLVIMENTO WEB III.git](https://github.com/yasminandrade8/PROJETO 02 – DESENVOLVIMENTO WEB III.git)
   
2. **Entre na pasta do projeto:**
   ```bash
   cd Projeto02

3. **Inicie o servidor HTTP:**
   ```bash
   node app.js

## 👩‍💻 Autora
Feito com 💜 por Yasmin Andrade
