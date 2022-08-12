const es6Mock = require('es6-mock');

module.exports = function vitePluginMock(config) {
  const { dir, path } = config || {};
  return {
    name: 'vite:mock',
    configureServer(server) {
      server.middlewares.use(es6Mock(
        {
          dir: dir || './mock',
          path: path || '/mock',
          app: server.middlewares
        }
      ));
    }
  };
}
