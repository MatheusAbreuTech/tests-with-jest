const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () => {
  it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(345)).toEqual('fizzbuzz'); // pode usar o toBe no lugar do toEqual também

    expect(myFizzBuzz(3)).toEqual('fizz'); // pode usar o toBe no lugar do toEqual também

    expect(myFizzBuzz(25)).toEqual('buzz'); // pode usar o toBe no lugar do toEqual também

    expect(myFizzBuzz(2)).toEqual(2); // pode usar o toBe no lugar do toEqual também

    expect(myFizzBuzz('4')).toBeFalsy(); // pode usar o toBe no lugar do toEqual também
  });
});
