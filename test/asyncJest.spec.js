const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", (termina) => {
    expect(answerPhone(true)).resolves.toMatch('Oi!');// qual o retorno
    // quando for true me a resposta do resolves é a mesma que a da func
    // toMatch serve como o toBe para me trazer a resposta
    termina()
  });
  test("ocupado", (termina) => {
    expect(answerPhone(false)).rejects.toMatch('Infelizmente não podemos atender...');// qual o retorno
    termina()
  });
});
