
export function soma(num: number, num2: number): number {
    return num + num2;
}
export function div(num: number, num2: number): number {
    return num / num2;
}
export function multi(num: number, num2: number): number {
    return num * num2;
}
export function sub(num: number, num2: number): number {
    return num - num2;
}
export function raiz(num: number): number {
    return num ** 0.5
}
export function desconto(valor: number): number {
    if (valor >= 100) {
        return valor * 0.9;
    }
    return valor;
}
export function par(num: number): boolean {
    return num % 2 === 0;
}

export function validadeIdade(idade: number): boolean {
    if (idade >= 18) {
        return true;
    }
    return false;
}