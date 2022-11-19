const options = ["Dodaj Element", "Usuń Element", "Kopiuj Element", "Zmodyfikuj Element", "Wyczyść Pulę", "Powrót do menu głównego"];
let messageNode = document.getElementById('message');

const app = new Aplikacja();
messageNode.textContent = app.wyswietlMonit('PU2_opcje');

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
                case 'Dodaj Element':
                    location.href = "./pu3_dodaj.html";
                    break;
                case 'Usuń Element':
                    location.href = "./pu4_usun.html";
                    break;
                case 'Kopiuj Element':
                    location.href = "./pu5_kopiuj.html";
                    break;
                case 'Zmodyfikuj Element':
                    location.href = "./pu6_modyfikuj.html";
                    break;
                case 'Wyczyść Pulę':
                    location.href = "./pu7_usun_wszystko.html";
                    break;
                case 'Powrót do menu głównego':
                    location.href = "./pu1_index.html";
                    break;
            }
            return
        }
    }
}