const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API_portafolio",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
    },
    components: {
      schemas: {
        Education: {
          type: "object",
          required: ["title", "subtitulo", "description", "fecha"],
          properties: {
            title: {
              type: "string",
              description: "Título de la formació",
            },
            title_en: {
              type: "string",
              description: "Título de la formació",
            },
            subtitulo: {
              type: "string",
              description: "Subtítulo de la formación",
            },
            subtitulo_en: {
              type: "string",
              description: "Subtítulo de la formación",
            },
            description: {
              type: "string",
              description: "Descripción",
            },
            description_en: {
              type: "string",
              description: "Descripción",
            },
            fecha: {
              type: "string",
              description: "Fecha de la formación",
            },
            fecha_en: {
              type: "string",
              description: "Fecha de la formación",
            },
            imagen: {
              type: "string",
              description: "direccion del recuso en front",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
