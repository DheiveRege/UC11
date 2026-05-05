export class PagamentoService {
    processarPagamento(valor: number): boolean {
        console.log(`Pagamento Processado no valor de R$ ${valor}`);
        return true;
    }

}