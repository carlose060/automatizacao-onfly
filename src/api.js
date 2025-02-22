const { validar_cep, validar_email, validar_telefone, validar_cartao, receber_validade_cartao } = require('./utilitarios');
const config = require('../configs/config.json');






async function recebe_dados_ficticios() {
    try{
        const response = await fetch(config['url_api']);
        let data = await response.json();
       
        var dados_filtrados = {
            'nome'              : data['first_name'] + ' ' + data['last_name'],
            'endereco'          : data['address']['street_address'] ,
            'cidade'            : data['address']['city'],
            'estado'            : data['address']['state'],
            'cep'               : validar_cep(data['address']['zip_code']) ? data['address']['zip_code'] : '34710000',
            'telefone'          : validar_telefone(data['phone_number']) ? data['phone_number'] : '11999999999',
            'email'             : validar_email(data['email']) ? data['email'] : 'email.teste@teste.com',
            'numero_cartao'     : validar_cartao(data['credit_card']['cc_number'])? data['credit_card']['cc_number'] : '4532492851433746',
            'validade_cartao'   : receber_validade_cartao(),
            'cvv'               : 853
        }
    }catch (error){
        console.log(error);
        var dados_filtrados = {
            'nome'              : 'João da Silva',
            'endereco'          : 'Rua dos lagos, 30',
            'cidade'            : 'São Paulo',
            'estado'            : 'SP',
            'cep'               : '34710000',
            'telefone'          : '11999999999',
            'email'             : 'email@gmail.com',
            'numero_cartao'     : '4532492851433746',
            'validade_cartao'   : receber_validade_cartao(),
            'cvv'               : '853'
        }
    }finally{
        return dados_filtrados;
    }
    
}

module.exports = { recebe_dados_ficticios }