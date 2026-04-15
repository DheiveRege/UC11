# 📦 Sistema de Delivery

## 📌 Descrição
Sistema de software desenvolvido para gerenciar pedidos de delivery, permitindo que clientes façam pedidos online e estabelecimentos administrem suas operações de forma eficiente.

---

## 🚀 Recursos Funcionais

- 🧾 Cadastro de usuários (clientes e administradores)
- 🍔 Cadastro de produtos (nome, preço, descrição, imagem)
- 🛒 Carrinho de compras
- 📦 Realização de pedidos
- 📍 Rastreamento de pedidos (status: recebido, em preparo, saiu para entrega, entregue)
- 💳 Integração com formas de pagamento (cartão, pix, dinheiro)
- 📜 Histórico de pedidos
- 🔍 Busca de produtos
- 🧑‍🍳 Painel administrativo para gerenciamento de pedidos e produtos

---

## ⚙️ Recursos Não Funcionais

- ⚡ Desempenho: Respostas rápidas mesmo com múltiplos usuários simultâneos
- 🔒 Segurança: Proteção de dados dos usuários (criptografia e autenticação)
- 📱 Responsividade: Interface adaptável para mobile e desktop
- 🌐 Disponibilidade: Sistema disponível 24/7
- 🔧 Escalabilidade: Suporte ao crescimento de usuários e pedidos
- 🧩 Usabilidade: Interface simples e intuitiva
- 🛠️ Manutenibilidade: Código organizado e fácil de atualizar
- 🔄 Confiabilidade: Sistema estável com baixo índice de falhas

---

## 👥 Público-Alvo

- Restaurantes
- Lanchonetes
- Empresas de entrega
- Clientes que desejam pedir comida online

---

## 📈 Principais Benefícios

- Agilidade no processo de pedidos
- Melhor organização para o estabelecimento
- Experiência prática para o cliente
- Redução de erros manuais
# 🧪 Testes do Sistema de Delivery

## 👤 Teste de Cadastro de Usuário

### 🎯 Objetivo
Verificar se o sistema permite o cadastro correto de novos usuários.

### 📋 Cenário de Teste
Usuário acessa a tela de cadastro e preenche os dados obrigatórios.

### ✅ Passos
1. Acessar a tela de cadastro
2. Inserir nome, e-mail e senha válidos
3. Confirmar cadastro

### ✔️ Resultado Esperado
- Usuário cadastrado com sucesso
- Mensagem de confirmação exibida
- Dados armazenados no sistema

### ❌ Possíveis Erros
- E-mail já cadastrado
- Campos obrigatórios vazios
- Senha fora do padrão (ex: muito curta)

---

## 🚚 Teste de Movimentação de Entrega

### 🎯 Objetivo
Validar a atualização do status do pedido durante a entrega.

### 📋 Cenário de Teste
Pedido criado e acompanhado até a entrega final.

### ✅ Passos
1. Cliente realiza um pedido
2. Sistema registra o pedido como "Recebido"
3. Restaurante altera status para "Em preparo"
4. Status atualizado para "Saiu para entrega"
5. Pedido marcado como "Entregue"

### ✔️ Resultado Esperado
- Status atualizado corretamente em cada etapa
- Cliente consegue visualizar o andamento
- Sistema registra o histórico da entrega

### ❌ Possíveis Erros
- Status não atualiza corretamente
- Ordem incorreta de status (ex: entregue antes de sair)
- Falha na sincronização entre cliente e sistema

---

## 📊 Critérios de Sucesso

- Todos os testes executados sem erros críticos
- Funcionalidades principais operando corretamente
- Sistema responde dentro do tempo esperado