
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
    let data = new Date();
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear() + 2;
    // Data no fomato MM/AAAA
    return mes + '/' + ano;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { validar_cep, validar_email, validar_telefone, validar_cartao, receber_validade_cartao, sleep }