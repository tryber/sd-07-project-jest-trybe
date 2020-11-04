const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende",  async () => {
    
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    const telPhone = await answerPhone('Oi!');
    expect(telPhone).toEqual('Oi!');

  });
  test("ocupado", () => {
    
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    const telPhone2 = answerPhone();
    setTimeout(telPhone2, 4000);
    expect(telPhone2).rejects.toEqual('Infelizmente não podemos atender...');
  });
});
