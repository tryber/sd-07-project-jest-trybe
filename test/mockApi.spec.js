const api = require("../src/mockApi");

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

const fetch = require('node-fetch');
jest.mock('node-fetch');


describe('verifica o usuário', () => {


  // Crie sua mock da função fetchURL() aqui
  test('verifica se o usuário é o tunico', async (done) => {
    const user = {
      gender: 'male',
      name: {
        first: 'Antônio',
        last: 'Britto',
      },
      location: {
        city: 'Brazil',
      },
      email: 'tunico@bol.com.br',
      login: {
        username: 'tunicao123',
        password: '1234567890',
      },
    };

    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(user),
      })
    );

    api.fetchURL().then(user => {
      expect(user.gender).resolves.toEqual('male');
      expect(user.name.first).resolves.toEqual('Antônio');
      expect(user.name.last).resolves.toEqual('Britto');
      expect(user.location.country).resolves.toEqual('Brazil');
      expect(user.email).resolves.toEqual('tunico@bol.com.br');
      expect(user.login.username).resolves.toEqual('tunicao123');
    });
    done();
  });
});
