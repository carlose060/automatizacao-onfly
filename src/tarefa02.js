const { Builder, By } = require('selenium-webdriver');
const { sleep } = require('./utilitarios');
const config = require('../configs/config.json');

async function alterar_tag_p(driver) {
    /*
        Função responsavel por localizar e alterar o texto de todas as tags <p> da pagina.
        É utilizado o metodo findElements para pegar todos os elementos <p> da pagina.
        Em seguida, é utilizado o metodo executeScript para alterar o texto do elemento.
        *
        * @param {WebDriver} driver - Instância do Selenium WebDriver.
        *
        * @returns {void} A função não retorna um valor

    */
    try {
        let elementos = await driver.findElements(By.tagName('p'));
        for (let elemento of elementos) {
            // Executa o script no navegador 
            await driver.executeScript("arguments[0].innerText = 'Texto alterado';", elemento);
        }
    }
    finally{
        await sleep(5000);
        await driver.quit();
    }

}
async function main() {
    /*
        Função principal responsavel por instanciar o objeto do Selenium e chamar a função alterar_tag_p.
        A url da pagina é pega do arquivo de configuração json.
        *
        * @returns {void} A função não retorna um valor
    */
    const driver = new Builder().forBrowser('firefox').build();
    await driver.get(config['url_tarefa02']);
    alterar_tag_p(driver);
}

main();