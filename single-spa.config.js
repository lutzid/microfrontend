import { registerApplication, start } from 'single-spa'

registerApplication(
  'module1', 
  () => import('./src/module1/vue.app.js'),
  () => location.pathname === "/module2" ? false : true
);

registerApplication(
  'module2',
  () => import('./src/module2/vue.app.js'),
  () => location.pathname === "/module1"  ? false : true
);

start();