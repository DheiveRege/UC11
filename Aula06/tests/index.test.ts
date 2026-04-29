import { ehpar, fretCalculado } from "../src"


describe("funcao frete", () => {
    it("deve ser 0 porque e maior que 200", () => {
        expect(fretCalculado(100)).toBeTruthy();
    });
    it("deve ser 20 porque e menor igual que 200", () => {
        expect(fretCalculado(200)).toBeFalsy();
    });
})

describe("funcao verificar par", () => {
    it("deve ser par porque 202 e par", () => {
        expect(ehpar(202)).toBeTruthy();
    });
    it("deve ser impar porque 203 e impar", () => {
        expect(ehpar(203)).toBeFalsy();
    });
})




