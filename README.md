# @vitejs/plugin-mock
Support vite mock data, use [es6-mock](https://www.npmjs.com/package/es6-mock) to mock data. 


### Install
Install with npm:

`$ npm install --save-dev @vitejs/plugin-mock`

### Uses

Config vite.config.ts

```javascript
import mock from '@vitejs/plugin-mock';

export default defineConfig({
  plugins: [vitePluginMock()]
});
```
