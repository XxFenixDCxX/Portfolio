const fs = require('fs');

const configFilePath = 'sec/config.ts';
const githubToken = process.env.GITHUB_TOKEN;
if (!githubToken) {
  console.error('Error: No se ha definido la variable de entorno GITHUB_TOKEN.');
  process.exit(1);
}

const configFileContent = `export const AppConfig = {
  production: false,
  githubToken: '${githubToken}'
};\n`;

if (!fs.existsSync(configFilePath)) {
  fs.writeFileSync(configFilePath, configFileContent);
  console.log('Archivo config.ts creado con éxito.');
} else {
  console.log('El archivo config.ts ya existe. No se necesita crear.');
}
