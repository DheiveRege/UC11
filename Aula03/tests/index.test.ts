import { desconto, div, multi, par, raiz, soma, sub, validadeIdade } from "../src/index"
/*
test("deve somar 2 numeors", () => {
    expect(soma(2, 6)).toBe(8);
});
test("deve dividir 2 numeors", () => {
    expect(div(6, 2)).toBe(3);
});
test("deve multiplicar 2 numeors", () => {
    expect(multi(2, 6)).toBe(12);
});
test("deve subitratir 2 numeors", () => {
    expect(sub(6, 2)).toBe(4);
});
test("deve subitratir 2 numeors", () => {
    expect(raiz(49)).toBe(7);
});
describe("FUncao divisao", () => {
    it("Deve dividir", () => {
        expect(div(10, 2)).toBe(5)
    });
});
describe("FUncao desconto", () => {
    it("Deve aplicar desconto de 10% se for maior = a 100", () => {
        expect(desconto(200)).toBe(180)
    });
    it("Nao ira aplicar desconto", () => {
        expect(desconto(99)).toBe(99)
    });
});
describe("Funcao de numeros par", () => {
    it("Retorna false", () => {
        expect(par(1293818)).toBeTruthy();
    });
    it("Retorna true", () => {
        expect(par(1293817)).toBeFalsy();
    });
});
*/
describe("Funcao validar Idade",() =>{
    it("Retornar true por ele ser maior de idade", () => {
        expect(validadeIdade((18))).toBeTruthy();
    });
    it("Retornar false por ele ser de menor de idade", () => {
        expect(validadeIdade(17)).toBeFalsy();
    });
});