const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

// Configuración del perfil de Firefox
const profile = new firefox.Profile();
profile.setPreference('browser.helperApps.neverAsk.saveToDisk', 'text/plain,application/pdf');

// Configuración del navegador Firefox
const options = new firefox.Options();
options.setProfile(profile);

// Crear una nueva instancia del navegador Firefox
const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();

// Navegar a la página de Google
driver.get('https://www.google.com');

// Buscar el cuadro de búsqueda y escribir tu nombre
const searchBox = driver.findElement(webdriver.By.name('q'));
searchBox.sendKeys('Stephano');

// Presionar el botón de búsqueda
const searchButton = driver.findElement(webdriver.By.name('btnK'));
searchButton.click();

// Cerrar el navegador
driver.quit();