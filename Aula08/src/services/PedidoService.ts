import { PagamentoService } from "./PagamentosService";

export class PedidoService {
    constructor(private pagamentoService: PagamentoService) { }
    finalizarPedido(valor: number): string {
        if (valor < 0) {
            throw new Error(`Valor do pedido deve ser maior que zero`);
        }
        const pagamentoAprovado = this.pagamentoService.processarPagamento(valor);
        if (!pagamentoAprovado) {
            throw new Error(`Seu pagamento nao foi aprovado`);
        }
        return `Pedido finalizado com sucesso`;
    }
}