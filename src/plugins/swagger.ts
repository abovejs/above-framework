import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import hapiSwagger from 'hapi-swagger';
import jwt from 'jsonwebtoken';
import { Server } from '@hapi/hapi';

import RootPath from '../utils/root-path';

const token: any = process.env.JWT || process.env.APP_JWT;

const Swagger = {
  name: 'docs',
  version: '1.0',
  register: async (server: Server) => {
    const swaggerOptions = {
      info: {
        title: require(RootPath.get('../package.json')).name,
        version: require(RootPath.get('../package.json')).version,
        description: `${require(RootPath.get('../package.json')).description}${
          process.env.NODE_ENV === 'development'
            ? `<br /><strong>JWT:</strong> <i>${jwt.sign({}, token)}</i><script type="text/javascript">
            setTimeout(function(){
              document.querySelector("input[name='apiKey']").value = '${jwt.sign({}, token)}';
              if($('#input_apiKey')){
                var key = $('#input_apiKey')[0].value;
                if (key && key.trim() != "") {
                  if('' !== ''){
                    key = '' + key;
                  }
                  var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization(auth.name, key, auth.in);
                  window.swaggerUi.api.clientAuthorizations.add(auth.name, apiKeyAuth);
                }
              }
            }, 500);
        </script>`
            : ''
        }`,
      },
      securityDefinitions: {
        jwt: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
      security: [{ jwt: [] }],
      pathPrefixSize: 1,
      pathReplacements: [
        {
          replaceIn: 'groups',
          pattern: /(v[0-9]+)/,
          replacement: '',
        },
      ],
      documentationPage: true,
      documentationPath: '/docs',
    };

    await server.register([Inert, Vision]);
    await server.register({
      plugin: hapiSwagger,
      options: swaggerOptions,
    });

    await server.route({
      method: 'GET',
      path: '/',
      options: {
        auth: false,
        handler: async (_, h) => {
          return h.response().redirect('/docs');
        },
      },
    });
  },
};

export default Swagger;
