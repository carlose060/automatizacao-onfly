
/*
    Todas funções com incial validar_ são responsaveis por validar os dados recebidos por meio de expressões regulares.
    *
    * @param {string} dado - Dado a ser validado.
    * @returns {boolean} Retorna `true` se a sequência passou na expressão regular `false` caso contrário.
*/

function validar_cep(cep) {
    cep = cep.match(/[\d]/g)
    return cep.length == 8
}

function validar_email(email) {
    return email.match(/^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/) != null
}

function validar_telefone(telefone) {
    telefone = telefone.match(/[\d]/g)
    return telefone.length >= 10   
}

function validar_cartao(cartao) {
    cartao = cartao.match(/[\d]/g)
    return cartao.length == 16
  }
  
function receber_validade_cartao() {
    /*
        Função resposanvel por gerar um numero de validade de cartão de credito valido com base no mês e ano atual,
        devido ao fato de que esse dado não é fornecido pela API.
        *
        * @returns {string} Retorna a validade do cartão no formato MM/AAAA.
    */
    let data = new Date();
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear() + 2;
    // Data no fomato MM/AAAA
    return mes + '/' + ano;
}

function sleep(ms) {
    /*
        Função responsavel por fazer o script aguardar um tempo em milisegundos.
        *
        * @param {number} ms - Tempo em milisegundos.
        * @returns {Promise} Retorna uma promise que é resolvida após o tempo especificado.
    */
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { validar_cep, validar_email, validar_telefone, validar_cartao, receber_validade_cartao, sleep }