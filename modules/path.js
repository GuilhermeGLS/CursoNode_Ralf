const path = require("path")

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Extensão do Arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'))