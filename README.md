# rca-cypress-tests
Portfólio de testes e2e com o Cypress 

# Requisitos
Node.js instalado

# Dependencias
Na raiz do projeto rodar o comando: 

    npm install 

# Executar os testes

Na raiz do projeto rodar o comando: 

- inicia o cypress

        npm run cy:open  

- Roda os testes no headless no chrome

        npm run cy:run  

- roda os testes mostrando o navegador

        npm run test:chrome 

# Evidencias 

Em caso de falha em algum cenário, um vídeo registrando a execução dos testes é salvo no diretório 'cypress/videos'

Em caso de falha em algum cenário, um vídeo que registra a execução dos testes, juntamente com capturas de tela, é salvo no diretório 'cypress/screenshots'

A cada execução, o relatório dos testes será gerado e armazenado no diretório 'rca-cypress-tests/test-report', sendo sempre sobrescrito