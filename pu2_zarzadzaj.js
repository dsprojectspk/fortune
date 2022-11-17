const options = ["Dodaj Element", "Usuń Element", "Kopiuj Element", "Zmodyfikuj Element", "Wyczyść Pulę", "Powrót do menu głównego"];
let messageNode = document.getElementById('message');

const app = new Aplikacja();
//console.log(app.wyswietlMonit('PU2_opcje'));
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
                    //console.log(" => Idź do PU3");
                    location.href = "./pu3_dodaj.html";
                    break;
                case 'Usuń Element':
                    //console.log(" => Idź do PU4");
                    location.href = "./pu4_usun.html";
                    break;
                case 'Kopiuj Element':
                    //console.log(" => Idź do PU5");
                    location.href = "./pu5_kopiuj.html";
                    break;
                case 'Zmodyfikuj Element':
                    //console.log(" => Idź do PU6");
                    location.href = "./pu6_modyfikuj.html";
                    break;
                case 'Wyczyść Pulę':
                    //console.log(" => Idź do PU7");
                    location.href = "./pu7_usun_wszystko.html";
                    break;
                case 'Powrót do menu głównego':
                    //console.log(" => Pwrót do PU1");
                    location.href = "./pu1_index.html";
                    break;
            }
            return
        }
    }
}