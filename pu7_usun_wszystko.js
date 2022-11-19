const options = ["Potwierdź", "Anuluj"];
let messageNode = document.getElementById('message');

const app = new Aplikacja();
messageNode.textContent = app.wyswietlMonit('PU7_opcje');

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
            app.usunWszystkieElementy();
            messageNode.textContent = app.wyswietlMonit('PU7_sukces');
            return
        } else {
            location.href = "./pu2_zarzadzaj.html";
            return
        }
    }
}
