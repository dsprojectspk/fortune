const options = ["Potwierdź", "Anuluj"];
let messageNode = document.getElementById('message');

const app = new Aplikacja();
messageNode.textContent = app.wyswietlMonit('PU3_opcje');

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
                case 'Potwierdź':
                    let newElementName = document.getElementById("name").value;
                    app.dodajElement(newElementName);
                    messageNode.textContent = app.wyswietlMonit('PU3_sukces');
                    break;
                case 'Anuluj':
                    location.href = "./pu2_zarzadzaj.html";
                    break;
            }
            return
        }
    }
}