# Casos de Teste

## CT01	RF01	Cadastrar usuário com dados válidos:
Nome, email válido, senha válida:
Usuário cadastrado com sucesso

## CT02	RF01	Cadastrar usuário com email duplicado:
Email já existente:
Sistema deve impedir cadastro

## CT03	RF02	Login com senha incorreta:
Email válido + senha errada:
Sistema deve negar acesso

## ct04    rf03   cadstro valido:
 nome + descricao + data + qnt pessoas valido:    
 sistema de cadastrar evento

## ct05    rf03    cadastro invalido:
data do passado ou Número máximo de participantes zero ou menor:
cadastro negado  

## ct06    rf04    listagem do evento com dados validos:
nome + data + Número de vagas disponíveis:
lista o evento

## ct07    rf04    listagem do evento com dados invalidos:
nome ou data ou Número de vagas disponíveis estiver errado:
sistema nao devera listar o evento

## ct08    rf05    inscrição válida de evento:
nome + email valido + data valida + vagas livres:
sistema deve permitir inscricao do ebento

## ct09    rf06    cancelamento valido:
usuario valido e inscrito no evento + evento em data valida
sistema deve permitir canlcelamento

---

## ct10    rnf01    validacao de campos:
se todos os campos forem preenchidos
sistema deve validar todos os dados

## ct11    rnf02   seguranca de senha:
a senha nao possui 8 caracteres + 1 letra maiuscula + 1 numero:
sistema nao devera finalizar o cadastro

## ct12    rnf03   Tempo de Resposta:
se o timeout for maior que 2 sengundos:
sistema deve reiniciar a tarefa

## ct13    rnf04   Compatibilidade:
se usuario nao estiver nos navegadores compativeis:
o sistema nao devera ser executado

## ct14    rnf05   Integridade de Dados:
se o email ja esxiste:
sistema deve barrar com todas suas forças o cadastro
