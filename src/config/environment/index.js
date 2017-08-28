//handling multiple environment configuration
let environment = (process.env.NODE_ENV).toString().trim().toLowerCase();
switch (environment) {
  case 'production' :
    environment = 'prod';
    break;
  case 'uat' :
    environment = 'uat';
    break;
  case 'qa' :
    environment = 'qa';
    break;
  default :
    environment = 'dev';
}

// if (!process.env.BROWSER){
  console.log("\n---------------------- Loading configurations for environment = " + environment + " ---------------------- ");
// }
const appConfig = require('./' + environment + '.js');

export default appConfig.default;
