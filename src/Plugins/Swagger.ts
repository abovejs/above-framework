import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import hapiSwagger from 'hapi-swagger';
import jwt from 'jsonwebtoken';
import { BasePath } from '../Helpers';

const Swagger = {
  name: 'docs',
  version: '1.0',
  register: async server => {
    const swaggerOptions = {
      info: {
        title: require(BasePath.get('../package.json')).name,
        version: require(BasePath.get('../package.json')).version,
        description: `${
          require(BasePath.get('../package.json')).description
        }<br /><strong>JWT:</strong> <i>${jwt.sign(
          {},
          process.env.APP_JWT || process.env.JWT
        )}</i><script type="text/javascript">
        window.onload = function(){
          document.querySelector("input[name='apiKey']").value = '${jwt.sign(
            {},
            process.env.APP_JWT || process.env.JWT
          )}';
        }
        </script>`
      },
      securityDefinitions: {
        jwt: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header'
        }
      },
      pathPrefixSize: 1,
      pathReplacements: [
        {
          replaceIn: 'groups',
          pattern: /(v[0-9]+)/,
          replacement: ''
        }
      ],
      documentationPage: true,
      documentationPath: '/docs'
    };

    await server.register([
      Inert,
      Vision,
      {
        plugin: hapiSwagger,
        options: {
          ...swaggerOptions
        }
      }
    ]);

    await server.route({
      method: 'GET',
      path: '/',
      config: {
        auth: false,
        handler: async (_request, h) => {
          return h.response().redirect('/docs');
        }
      }
    });
  }
};

export default Swagger;
