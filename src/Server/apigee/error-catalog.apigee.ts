export default {
  10000: {
    httpcode: 500,
    en: {
      developerMessage: 'Internal server error {0}',
      userMessage: 'There was an error when processing your request. We apologize for the inconvenience.',
    },
    'pt-BR': {
      developerMessage: 'Erro interno do servidor {0}',
      userMessage: 'Ocorreu um erro ao processar sua requisição. Pedimos desculpas pelo incoveniente.',
    },
  },
  10001: {
    httpcode: 503,
    en: {
      developerMessage: 'Service Unavailable',
      userMessage: 'The server is currently unavailable (because it is overloaded or down for maintenance).',
    },
    'pt-BR': {
      developerMessage: 'Serviço Indisponível',
      userMessage: 'O servidor se encontra indisponível (pode estar sobrecarregado ou desativado para manutenção).',
    },
  },
  10002: {
    httpcode: 501,
    en: {
      developerMessage: 'Unsupported Operation',
      userMessage: 'You attempted to execute with {0} parameter {1}={2}, but is not supported yet.',
    },
    'pt-BR': {
      developerMessage: 'Operação não suportada',
      userMessage: 'Você tentou executar uma operação com {0} parâmetro {1}={2}, mas ainda não existe suporte.',
    },
  },
  10003: {
    httpcode: 501,
    en: {
      developerMessage: 'Unsupported Operation {0}',
      userMessage: 'State {1} does not have service registration query.',
    },
    'pt-BR': {
      developerMessage: 'Operação não suportada {0}',
      userMessage: 'Estado {1} não possui consulta de registro de serviço.',
    },
  },
  10004: {
    httpcode: 501,
    en: {
      developerMessage: 'Unsupported Operation {0}',
      userMessage: 'State does not have authorization for this service.',
    },
    'pt-BR': {
      developerMessage: 'Operação não suportada {0}',
      userMessage: 'Estado não autorizado para este serviço.',
    },
  },
  20001: {
    httpcode: 400,
    en: {
      developerMessage: 'Missing {0} parameter {1}',
      userMessage: 'Field {1} is required and can not be empty',
    },
    'pt-BR': {
      developerMessage: 'Faltando{0} parâmetro {1}',
      userMessage: 'Campo {1} é obrigatório e não pode ser vazio.',
    },
  },
  20002: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid integer number',
      userMessage: 'Invalid field {1} - it must be filled with a valid integer number',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um número válido do tipo integer',
      userMessage: 'Campo inválido {1} - o valor deve ser um número válido do tipo integer.',
    },
  },
  20003: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid string',
      userMessage: 'Invalid field {1} - it must be filled with a valid string',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser uma string válida',
      userMessage: 'Campo inválido {1} - o valor deve ser uma string válida.',
    },
  },
  20004: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value greater than {2}',
      userMessage: 'Invalid field {1} - it must be filled with a value greater than {2}',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser maior que {2}',
      userMessage: 'Campo inválido {1} - o valor deve ser maior que {2}.',
    },
  },
  20005: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value lesser than {2}',
      userMessage: 'Invalid field {1} - it must be filled with a value lesser than {2}',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser menor que {2}',
      userMessage: 'Campo inválido {1} - o valor deve ser menor que {2}.',
    },
  },
  20006: {
    httpcode: 400,
    en: {
      developerMessage: 'Unknown {0} parameter {1}',
      userMessage: 'Field {1} is unknown',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} desconhecido {0}',
      userMessage: 'Campo {1} desconhecido.',
    },
  },
  20007: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid number',
      userMessage: 'Invalid field {1} - it must be filled with a valid number',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um número válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um número válido.',
    },
  },
  20008: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid date in pattern {2} {3}',
      userMessage: 'Invalid field {1} - it must be filled with a valid date in pattern {2}',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser uma data válida no padrão {2} {3}',
      userMessage: 'Campo inválido {1} - o valor deve ser uma data válida no padrão {2}.',
    },
  },
  20009: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid boolean (true or false)',
      userMessage: 'Invalid field {1} - it must be filled with a true or false',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um boolean válido (true ou false)}',
      userMessage: 'Campo inválido {1} - o valor deve ser true ou false.',
    },
  },
  20010: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid CPF',
      userMessage: 'Invalid field {1} - it must be filled with a valid CPF',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um CPF válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um CPF válido.',
    },
  },
  20011: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid CNPJ',
      userMessage: 'Invalid field {1} - it must be filled with a valid CNPJ',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um CNPJ válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um CNPJ válido.',
    },
  },
  20012: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid UUID',
      userMessage: 'Invalid field {1} - it must be filled with a valid UUID',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um UUID válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um UUID válido.',
    },
  },
  20013: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid email',
      userMessage: 'Invalid field {1} - it must be filled with a valid email',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um email válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um email válido.',
    },
  },
  20014: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid state',
      userMessage: 'Invalid field {1} - it must be filled with a valid state',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um estado válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um estado válido.',
    },
  },
  20015: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid PIS',
      userMessage: 'Invalid field {1} - it must be filled with a valid PIS',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um PIS válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um PIS válido.',
    },
  },
  20016: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a array',
      userMessage: 'Invalid field {1} - it must be filled with a array',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um array',
      userMessage: 'Campo inválido {1} - o valor deve ser um array',
    },
  },
  20017: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a object',
      userMessage: 'Invalid field {1} - it must be filled with a object',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um objeto',
      userMessage: 'Campo inválido {1} - o valor deve ser um objeto.',
    },
  },
  20018: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value inner ({2})',
      userMessage: 'Invalid field {1} - it must be filled with a value inner ({2})',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser estar entre ({2})',
      userMessage: 'Campo inválido {1} - o valor deve estar entre ({2})',
    },
  },
  20019: {
    httpcode: 400,
    en: {
      developerMessage: 'Missing request body',
      userMessage: 'Missing request body',
    },
    'pt-BR': {
      developerMessage: 'Falta request body',
      userMessage: 'O corpo da requisição está faltando.',
    },
  },
  20020: {
    httpcode: 400,
    en: {
      developerMessage: 'Malformed request body',
      userMessage: 'Malformed request body',
    },
    'pt-BR': {
      developerMessage: 'Request body mal implementado',
      userMessage: 'O corpo da requisição não foi implementado corretamente',
    },
  },
  20021: {
    httpcode: 405,
    en: {
      developerMessage: 'Method not allowed',
      userMessage: 'Method not allowed',
    },
    'pt-BR': {
      developerMessage: 'Método não permitido',
      userMessage: 'Método não permitido',
    },
  },
  20022: {
    httpcode: 404,
    en: {
      developerMessage: 'Resource not found',
      userMessage: 'Resource not found',
    },
    'pt-BR': {
      developerMessage: 'Recurso não encontrado',
      userMessage: 'Recurso não encontrado',
    },
  },
  20023: {
    httpcode: 404,
    en: {
      developerMessage: '{0} not found',
      userMessage: 'You attempted to get a {0}, but did not find any',
    },
    'pt-BR': {
      developerMessage: '{0} não encontrado',
      userMessage: 'Você fez uma requisição a {0}, mas nada foi encontrado',
    },
  },
  20024: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value delimited with [{2}]',
      userMessage: 'Invalid field {1} - it must be filled with a value delimited with [{2}]',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser delimitado por [{2}]',
      userMessage: 'Campo inválido {1} - o valor deve ser delimitado por [{2}]',
    },
  },
  20025: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify period or period.start and period.end',
      userMessage: 'Enter with field period or period.start and period.end',
    },
    'pt-BR': {
      developerMessage: 'Query params inválidos - especifique period ou period.start e period.end',
      userMessage: 'Informe o período ou inicio e fim',
    },
  },
  20026: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid zipcode',
      userMessage: 'Invalid field {1} - it must be filled with a valid zipcode',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um CEP válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um CEP válido',
    },
  },
  20027: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify zipcode or latitude and longitude',
      userMessage: 'Enter with field zipcode or latitude and longitude',
    },
    'pt-BR': {
      developerMessage: 'Query param inválido - informe zipcode ou latitude e longitude',
      userMessage: 'Informe um CEP ou coordenadas de latitude e longitude',
    },
  },
  20028: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid base64 encoding',
      userMessage: 'Invalid field {1} - it must be filled with a valid base64 encoding',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser códificado em base64',
      userMessage: 'Campo inválido {1} - o valor deve ser códificado em base64',
    },
  },
  20029: {
    httpcode: 400,
    en: {
      developerMessage: '{0} not belong to {1}',
      userMessage: 'You attempted to use a {0}, but it does not belong to {1}',
    },
    'pt-BR': {
      developerMessage: '{0} não pertence a {1}',
      userMessage: 'Você tentou usar {0}, mas o mesmo não pertence a {1}',
    },
  },
  20030: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with at least {2} words',
      userMessage: 'Invalid field {1} - it must be filled with at least {2} words',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ter ao menos {2} palavras',
      userMessage: 'Campo inválido {1} - o valor deve ter ao menos {2} palavras',
    },
  },
  20031: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with at least {2} letters each',
      userMessage: 'Invalid field {1} - it must be filled with at least {2} letters each',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ter ao menos {2} letras cada',
      userMessage: 'Campo inválido {1} - o valor deve ter ao menos {2} letras cada',
    },
  },
  20032: {
    httpcode: 400,
    en: {
      developerMessage: 'Missing query parameters - specify cpf, cnpj or name_contains',
      userMessage: 'Enter with field cpf, cnpj or name_contains',
    },
    ['pt-BR']: {
      developerMessage: 'Query params faltando - informe cpf, cnpj ou name_contains',
      userMessage: 'Informe o campo cpf, cnpj ou name_contains',
    },
  },
  20033: {
    httpcode: 409,
    en: {
      developerMessage: '{0} already exists',
      userMessage: 'You attempted to create {0}, but already exists',
    },
    'pt-BR': {
      developerMessage: '{0} já existe',
      userMessage: 'Você tentou criar {0}, mas um registro já existe',
    },
  },
  20034: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with the max {2}',
      userMessage: 'Invalid field {1} - it must be filled with the max {2}',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor máximo de deve ser {2}',
      userMessage: 'Campo inválido {1} - o valor máximo de deve ser {2}',
    },
  },
  20035: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it is not allowed',
      userMessage: 'Invalid field {1} - it is not allowed',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - parâmetro não permitido',
      userMessage: 'Campo inválido {1} - não permitido',
    },
  },
  20036: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid area code',
      userMessage: 'Invalid field {1} - it must be filled with a valid area code',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um código de área válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um código de área válido',
    },
  },
  20037: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid phone number',
      userMessage: 'Invalid field {1} - it must be filled with a valid phone number',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um número de telefone válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um número de telefone válido',
    },
  },
  20038: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid bank number',
      userMessage: 'Invalid field {1} - it must be filled with a valid bank number',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um número de banco válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um número de banco válido',
    },
  },
  20039: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid bank account number, including a separator and digit',
      userMessage: 'Invalid field {1} - it must be filled with a valid bank account number, including a separator and digit',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um número de conta bancária, incluindo separador e dígito',
      userMessage: 'Campo inválido {1} - o valor deve ser um número de conta bancária, incluindo separador e dígito',
    },
  },
  20040: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid week day',
      userMessage: 'Invalid field {1} - it must be filled with a valid week day',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um dia da semana válido',
      userMessage: 'Campo inválido {1} - o valor deve ser um dia da semana válido',
    },
  },
  20041: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify issuedate or issuer.id',
      userMessage: 'Enter with field issuedate or issuer.id',
    },
    'pt-BR': {
      developerMessage: 'Query param inválido - informe issuedate ou issuer.id',
      userMessage: 'Informe o campo issuedate ou issuer.id',
    },
  },
  20042: {
    httpcode: 400,
    en: {
      developerMessage: 'Fill only one field ({0}{1}{2})',
      userMessage: 'Fill only one field ({0}{1}{2})',
    },
    'pt-BR': {
      developerMessage: 'Preencha apenas um campo ({0}{1}{2})',
      userMessage: 'Preencha apenas um campo ({0}{1}{2})',
    },
  },
  20043: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with unique value',
      userMessage: 'Invalid field {1} - it must be filled with unique value',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser único',
      userMessage: 'Campo inválido {1} - o valor deve ser único',
    },
  },
  20044: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a license plate',
      userMessage: 'Invalid field {1} - it must be filled with a license plate',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser uma placa de veículo',
      userMessage: 'Campo inválido {1} - o valor deve ser uma placa de veículo',
    },
  },
  20045: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid {2} for this {3}',
      userMessage: 'Invalid field {1} - it must be filled with a valid {2} for this {3}',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor de ser {2} válido para {3}',
      userMessage: 'Campo inválido {1} - o valor de ser {2} válido para {3}',
    },
  },
  20046: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameter compensation - it must be filled with a valid invoice',
      userMessage: 'Invalid field compensation - it must be filled with a valid invoice',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor de ser {2} válido para {3}',
      userMessage: 'Campo inválido {1} - o valor de ser {2} válido para {3}',
    },
  },
  20047: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameter delivery address',
      userMessage: 'Invalid field delivery addres',
    },
    'pt-BR': {
      developerMessage: 'Body parameter delivery address inválido',
      userMessage: 'Endereço de entrega inválido',
    },
  },
  20048: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameter invoice',
      userMessage: 'Field invoice can\'t be Conferred',
    },
    'pt-BR': {
      developerMessage: 'Body parameter invoice inválido',
      userMessage: 'Nota fiscal inválida',
    },
  },
  20049: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameter client.id or header parameter client.password',
      userMessage: 'Invalid fields client.id or client.password',
    },
    'pt-BR': {
      developerMessage: 'Body parameter client.id ou Header paramenter client.password inválido',
      userMessage: 'Campos inválidos client.id ou client.password',
    },
  },
  20050: {
    httpcode: 400,
    en: {
      developerMessage: 'Invoice can not be canceled automatically',
      userMessage: 'Invoice can not be canceled automatically',
    },
    'pt-BR': {
      developerMessage: 'Nota fiscal não pode ser cancelada automaticamente',
      userMessage: 'Nota fiscal não pode ser cancelada automaticamente',
    },
  },
  20051: {
    httpcode: 400,
    en: {
      developerMessage: 'State branches should be equal',
      userMessage: 'State branches should be equal',
    },
    'pt-BR': {
      developerMessage: 'Estado/Filiais devem ser iguais',
      userMessage: 'Estado/Filiais devem ser iguais',
    },
  },
  20052: {
    httpcode: 400,
    en: {
      developerMessage: 'Branch Origin should be shop',
      userMessage: 'Branch Origin should be shop',
    },
    'pt-BR': {
      developerMessage: 'Filial de origem deve ser loja',
      userMessage: 'Filil de origem deve ser loja',
    },
  },
  20053: {
    httpcode: 400,
    en: {
      developerMessage: 'Branch Destination should be shop',
      userMessage: 'Branch Destination should be shop',
    },
    'pt-BR': {
      developerMessage: 'Filial de destino deve ser loja',
      userMessage: 'Filial de destino deve ser loja',
    },
  },
  20054: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify period_greater and period_lesser or salesordernumber_greater',
      userMessage: 'Enter with field period_greater and period_lesser or salesordernumber_greater',
    },
    'pt-BR': {
      developerMessage: 'Query param inválido - Informe pediod_greater e period_lesser ou salesordernumber_greater',
      userMessage: 'Informe pediod_greater e period_lesser ou salesordernumber_greater',
    },
  },
  20055: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters period_greater and period_lesser - the interval between dates is greater than 7 days',
      userMessage: 'Invalid fields period_greater and period_lesser - the interval between dates is greater than 7 days',
    },
    'pt-BR': {
      developerMessage: 'Query params inválidos pediod_greater e period_lesser - o intervalo entre datas deve é maior que 7 dias',
      userMessage: 'Campos inválidos pediod_greater e period_lesser - o intervalo entre datas deve é maior que 7 dias',
    },
  },
  20056: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameter salesordernumber_lesser - the date of this order is lesser than 7 days',
      userMessage: 'Invalid field salesordernumber_lesser - the date of this order is lesser than 7 days',
    },
    'pt-BR': {
      developerMessage: 'Query param inválido salesordernumber_lesser - a data do pedido é menor que 7 dias',
      userMessage: 'Campo inválido salesordernumber_lesser - a data do pedido é menor que 7 dias',
    },
  },
  20057: {
    httpcode: 400,
    en: {
      developerMessage: 'Unable to change the Order Traking Status - It already has a finished status',
      userMessage: 'Unable to change the Order Traking Status - It already has a finished status',
    },
    'pt-BR': {
      developerMessage: 'Impossível mudar o status de tracking do pedido pois o mesmo já possui status finalizador',
      userMessage: 'Impossível mudar o status de tracking do pedido pois o mesmo já possui status finalizador',
    },
  },
  20058: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameters - specify products or bundles',
      userMessage: 'Enter with field products or bundles',
    },
    'pt-BR': {
      developerMessage: 'Body parameter inválido - informe produtos ou bundles',
      userMessage: 'Informe produtos ou bundles',
    },
  },
  20059: {
    httpcode: 400,
    en: {
      developerMessage: 'Product dimensions not compatible with Pick Up Store',
      userMessage: 'You are not allowed to pick up theses products in store due to the dimensions of one of them',
    },
    'pt-BR': {
      developerMessage: 'As dimensões do produto não são compatíveis com Retira Loja',
      userMessage: 'As dimensões do produto não são compatíveis com Retira Loja',
    },
  },
  20060: {
    httpcode: 400,
    en: {
      developerMessage: 'Product currently unavailable in stock',
      userMessage: 'Product currently unavailable in stock',
    },
    'pt-BR': {
      developerMessage: 'Produto atualmente indisponível em estoque',
      userMessage: 'Produto atualmente indisponível em estoque',
    },
  },
  20061: {
    httpcode: 404,
    en: {
      developerMessage: 'Product not found',
      userMessage: 'You attempted to get a Product, but did not find any',
    },
    'pt-BR': {
      developerMessage: 'Produto não encontrado',
      userMessage: 'Produto não encontrado',
    },
  },
  20062: {
    httpcode: 404,
    en: {
      developerMessage: 'ZipCode not found',
      userMessage: 'You attempted to get a ZipCode, but did not find any',
    },
    'pt-BR': {
      developerMessage: 'CEP não encontrado',
      userMessage: 'CEP não encontrado',
    },
  },
  20063: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify branch.id or branchdestination.id',
      userMessage: 'Enter with field branch.id or branchdestination.id',
    },
    'pt-BR': {
      developerMessage: 'Query parameters inválidos - informe branch.id ou branchdestination.id',
      userMessage: 'Informe branch.id ou branchdestination.id',
    },
  },
  20064: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - Maximum length of {2} characters exceeded',
      userMessage: 'Invalid field {1} - Maximum length of {2} characters exceeded',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - Tamanho máximo de {2} caracteres ultrapassado',
      userMessage: 'Campo inválido {1} - Tamanho máximo de {2} caracteres ultrapassado',
    },
  },
  20065: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify barcode, sku, modifiedat_lesser or modifiedat_greater',
      userMessage: 'Enter with field barcode, sku, modifiedat_lesser or modifiedat_greater',
    },
    'pt-BR': {
      developerMessage: 'Query parameters inválidos - informe barcode, sku, modifiedat_lesser ou modifiedat_greater',
      userMessage: 'Informe barcode, sku, modifiedat_lesser ou modifiedat_greater',
    },
  },
  20066: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameters {1} and {2} - the interval between dates is greater than 7 days',
      userMessage: 'Invalid fields {1} and {2} - the interval between dates is greater than 7 days',
    },
    'pt-BR': {
      developerMessage: 'Query parameters inválidos - informe barcode, sku, modifiedat_lesser ou modifiedat_greater',
      userMessage: 'Informe barcode, sku, modifiedat_lesser ou modifiedat_greater',
    },
  },
  20067: {
    httpcode: 404,
    en: {
      developerMessage: 'ServiceAgreement not found',
      userMessage: 'You attempted to get a ServiceAgreement, but did not find any',
    },
    'pt-BR': {
      developerMessage: 'ServiceAgreement não encontrado',
      userMessage: 'Acorde de serviço não encontrado',
    },
  },
  20068: {
    httpcode: 404,
    en: {
      developerMessage: 'URL base path not found',
      userMessage: 'Resource not found',
    },
    'pt-BR': {
      developerMessage: 'URL base não encontrada',
      userMessage: 'Endereço não encontrado',
    },
  },
  20076: {
    httpcode: 400,
    en: {
      developerMessage: 'The option of payment through the carnet not allowed for orders that contain only services',
      userMessage: 'The option of payment through the carnet not allowed for orders that contain only services',
    },
    'pt-BR': {
      developerMessage: 'Opção de pagamento por carnê não está disponível para pedidos somente com serviços',
      userMessage: 'Opção de pagamento por carnê não está disponível para pedidos somente com serviços',
    },
  },
  20077: {
    httpcode: 429,
    en: {
      developerMessage: 'Too Many Requests {0}',
      userMessage: 'Too Many Requests {0}',
    },
    'pt-BR': {
      developerMessage: 'Quantidade excessiva de requisições {0}',
      userMessage: 'Quantidade excessiva de requisições {0}',
    },
  },
  20078: {
    httpcode: 409,
    en: {
      developerMessage: 'Unable to cancel this Reserve - It must be confirmed first',
      userMessage: 'Unable to cancel this Reserve - It must be confirmed first',
    },
    'pt-BR': {
      developerMessage: 'Não foi possível cancelar a reserva - necessário confirmação prévia',
      userMessage: 'Não foi possível cancelar a reserva - necessário confirmação prévia',
    },
  },
  20079: {
    httpcode: 409,
    en: {
      developerMessage: 'Unable to edit this Reserve - It is already confirmed',
      userMessage: 'Unable to edit this Reserve - It is already confirmed',
    },
    'pt-BR': {
      developerMessage: 'Não foi possível cancelar a reserva - necessário confirmação prévia',
      userMessage: 'Não foi possível cancelar a reserva - necessário confirmação prévia',
    },
  },
  20080: {
    httpcode: 409,
    en: {
      developerMessage: 'Status transition not allowed - Reserve already cancelled',
      userMessage: 'Status transition not allowed - Reserve already cancelled',
    },
    'pt-BR': {
      developerMessage: 'Status de transição não permitido - A reserva já foi cancelada',
      userMessage: 'Status de transição não permitido - A reserva já foi cancelada',
    },
  },
  20081: {
    httpcode: 412,
    en: {
      developerMessage: 'Status transition not allowed',
      userMessage: 'Status transition not allowed',
    },
    'pt-BR': {
      developerMessage: 'Status de transição não permitido',
      userMessage: 'Status de transição não permitido',
    },
  },
  20082: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled to {2} decimal places',
      userMessage: 'Invalid field {1} - it must be filled to {2} decimal places',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido - o valor deve ser {2} com duas casas decimais',
      userMessage: 'Campo {1} inválido - o valor deve ser {2} com duas casas decimais',
    },
  },
  20083: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with {2} character(s)',
      userMessage: 'Invalid field {1} - it must be filled with {2} character(s)',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido - o valor deve ter {2} caracteres',
      userMessage: 'Campo {1} inválido - o valor deve ter {2} caracteres',
    },
  },
  20084: {
    httpcode: 400,
    en: {
      developerMessage: 'Unable to Reserve products - Insufficient stock balance',
      userMessage: 'Unable to Reserve products - Insufficient stock balance',
    },
    'pt-BR': {
      developerMessage: 'Não foi possível reservar produtos - estoque insuficiente',
      userMessage: 'Não foi possível reservar produtos - estoque insuficiente',
    },
  },
  20085: {
    httpcode: 412,
    en: {
      developerMessage: 'Unable to do this Reserve',
      userMessage: 'Unable to do the reserve - It\'s should be canceled first!',
    },
    'pt-BR': {
      developerMessage: 'Não foi possível fazer a reserva',
      userMessage: 'Não foi possível fazer a reserva - é preciso cancelar primeiro',
    },
  },
  20086: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a slug (are three characters where the first is a letter and the other two can be numbers and letters)',
      userMessage: 'Invalid field {1} - it must be filled with a slug (are three characters where the first is a letter and the other two can be numbers and letters)',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser um slug (3 caracteres onde o primeiro é uma letra e os demais podem ser números e letras)',
      userMessage: 'Campo {1} inválido {0} - o valor deve ser um slug (3 caracteres onde o primeiro é uma letra e os demais podem ser números e letras)',
    },
  },
  20087: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value greater or equals than {2}',
      userMessage: 'Invalid field {1} - it must be filled with a value greater or equals than {2}',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser maior ou igual a {2}',
      userMessage: 'Campo {1} inválido {0} - o valor deve ser maior ou igual a {2}',
    },
  },
  20088: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value lesser or equals than {2}',
      userMessage: 'Invalid field {1} - it must be filled with a value lesser or equals than {2}',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser menor ou igual a {2}',
      userMessage: 'Campo {1} inválido {0} - o valor deve ser menor ou igual a {2}',
    },
  },
  20089: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid URI',
      userMessage: 'Invalid field {1} - it must be filled with a valid URI',
    },
    'pt-BR': {
      developerMessage: 'Parâmetro {1} inválido {0} - o valor deve ser uma URI válida',
      userMessage: 'Campo {1} inválido {0} - o valor deve ser uma URI válida',
    },
  },
  20090: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid combination of parameters',
      userMessage: '{0}',
    },
    'pt-BR': {
      developerMessage: 'Combinação inválida de parâmetros',
      userMessage: '{0}',
    },
  },
  20091: {
    httpcode: 409,
    en: {
      developerMessage: 'Unable to delete this {0}. It is already confirmed',
      userMessage: 'Unable to delete this {0}. It is already confirmed',
    },
    'pt-BR': {
      developerMessage: 'Não é possível deletar {0} pois já está confirmado',
      userMessage: 'Não é possível deletar {0} pois já está confirmado',
    },
  },
  20092: {
    httpcode: 400,
    en: {
      developerMessage: '{0} not eligible for exchange',
      userMessage: 'You attempted to verify the exchange eligibility for a {0}, but the eligibility is not available for this {0}',
    },
    'pt-BR': {
      developerMessage: '{0} não está elegível para troca/cancelamento',
      userMessage: 'Você tentou verificar a eligibilidade para troca/cancelamento de {0}, mas o mesmo não está mais elegível.',
    },
  },
  20093: {
    httpcode: 400,
    en: {
      developerMessage: 'Unable to change the Order Traking Status - It already has reached the {0} event limit',
      userMessage: 'Unable to change the Order Traking Status - It already has reached the {0} event limit',
    },
    'pt-BR': {
      developerMessage: 'Não foi possível mudar o status de tracking para o pedido - o mesmo já alcançou o {0} limite de eventos',
      userMessage: 'Não foi possível mudar o status de tracking para o pedido - o mesmo já alcançou o {0} limite de eventos',
    },
  },
  20094: {
    httpcode: 409,
    en: {
      developerMessage: 'Unable to save. It has already a {0} in this branch with same range and transport_type, with some of these route ids or branch ids. {1}',
      userMessage: 'Unable to save. It has already a {0} in this branch with same range and transport_type, with some of these route ids or branch ids. {1}',
    },
    'pt-BR': {
      developerMessage: 'Não foi possível salvar. Já existem registros de {0} nesta filial com a mesma operação e rotas ou filiais. {1}',
      userMessage: 'Não foi possível salvar. Já existem registros de {0} nesta filial com a mesma operação e rotas ou filiais. {1}',
    },
  },
  20095: {
    httpcode: 400,
    en: {
      developerMessage: 'Unable to save. This modality is not enabled to change tracking status',
      userMessage: 'Unable to save. This modality is not enabled to change tracking status',
    },
    'pt-BR': {
      developerMessage: 'Não foi possível salvar. Esta modalidade não está habilitada para mudar o status de tracking',
      userMessage: 'Não foi possível salvar. Esta modalidade não está habilitada para mudar o status de tracking',
    },
  },
  20096: {
    httpcode: 405,
    en: {
      developerMessage: 'Invalid input {0}. Message: {1}',
      userMessage: 'Invalid input {0}. Message: {1}',
    },
    'pt-BR': {
      developerMessage: 'Input {0} inválido. Mensagem: {1}',
      userMessage: 'Input {0} inválido. Mensagem: {1}',
    },
  },
  20097: {
    httpcode: 405,
    en: {
      developerMessage: '{0} not found',
      userMessage: '{0} not found',
    },
    'pt-BR': {
      developerMessage: '{0} não encontrado',
      userMessage: '{0} não encontrado',
    },
  },
  20098: {
    httpcode: 405,
    en: {
      developerMessage: '{0} in URL must be equal in payload',
      userMessage: '{0} in URL must be equal in payload',
    },
    'pt-BR': {
      developerMessage: '{0} na URL deve ser igual no payload',
      userMessage: '{0} na URL deve ser igual no payload',
    },
  },
  20099: {
    httpcode: 405,
    en: {
      developerMessage: 'Not allowed: {0} with processed status',
      userMessage: 'Not allowed: {0} with processed status',
    },
    'pt-BR': {
      developerMessage: 'Não permitido: {0} com status processado',
      userMessage: 'Não permitido: {0} com status processado',
    },
  },
  20100: {
    httpcode: 405,
    en: {
      developerMessage: 'Not allowed because of {0} status',
      userMessage: 'Not allowed because of {0} status',
    },
    'pt-BR': {
      developerMessage: 'Não permitido: {0} com status processado',
      userMessage: 'Não permitido: {0} com status processado',
    },
  },
  20101: {
    httpcode: 400,
    en: {
      developerMessage: 'Unable to change the Order Tracking Status - This status is not allowed for {0}',
      userMessage: 'Unable to change the Order Tracking Status - This status is not allowed for {0}',
    },
  },
  20102: {
    httpcode: 400,
    en: {
      developerMessage: '{0} not eligible for {1}',
      userMessage: 'You attempted to verify the eligibility for a {0}, but the eligibility is not available for this {0}',
    },
  },
  20103: {
    httpcode: 412,
    en: {
      developerMessage: 'Unable to integrate this order',
      userMessage: 'Unable to integrate this order - this option has been disabled!',
    },
  },
  20140: {
    httpcode: 400,
    en: {
      developerMessage: 'Unable to delete {0}',
      userMessage: 'Unable to delete {0} - You attempted to delete {0}, but there are {1} bound yet.',
    },
  },
  20141: {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid date range',
      userMessage: 'Invalid date range - start date value must be lesser than date end value',
    },
    'pt-BR': {
      developerMessage: 'Data inicial precisa ser menor que a data final',
      userMessage: 'Data inicial precisa ser menor que a data final',
    },
  },
  30001: {
    httpcode: 401,
    en: {
      developerMessage: 'Unauthorized - {0}',
      userMessage: 'You are not authorized to perform this operation',
    },
    'pt-BR': {
      developerMessage: 'Não autorizado - {0}',
      userMessage: 'Você não está autorizado a executar esta operação',
    },
  },
  999: {
    en: {
      developerMessage: '{0}',
      userMessage: '{1}',
    },
  },
};