const options = ["Zarządzaj", "Losuj", "Zakończ"];
let messageNode = document.getElementById('message');

const app = new Aplikacja();
messageNode.textContent = app.wyswietlMonit('PU1_opcje');

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
                    location.href = "./pu2_zarzadzaj.html";
                    break;
                case 'Losuj':
                    location.href = "./pu8_losuj.html";
                    break;
                case 'Zakończ':
                    location.href = "about:blank";
                    break;       
            }
            return
        }
    }
}
