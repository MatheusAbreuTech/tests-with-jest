const { encode, decode } = require('./myFizzBuzz.js');

describe('Testa as funções encode e decode', () => {
  it('should encode and decode a function and defined', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();

    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('should encode convert strings to numbers', () => {
    expect(encode('a')).toEqual(1);
    expect(encode('e')).toEqual(2);
    expect(encode('i')).toEqual(3);
    expect(encode('o')).toEqual(4);
    expect(encode('u')).toEqual(5);

    expect(encode('ana')).toEqual('1n1');
  });

  it('should decode convert numbers to strings', () => {
    expect(encode(1)).toEqual('a');
    expect(encode(2)).toEqual('e');
    expect(encode(3)).toEqual('i');
    expect(encode(4)).toEqual('o');
    expect(encode(5)).toEqual('u');
  });

  it('should decode and encode other letters/numbers are not converted for each case', () => {
    expect(encode('laele')).toEqual('l12l2');
    expect(decode(249)).toEqual('eo9');
  });

  it('check if the encode and decode return has the same number of characters', () => {
    expect(encode('laele').length).toEqual(5);
    expect(decode(249).length).toEqual(3);
  });
});
