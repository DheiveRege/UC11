import { fretCalculado } from "../src"


describe("funcao frete", () => {
    it("deve ser 0 porque e maior que 200", () => {
        expect(fretCalculado(100)).toBeTruthy();
    });
    it("deve ser 20 porque e menor igual que 200", () => {
        expect(fretCalculado(200)).toBeFalsy();
    });
})



