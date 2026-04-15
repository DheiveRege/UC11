# Casos de Teste

## Casos de Teste RF (Requisitos Funcionais)

### CT01 - RF01  
**Cenário:** Cadastrar usuário com dados válidos  
**Entrada:** Nome, email válido, senha válida  
**Resultado esperado:** Usuário cadastrado com sucesso  

### CT02 - RF01  
**Cenário:** Cadastrar usuário com email duplicado  
**Entrada:** Email já existente  
**Resultado esperado:** Sistema deve impedir cadastro  

### CT03 - RF02  
**Cenário:** Login com senha incorreta  
**Entrada:** Email válido + senha errada  
**Resultado esperado:** Sistema deve negar acesso  

### CT04 - RF03  
**Cenário:** Cadastro válido de evento  
**Entrada:** Nome + descrição + data + quantidade de pessoas válida  
**Resultado esperado:** Sistema deve cadastrar o evento  

### CT05 - RF03  
**Cenário:** Cadastro inválido de evento  
**Entrada:** Data no passado ou número máximo de participantes menor ou igual a zero  
**Resultado esperado:** Cadastro negado  

### CT06 - RF04  
**Cenário:** Listagem de eventos com dados válidos  
**Entrada:** Nome + data + número de vagas disponíveis  
**Resultado esperado:** Sistema lista o evento  

### CT07 - RF04  
**Cenário:** Listagem de eventos com dados inválidos  
**Entrada:** Nome ou data ou número de vagas inválidos  
**Resultado esperado:** Sistema não deve listar o evento  

### CT08 - RF05  
**Cenário:** Inscrição válida em evento  
**Entrada:** Nome + email válido + data válida + vagas disponíveis  
**Resultado esperado:** Sistema deve permitir inscrição no evento  

### CT09 - RF06  
**Cenário:** Cancelamento válido  
**Entrada:** Usuário válido inscrito no evento + evento com data válida  
**Resultado esperado:** Sistema deve permitir cancelamento  

## Casos de Teste RNF (Requisitos Não Funcionais)

### CT10 - RNF01  
**Cenário:** Validação de campos  
**Entrada:** Todos os campos preenchidos  
**Resultado esperado:** Sistema deve validar todos os dados  

### CT11 - RNF02  
**Cenário:** Segurança de senha  
**Entrada:** Senha sem 8 caracteres, sem letra maiúscula ou sem número  
**Resultado esperado:** Sistema não deve finalizar o cadastro  

### CT12 - RNF03  
**Cenário:** Tempo de resposta  
**Entrada:** Timeout maior que 2 segundos  
**Resultado esperado:** Sistema deve reiniciar a tarefa  

### CT13 - RNF04  
**Cenário:** Compatibilidade  
**Entrada:** Usuário em navegador não compatível  
**Resultado esperado:** Sistema não deve ser executado  

### CT14 - RNF05  
**Cenário:** Integridade de dados  
**Entrada:** Email já existente  
**Resultado esperado:** Sistema deve impedir o cadastro  