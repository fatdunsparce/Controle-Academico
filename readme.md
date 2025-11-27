
# instalar libs necessárias pelo terminal

    npm init -y
    npm install sqlite3

# Como rodar passo a passo

## Passo 1: Criar o banco

1 - entre na pasta backend/db
2 - verifique se o arquivo .db existe
3 - se o arquivo .db existe então não precisa executar os próximos passos, se não existe execute no terminal:
    cd backend/db
    node db.js    
explicação: O comando "node db.js" faz o banco, ao fazer o banco ele cria o arquivo .db
Obs: caso queira refazer o banco por algum motivo, se o arquivo .db existir apague ele e ai rode "node db.js"

## Passo 2: Rodar o servidor

- se tiver executado  " cd backend/db" é só executar cd..
- caso esteja na pasta raiz não execute cd backend
Execute no terminal:
- node server.js
explicação: esse é o "server", quando vc rodar ele o seu backend vai iniciar(funções como login). Ele vai continuar rodando e vc não vai poder escrever no terminal mas se precisar escrever é só abrir outro terminal. Ele deve ser rodado toda vez que vc quiser iniciar o backend. IMPORTANTE: não precisa rodar o "node db.js"(comando anterior) de novo se vc já tiver rodado uma vez e ainda tiver o "controle_academico.db", caso não, ai roda ele de novo antes do "node server.js"
