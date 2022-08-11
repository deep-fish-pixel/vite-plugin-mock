# vite-plugin-es6-mock
Support vite mock data, use [es6-mock](https://www.npmjs.com/package/es6-mock) to mock data. 


### Install
Install with npm:

`$ npm install --save-dev vite-plugin-es6-mock`

### Config vite.config.ts

```javascript
// es6-mock config default param: { path: '/mock', dir: './mock' }
import vitePluginMock from 'vite-plugin-es6-mock';

export default defineConfig({
  server: {
    port: 8088,
  },
  plugins: [vitePluginMock()]
});
```


```javascript
// es6-mock config dir and path
import vitePluginMock from 'vite-plugin-es6-mock';

export default defineConfig({
  plugins: [vitePluginMock({ path: '/mockjs', dir: './mockjs'})]
});
```

### Mock data
#### Step one
Make a new file test.js in the config dir.
```javascript
// Import lib
import path from 'path';
import fs from 'fs';
import { delay, validate, request } from 'es6-mock';

// Import other mock datas
import test1 from './test1';
import test2 from './test2';

// Delay response 500ms
delay(500);

// Validate request （If validate failed, will return validate messages as response）
validate({
    // Validate header required
    header: {
      'Cache-Control': 'required|equals:no-cache',
      cookie: {
        _gid: 'required'
      },
    },
    // Validate param required、 type or format
    param: {
        name: 'required|string',
        id: 'required|integer'
    },
    // Validate request method
    method: 'get|post'
});

// Export mock data，if validate pass
export default {
    // Use mockjs data template
    'code|1-10': '0',
    data: {
      "switch|1-2": true,
      name: 'test03.js',
      // Use other mock data. This will very useful in large data content
      test1,
      test2,
      // Get request get param
      param: request.query,
      // Get request post param
      param2: request.body,
      // Support node various operations
      existTest1: fs.existsSync(path.join(__dirname, 'test1.js')),
      existTest0: fs.existsSync(path.join(__dirname, 'no-exist.js'))
    }
};
```
#### Step two
Start your vite, then you can get the mock content through the URL: http://localhost:8088/test

