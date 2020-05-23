**Mapeando features do sistema**
# Recover password

**RF**
- O usario deve poder recuperar sua senha informando o seu e-mail
- O usario deve receber um e-mail com instrucao de recuperacao de senha
- O usuario deve poder resetar sua senha

**RNF**
-  Utilizar Mailtrap para testar envious de dev;
- Ultilizar Amazon SES para envious em producao;
- O envio de e-mail deve acontecer em segundo plano(backgrond job);


**RN**

- O link enviado por email para  resetar senha, deve expirar em 2h;
_ O usario precisa confirmar a nova senha ao resetar sua senaha;

# Atualizacao do perfil

**Requisitos Fucionais**
- O usario deve poder atualizar seu nome, email e senha;
**Regra Nao Fucionais**

- O usario nao pode alterar seu email para um email ja utiliado;
- para ataulaizar sua senha, o usuario deve informar a senha antiga;
- para atualizar sua senha, o usario precisa confirmar a nova senha;


**Regras de Negocio**

# Painel do prestador

# Agendamento de servicos

**RF**

- O usario deve poder listar todos prestadores de servicos cadastrado;
- O usario deve pode listar os dias de um mes com pelo menso um prestador;
- O usario deve pode listar horarios disponivel em um dia especifico de um prestador
- O usario deve pode realizar um novo agendamento comum prestador

**RNF**
**RN**
