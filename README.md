Sequencia para criar o projeto
instalar o yarn
### npm install yarn

iniciar o yarn
### npm install yarn

criar o arquivo package
### yarn add express

instalar o nodemon
### yarn add nodemon -D

criar o script para o package.json
### "scripts":{"dev":"nome do arquivo.js"}

instalar o sucrase
### yarn add sucrase -D

configurando o sucrase
### crie um arquivo chamado nodemon.json "nodemon.json"
### e insira {"execMap":{"js":"sucrase-node"}}

instale o eslint
//https://www.youtube.com/watch?v=eieTlMwCwWU
//https://www.youtube.com/watch?v=ycPl2NUFksg
### yarn add eslint -D

inicie o eslint
### yarn eslint --init

configure o eslint
-find problems
-JavaScript
-none of these
-no typescript
-node
-yes
-yarn

instale o prettier
//https://www.youtube.com/watch?v=_fzbg6_-JuE

adicione o editorconfig como ext

//https://www.youtube.com/watch?v=z_131ICWWl0
//https://www.youtube.com/watch?v=Ug7sMxKNGXE
instale o sequelize
### yarn add sequelize

instale o dialeto do mysql2
### yarn add mysql2

instale o sequelize-cli
### yarn add sequelize-cli -D

crie e configure o arquivo .sequelizerc
var path = require("path");

module.exports = {
config: path.resolve("src", "db", "config", "database.js"),
"migrations-path": path.resolve("src", "db", "migrations"),
"models-path": path.resolve("src", "db", "db_model"),
"seeders-path": path.resolve("src", "db", "seeds"),
};

inicie o sequelize-cli

### yarn sequelize-cli init
