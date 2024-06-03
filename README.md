## Semana DDev
Neste documento você encontra a relação de requisitos do projeto da 2ª Edição do evento, o link para alguns scripts utilizados durante o evento, arquivos do layout e informações úteis.

## Requisitos da API
A API deve garantir:

 - [] Garantir que a API tenha um código limpo e de fácil manutenção
 - [] Garantir que a API tenha uma forma ágil de acesso ao banco de dados
 - [] Garantir que a API tenha um tratamento de erros
 - [] Garantir que a API não pare quando algum erro for retornado
 - [] Garantir que a API valide qualquer payload recebido
 - [] Garantir que a API armazene senhas seguras
 - [] Garantir que a API isole as operações por casos de uso

A API deve ter os seguintes casos de uso:

 - [] Listar médicos
   - [] Incluir no retorno a agenda de cada médico
 - [] Obter dados do médico
   - [] Garantir que o ID de um médico foi enviado na chamada - Request
   - [] Garantir que o ID do médico existe
   - [] Retornar os dados do médico com a agenda
 - [] Obter dados do paciente
   - [] Garantir o acesso somente a usuários autenticados - Request
   - [] Garantir que o Telefone de um paciente foi enviado na chamada - Requesrt
   - [] Garantir que o Telefone é de um paciente que existe
   - [] Incluir no retorno os agendamentos
 - [] Criar conta do paciente
   - [] Criar conta com nome, telefone e senha
   - [] Garantir somente um usuário por telefone
 - [] Fazer login do paciente
   - [] Garantir que o telefone é de um cadastro válido
 - [] Adicionar agendamento para o paciente
   - [] Garantir que foi enviado o paciente e o id de agenda disponível - Request
   - [] Garantir que a agenda está disponível

### Tabelas do sistema
- [] Patient Paciente
  - _Campos: ID, UserID, Name, Phone, CreatedAt
  - _Relações: Appointments[], User
- [] User
  - _Campos: ID, Phone, Password, CreatedAt
  - _Relações: Patient
- [] Appointment
  - _Campos: ID, Date, Made, PatientID, DoctorID, CreatedAt
  - _Relações: Patient, Doctor
- [] Doctor
  - _Campos: ID, FirstName, LastName, City, State, Speciality, Bio, Picture, Price, Availability, Experience, Attendances, Address, CreatedAt
  - _Relações: Agenda, Appointment
- [] Agenda
  - _Campos: ID, Date, Available, DoctorID, CreatedAt
  - _Relações: Doctor