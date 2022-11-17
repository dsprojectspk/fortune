const options = ["Zarządzaj", "Losuj", "Zakończ"];
let messageNode = document.getElementById('message');

const app = new Aplikacja();
messageNode.textContent = app.wyswietlMonit('PU1_opcje');

// DEBUG
if (localStorage.getItem('pulaElementowLosowania') == null) {
    app.dodajElement('Strawberry');
    app.dodajElement('Mango');
    app.dodajElement('Apple');
    app.dodajElement('Banana');
    app.dodajElement('Mango');
}
console.log(app.pulaElementowLosowania());
// DEBUG

let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    let btn = document.getElementById(button.id);
    btn.addEventListener("click", () => {
        makeActionBasedOnChoosedOption();
    });
}

function makeActionBasedOnChoosedOption() {
    let buttons = document.getElementsByTagName("button");
    for(let button of buttons) {
        let toogledButton = document.getElementById(button.id);
        if (toogledButton.dataset.choosed == "true") {
            switch (button.id) {
                case 'Zarządzaj':
                    //console.log(" => Idź do PU2");
                    location.href = "./pu2_zarzadzaj.html";
                    break;
                case 'Losuj':
                    //console.log(" => Idź do PU8");
                    location.href = "./pu8_losuj.html";
                    break;
                case 'Zakończ':
                    //console.log(" => ZAKOŃCZ");
                    location.href = "about:blank";
                    break;       
            }
            return
        }
    }
}
