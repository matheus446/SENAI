const { subtrai, multiplica, divide, ehPar, media } = require("./calculadora");

describe("subtrai", () => {
  test("deve retornar o resultado correto da subtração", () => {
    expect(subtrai(10, 4)).toBe(6);
  });

  test("deve retornar um número negativo quando o resultado for negativo", () => {
    expect(subtrai(4, 10)).toBeLessThan(0);
  });
});

describe("multiplica", () => {
  test("deve retornar o produto correto de dois números", () => {
    expect(multiplica(4, 5)).toBe(20);
  });

  test("deve retornar 0 quando um dos fatores for 0", () => {
    expect(multiplica(8, 0)).toBe(0);
  });

  test("o resultado deve ser maior do que cada um dos fatores quando ambos forem maiores que 1", () => {
    const resultado = multiplica(3, 4);

    expect(resultado).toBeGreaterThan(3);
    expect(resultado).toBeGreaterThan(4);
  });
});

describe("divide", () => {
  test("deve retornar o resultado correto da divisão", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("deve lançar erro quando tentar dividir por zero", () => {
    expect(() => divide(10, 0)).toThrow("Nao e possivel dividir por zero");
  });
});

describe("ehPar", () => {
  test("deve retornar um valor verdadeiro para número par", () => {
    expect(ehPar(10)).toBeTruthy();
  });

  test("deve retornar um valor falso para número ímpar", () => {
    expect(ehPar(7)).toBeFalsy();
  });
});

describe("media", () => {
  test("deve calcular corretamente a média de uma lista de inteiros", () => {
    expect(media([10, 20, 30])).toBe(20);
  });

  test("deve calcular corretamente a média quando o resultado for decimal", () => {
    expect(media([5, 6, 7])).toBeCloseTo(6);
  });

  test("deve lançar erro quando a lista estiver vazia", () => {
    expect(() => media([])).toThrow();
  });

  test("deve lançar erro quando o argumento não for um array", () => {
    expect(() => media("10,20,30")).toThrow();
  });
});
