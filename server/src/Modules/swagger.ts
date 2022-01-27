const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Free CockTail',
      version: '1.0.0',
      description: 'Free CockTail API docs',
    },
    servers: [
      {
        url: 'http://example.com/',
      },
    ],
  },
  apis: ['./src/Entity/*.ts', './src/Routes/*.ts'],
};

export default options;
