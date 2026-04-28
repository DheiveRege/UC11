
/*export function fretCalculado(valor: number): number {
    if (valor >= 200) {
        return 0;
    }
    return 20;
}
*/
export function fretCalculado(valor:number):boolean{
    const valido = valor >= 200;
    return valido ? 0  : 20;
}