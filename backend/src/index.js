const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
//app.use(cors({
//  origin: 'Http://caminho'
//}));
app.use(express.json());
app.use(routes);
/**
 * Metodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 * 
 */

 /**
  * Tipos de parametros: 
  * 
  * Query params: parametros nomeados endiados na rota após "?" (Filtros, paginação) (request.query)
  * Route params: parametros utilizados para identidicar recursos (request.params)
  * Request body: corpo da requisição, utilizado para criar ou alterar recursos (request.body)
  * 
  */



app.listen(3333);