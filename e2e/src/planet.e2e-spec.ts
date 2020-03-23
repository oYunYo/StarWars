import {browser, element, logging, by} from 'protractor';
import {PlanetPage} from './planet.po';

describe('test des planetes', () => {
// Variable contenant notre PlanetPage
let page: PlanetPage;

// Avant de commencer les tests, nous demandons à notre navigateur de se
// rendre à l’URL suivante
 beforeEach(() => {
 page = new PlanetPage();
 browser.get('/planets');
 });

 it('Je compte le nombre de lignes dans le tableau et Recherche le lien d\'ajout de planète et clique dessus', () => {
    element.all(by.css('.linePlanet')).then(totalRows => {
    this.nbLineInit = totalRows.length;
    });
    element.all(by.id('addPlanetLink')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('planets/add');
 });

   it('je remplis le formulaire, je le valide et je suis revenue sur la page d\'accueil', () => {
    // On envoi le navigateur vers l’url d’ajout
     browser.get('/planets/add');
    // Nous remplissons le formulaire d’ajout
     page.completeForm();
     page.sleep();
     // On récupère le bouton submit
     element.all(by.id('submitFormPlanet')).click();
     //il se bloque sur le navigateur voir si tout avait été rempli comme on le souhaitait (pour nous humains,
     // mais c'est mieux aussi pour la machine dans les temps de traitements)
     page.sleep();
    // Quand il est rempli et soumis nous somme redirigé vers une url
     expect(browser.driver.getCurrentUrl()).toContain('/planets');
    });

    it('Une fois sur la page planets on recompte le nombre de lignes du tableau', () => {
    element.all(by.css('.linePlanet')).then(totalRows => {
        this.nbLineInit += 1;
        expect(totalRows.length).toEqual(this.nbLineInit);
        });
    });

 
    it('Test de la suppression', () => {
        browser.get('/planets');
        let firstDeleteButton = element.all(by.css('.testDelete')).first(); 
        firstDeleteButton.click().then(fn => {
        element.all(by.css('.linePlanet')).then(totalRows => {
        this.nbLineInit -= 1;
        expect(totalRows.length).toEqual(this.nbLineInit);
        });
        });
       });

// Quand tout est finis, nous fermons le navigateur et nous affichons les logs
// dans la console
 afterEach(async () => {
 const logs = await browser.manage().logs().get(logging.Type.BROWSER);
 expect(logs).not.toContain(jasmine.objectContaining({
 level: logging.Level.SEVERE,
 } as logging.Entry));
 });
});