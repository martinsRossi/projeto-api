Criar pasta raiz projeto-api

bash
Pasta raiz
npm i express

Criar server.js na src

comenta linha "app.use"

bash
node src/server.js

descomenta linha "app.use"

pasta controllers
new file -> userController.js

pasta service
new file -> userService.js


bash
npm i bcrypt 
(serve pra criar os hashs)

npm i jsonwebtoken
(serve pra lidar com a geração do token: jwt.io)


bash
npm i sqlite3
npm i uuid
npm i sequelize


pasta models 
new file -> User.js

bash
node src/server.js
(cri o banco de dados)

SWAGGER

github.com/fernandodomeneghetti
projeto-api
src/swagger.json - copiar o arquvio
colar no arquivo src/swagger.json

bash
npm i swagger-ui-express

server.js
//Importamos o Swagger
const swaggerUI = require('swagger-ui-express');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')))

bash


---


criado Dockerfile

deletar o node_modules

bash
docker container ls

build da imagem

bash
docker build -t martinsrossi/projeto-api:v1 -f ./Dockerfile .

//o t representa uma tag

docker run -d -p 3000:3000 martinsrossi/projeto-api:v1

//-d desatacha o processo
//-p 

docker push martinsrossi/projeto-api:v1