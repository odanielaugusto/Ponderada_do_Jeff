# Ponderada_do_Jeff
# 📝 Documentação dos Testes Automatizados do Frontend

## 📌 Introdução
Esta documentação descreve o processo de automação de testes da página **Professional Details** utilizando o **Cypress**. Foram realizados testes de interface para garantir que os elementos essenciais da página funcionem corretamente.

## 🛠️ Ferramentas 
Para os testes automatizados,foi utilizado as seguintes ferramentas:

- **Angular** - Framework frontend utilizado no projeto.
- **Cypress** - Framework para testes end-to-end.
- **Node.js** - Ambiente para execução de JavaScript.
- **NPM (Node Package Manager)** - Gerenciador de pacotes do Node.js.
- **GitHub** - Para versionamento do código e documentação dos testes.

## 🔧 Configuração do Ambiente
Antes de rodar os testes, é necessário configurar o ambiente corretamente:

1. **Instalar dependências na pasta de frontend:**
   ```bash
   npm install
2. **Executar o servidor Angular:**
    ```bash
   npm start
    ```

   O projeto deve estar rodando em http://localhost:4200.

3. **Abrir o Cypress:**
    ```bash
   npx cypress open
    ```


## Descrição dos Testes

Os testes foram implementados no arquivo `cypress/e2e/professional-details.cy.js`. Eles garantem que a página Professional Details seja carregada corretamente e que seus elementos interativos estejam funcionando.

1️⃣ Teste: Carregamento da Página

**Objetivo**: Verificar se a página carrega corretamente e exibe o título esperado.

- Pré-condição: O servidor Angular deve estar rodando.

- Procedimento de Teste:
1. Acessar a rota /professionals/details.

2. Verificar se o texto professional-details works! está visível.

- Resultado Esperado: O título da página deve ser exibido corretamente.

- Resultado Obtido: ❌ Não Passou.

- Pós-condição: A página está acessível e carregada corretamente.

2️⃣ Teste: Presença do Botão de Edição

**Objetivo**: Verificar se o botão de edição está presente na tela.

- Pré-condição: O servidor Angular deve estar rodando.

- Procedimento de Teste:

1. Acessar a rota /professionals/details.

2. Verificar se um botão com data-cy="edit-button" existe.

3. Resultado Esperado: O botão de edição deve estar presente.

- Resultado Obtido: ❌ Não Passou.

Pós-condição: O botão está acessível para interação.

3️⃣ Teste: Clique no Botão de Edição

**Objetivo**: Verificar se o modal de edição é aberto ao clicar no botão.

- Pré-condição: O botão de edição deve estar presente.

- Procedimento de Teste:

1. Clicar no botão data-cy="edit-button".

2. Verificar se o modal data-cy="edit-modal" está visível.

- Resultado Esperado: O modal deve abrir corretamente.

- Resultado Obtido: ✅ Passou.

- Pós-condição: O modal está funcional para edição.

## 🚀 Passo a Passo para Executar os Testes

1. Vá até a pasta frontend e inicie o servidor Angular:

2. npm start

3. Abra o Cypress:

- npx cypress open

Clique no arquivo professional-details.cy.js.

Veja os testes sendo executados no navegador.