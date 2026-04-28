export function statusAluno(nota: number, frequencia: number): string {
    if (nota >= 70 && frequencia >= 75) {
        return "Aprovado";
    } else if (nota >= 70 && frequencia < 75) {
        return "Recuperacao";
    }
    return "Reprovado";

}