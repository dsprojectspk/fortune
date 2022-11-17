let randomElement = ""
let poolNode = document.getElementById('pool');
let elementNode = document.getElementById('element');
const app = new Aplikacja();
poolNode.textContent = app.wyswietlMonit('PU8_lista_dostepnych_elementow');
app.losujElement();
elementNode.textContent = app.wyswietlMonit('PU8_wylosowany_element');
