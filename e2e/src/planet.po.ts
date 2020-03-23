import { browser, by, element } from 'protractor';

export class PlanetPage{
    sleep() {
        browser.driver.sleep(5000);
    }
    completeForm() {
        let id = element.all(by.css('#idTest'));
        let nom = element.all(by.id('nomTest'));
        let hasOxygen = element.all(by.id('oxygenTest'));
        let image = element.all(by.id('imgTest'));
        id.sendKeys(158);
        nom.sendKeys('Mercure');
        hasOxygen.sendKeys("Oui");
        image.sendKeys('/assets/img/Mercure.png');
    }
}

