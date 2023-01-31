
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");
// const { userRouteDocs } = require('./userDoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info:{
            title: 'Documentation of APIs',
            version: '1.0.0',
            description: 'this is APIs Documentation'
        },
        components:{
            securitySchemes:{
                bearerAuth:{
                    type:'http',
                    scheme:'bearer',
                    in:'header',
                    bearerformat:'JWT'
                }
            }
        },
        paths: {},
        securit: [{
            bearerAuth: []
        }],
        servers: [{url: 'http://localhost:3000'}]
    },
    apis: ['./crudoperation-backend/routes/*.js'],
}
const specs = swaggerJsDoc(options)

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  };

  module.exports = swaggerDocs;