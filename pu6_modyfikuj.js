let options = ["Anuluj"];
let messageNode = document.getElementById('message');
let choosenOne; 
const app = new Aplikacja();
messageNode.textContent = app.wyswietlMonit('PU6_opcje');

let checkboxNodes = document.getElementsByTagName("input");
for(let checkbox of checkboxNodes) {
    let chbox = document.getElementById(checkbox.id);
    chbox.addEventListener("click", () => {
        if (checkbox.checked) {
            makeActionBasedOnCheckedCheckBox();
        } else {
            options = ["Anuluj"];
            messageNode.textContent = app.wyswietlMonit('PU6_opcje');
        }
    });
}

function makeActionBasedOnCheckedCheckBox() {
    let checkboxNodes = document.getElementsByTagName("input");
    for(let checkbox of checkboxNodes) {
        if (checkbox.checked) {
            choosenOne = checkbox;
            let elementsNode = document.getElementById("elements");
            let optionsNode = document.getElementById("options");
            elementsNode.replaceChildren();
            optionsNode.replaceChildren();
            options = ["Potwierdź", "Anuluj"];
            messageNode.textContent = app.wyswietlMonit('PU6_opcje_checked');
            let buttons = document.getElementsByTagName("button");
            for (let button of buttons) {
                let btn = document.getElementById(button.id);
                    btn.addEventListener("click", () => {
                    makeActionBasedOnChoosedOption2();
                });
            }
        }
    }
}

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
                case 'Anuluj':
                    location.href = "./pu2_zarzadzaj.html";
                    break;
            }
            return
        }
    }
}

function makeActionBasedOnChoosedOption2() {
    let buttons = document.getElementsByTagName("button");
    for(let button of buttons) {
        let toogledButton = document.getElementById(button.id);
        if (toogledButton.dataset.choosed == "true") {
            switch (button.id) {
                case 'Potwierdź':
                    let choosed = choosenOne.name;
                    let newElementName = document.getElementById("name").value;
                    app.modyfikujeElement(choosed, newElementName);
                    messageNode.textContent = app.wyswietlMonit('PU6_sukces');
                    break;
                case 'Anuluj':
                    location.href = "./pu6_modyfikuj.html";
                    break;
            }
            return
        }
    }
}