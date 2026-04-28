import { statusAluno } from "../src/Status-aluno"

describe("funcao Status do aluno", () => {
    it("Deve ser aprovado", () => {
        expect(statusAluno(70,75)).toEqual("Aprovado")
    })
    it("Deve ser Recuperacao", () => {
        expect(statusAluno(70,74)).toEqual("Recuperacao")
    })
    it("Deve ser Reprovado", () => {
        expect(statusAluno(60,75)).toEqual("Reprovado")
    })
})