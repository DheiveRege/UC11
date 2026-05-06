import { EnvioService } from "../src/Service/EnvioService";

describe("Envio válido", () => {
    it("deve processar envio quando dados forem validados,deve ser true", () => {
        const mockEnvioService = {
            Enviar: jest.fn().mockReturnValue(true)
        };
        const envioService = new EnvioService(mockEnvioService as any);
        const resultado = envioService.processarEnvio(10, "12345-678");

        expect(resultado).toBe('Envio processado com sucesso');
        expect(mockEnvioService.Enviar).toHaveBeenCalledWith(10, "12345-678", 20);
    })
    it("CEP vaziozinho,deve mostrar false", () => {
        const mockEnvioError = {
            Enviar: jest.fn()
        };
        const envioService = new EnvioService(mockEnvioError as any);


        expect(() => envioService.processarEnvio(10, "")).toThrow('Cep deve ser valído');
    })
    it("Peso acima do limite (50kg) pesado pesado, deve mostrar false", () => {
        const mockEnvioError = {
            Enviar: jest.fn()
        };
        const envioService = new EnvioService(mockEnvioError as any);


        expect(() => envioService.processarEnvio(51, "12345-678")).toThrow('Peso excede o limite permitido');
    })
    it("Envio recusado pela transportadora, deve mostrar false", () => {
        const mockEnvioError = {
            Enviar: jest.fn().mockReturnValue(false)
        };
        const envioService = new EnvioService(mockEnvioError as any);


        expect(() => envioService.processarEnvio(10, "12345-678")).toThrow('Envio recusado pela transportadora');
        expect(mockEnvioError.Enviar).toHaveBeenCalledWith(10, "12345-678", 20);
    })
   
})