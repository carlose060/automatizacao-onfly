const { Builder, By } = require('selenium-webdriver');
const { recebe_dados_ficticios } = require('./api');
const { sleep } = require('./utilitarios');
const config = require('../configs/config.json');


async function preencher_forms(dados) {
    /*
        Função responsavel por instanciar o objeto do Selenium e preencher os forms da tarefa 01.
        É utlizados os metodos findElement, sendKeys e click para preencher os campos e enviar o formulario.
        Além disso, é utilizado o metodo sleep para aguardar o carregamento da pagina.
        *
        * @param {Object} dados - Objeto contendo os dados do usuário.
        * @param {string} dados.nome - Nome fictício da pessoa.
        * @param {string} dados.endereco - Endereço fictício.
        * @param {string} dados.cidade - Cidade.
        * @param {string} dados.estado - Estado.
        * @param {string} dados.cep - CEP.
        * @param {string} dados.telefone - Telefone.
        * @param {string} dados.email - Email.
        * @param {string} dados.numero_cartao - Número do cartão de credito.
        * @param {string} dados.validade_cartao - Validade do cartão.
        * @param {string} dados.cvv - Código de segurança do cartão.
        * 
        * @returns {boolean} Retorna `true` se o formulario for preenchido corretamente `false` caso ocorra erro de execução.
    */
    let driver = new Builder().forBrowser('firefox').build();

    try {
      
        await driver.get(config['url_tarefa01']);

        let campo_nome = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[1]/div[1]/input"));
        campo_nome.sendKeys(dados['nome']);

        let campo_tel = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[1]/div[2]/input"));
        campo_tel.sendKeys(dados['telefone']);

        let campo_email = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[1]/div[3]/input"));
        campo_email.sendKeys(dados['email']);


        await sleep(1000);
        // botão next
        await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[4]/button[2]")).click();
        

        let campo_cep = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[2]/div[1]/input"));
        campo_cep.sendKeys(dados['cep']);

        let campo_endereco = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[2]/div[2]/input"));
        campo_endereco.sendKeys(dados['endereco']);
        
        let campo_cidaide = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[2]/div[3]/input"));
        campo_cidaide.sendKeys(dados['cidade']);

        let campo_estado = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[2]/div[4]/input"));
        campo_estado.sendKeys(dados['estado']);

        await sleep(1000);
        // botão next
        await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[4]/button[2]")).click();
       
        let campo_titular = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[3]/div[1]/input"));
        campo_titular.sendKeys(dados['nome']);

        let campo_numero = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[3]/div[2]/input"));
        campo_numero.sendKeys(dados['numero_cartao']);

        let campo_validade = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[3]/div[3]/input"));
        campo_validade.sendKeys(dados['validade_cartao']);

        let campo_cvv = await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[3]/div[4]/input"));
        campo_cvv.sendKeys(dados['cvv']);

        await sleep(1000);
        // botão submit
        await driver.findElement(By.xpath("/html/body/div/div[2]/form/div[4]/button[2]")).click();
        await sleep(5000); 
        await driver.quit();
        return true;

    }catch{
        await driver.quit();
        return false;
    } 
   
}

async function main() {
    
    var dados_ficticios = await recebe_dados_ficticios();
    
    if (!preencher_forms(dados_ficticios)) {
        // Tenta novamente caso ocorra erro
        preencher_forms(dados_ficticios);
    }
}

main();
