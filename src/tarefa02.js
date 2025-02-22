const { Builder, By } = require('selenium-webdriver');
const { sleep } = require('./utilitarios');
const config = require('../configs/config.json');

async function alterar_tag_p(driver) {

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

    const driver = new Builder().forBrowser('firefox').build();
    await driver.get(config['url_tarefa02']);
    alterar_tag_p(driver);
}

main();