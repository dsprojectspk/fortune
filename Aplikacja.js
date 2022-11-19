class Aplikacja {
    #pulaElementowLosowania;

    constructor() {
        if (localStorage.getItem('pulaElementowLosowania') != null) {
            this.#pulaElementowLosowania = localStorage.getItem('pulaElementowLosowania').split(',');
        } else {
            this.#pulaElementowLosowania = [];
        }
    }

    losujElement() {
        const items = this.#pulaElementowLosowania;
        const colors = ["#f82","#0bf","#fb0","#0fb","#b0f","#f0b","#bf0"];
        let k = items.length;
        if (k > 0) {
            let wheel = document.getElementById("wheel");
            let canvas = document.createElement("canvas");
            canvas.id = "canvas";
            canvas.width = "434";
            canvas.height = "438";
            canvas.innerText = "Canvas not supported, use another browser.";
            wheel.appendChild(canvas);
            wheel.classList = "the_wheel";
            let segments = [];
            for (let n = 1; n <= k; n++) {
                let segment = new Map();
                let c = n;
                if (n > colors.length) {
                    c = n - colors.length;
                } else {
                    c = n;
                }
                segment["fillStyle"] = colors[c-1];
                segment["text"] = items[n-1];
                segments.push(segment);
            }
            segments = JSON.parse(JSON.stringify(segments));

            let theWheel = new Winwheel({
                'numSegments'  : k,         // Number of segments
                'outerRadius'  : 212,       // The size of the wheel.
                'centerX'      : 217,       // Used to position on the background correctly.
                'centerY'      : 219,
                'textFontSize' : 28,        // Font size.
                'segments'     : segments,  // Definition of all the segments.
                'animation' :               // Definition of the animation
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,
                    'spins'    : 8,
                    'callbackFinished' : random
                }
            });

            // Begin the spin animation by calling startAnimation on the wheel object.
            theWheel.startAnimation();
        }
    }

    zarzadzajElementami() {

    }
    
    dodajElement(nazwa) {
        this.#pulaElementowLosowania.push(nazwa);
        localStorage.setItem('pulaElementowLosowania', this.#pulaElementowLosowania);
    }
    
    usunElement(nazwa) {
        const start = this.#pulaElementowLosowania.lastIndexOf(nazwa);
        const deleteCount = 1;
        if (start >= 0) {
            this.#pulaElementowLosowania.splice(start, deleteCount);
        }
        localStorage.setItem('pulaElementowLosowania', this.#pulaElementowLosowania);
    }
    
    kopiujElement(nazwa) {
        const id = this.#pulaElementowLosowania.lastIndexOf(nazwa);
        const copiedName = this.#pulaElementowLosowania[id];
        this.dodajElement(copiedName);
    }
    
    modyfikujeElement(nazwa, nowaNazwa) {
        const id = this.#pulaElementowLosowania.lastIndexOf(nazwa);
        this.#pulaElementowLosowania[id] = nowaNazwa;
        localStorage.setItem('pulaElementowLosowania', this.#pulaElementowLosowania);
    }

    usunWszystkieElementy() {
        const poolLength = this.#pulaElementowLosowania.length;
        this.#pulaElementowLosowania.splice(0,poolLength);
        localStorage.clear();
    }

    wyswietlMonit(opt) {
        let info = "";

        switch (opt) {
            case 'PU1_opcje':
                info = "Co chcesz zrobić?";
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU2_opcje':
                    info = "Wybierz opcję?";
                    if (options) {
                        this.wybranieOpcji();
                    }
                    break;
            case 'PU3_opcje':
                info = "Podaj nazwę nowego elementu?";
                if (options) {
                    this.wybranieOpcji();
                }
                this.podanieNazwy();
                break;
            case 'PU3_sukces':
                info = "Pomyślnie dodano nowy element do puli";
                let elementNameNode = document.getElementById("elementName");
                elementNameNode.replaceChildren();
                let optionsNodePU3 = document.getElementById("options");
                let btnPU3 = document.createElement("button");
                btnPU3.innerHTML = "potwierdź";
                btnPU3.type = "button";
                btnPU3.id = "potwierdź";
                btnPU3.addEventListener("click", () => {
                    location.href = "./pu2_zarzadzaj.html";
                });
                optionsNodePU3.replaceChildren(btnPU3);
                break;
            case 'PU4_opcje':
                info = "Wybierz element do usunięcia";
                if (this.#pulaElementowLosowania.length >= 0) {
                    this.wybranieElementu();
                }
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU4_opcje_checked':
                info = choosenOne.name;
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU4_sukces':
                info = "Pomyślnie usunięto wskazany element";
                let optionsNodePU4 = document.getElementById("options");
                let btnPU4 = document.createElement("button");
                btnPU4.innerHTML = "potwierdź";
                btnPU4.type = "button";
                btnPU4.id = "potwierdź";
                btnPU4.addEventListener("click", () => {
                    location.href = "./pu2_zarzadzaj.html";
                });
                optionsNodePU4.replaceChildren(btnPU4);
                break;
            case 'PU5_opcje':
                info = "Wybierz element do skopiowania";
                if (this.#pulaElementowLosowania.length >= 0) {
                    this.wybranieElementu();
                }
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU5_opcje_checked':
                info = choosenOne.name;
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU5_sukces':
                info = "Pomyślnie skopiowano wskazany element";
                let optionsNodePU5 = document.getElementById("options");
                let btnPU5 = document.createElement("button");
                btnPU5.innerHTML = "potwierdź";
                btnPU5.type = "button";
                btnPU5.id = "potwierdź";
                btnPU5.addEventListener("click", () => {
                    location.href = "./pu2_zarzadzaj.html";
                });
                optionsNodePU5.replaceChildren(btnPU5);
                break;
            case 'PU6_opcje':
                info = "Wybierz element do zmodyfikowania";
                if (this.#pulaElementowLosowania.length >= 0) {
                    this.wybranieElementu();
                }
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU6_opcje_checked':
                info = choosenOne.name;
                this.podanieNazwy();
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU6_sukces':
                info = "Pomyślnie zmodyfikowano wskazany element";
                let elementNameNode6 = document.getElementById("elementName");
                elementNameNode6.replaceChildren();
                let optionsNodePU6 = document.getElementById("options");
                let btnPU6 = document.createElement("button");
                btnPU6.innerHTML = "potwierdź";
                btnPU6.type = "button";
                btnPU6.id = "potwierdź";
                btnPU6.addEventListener("click", () => {
                    location.href = "./pu2_zarzadzaj.html";
                });
                optionsNodePU6.replaceChildren(btnPU6);
                break;
            case 'PU7_opcje':
                info = "Czy na pewno chcesz wyczyścić pulę losowania?";
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU7_sukces':
                info = "Pomyslnie wyczyszczono pulę losowania";
                let optionsNodePU7 = document.getElementById("options");
                let btnPU7 = document.createElement("button");
                btnPU7.innerHTML = "potwierdź";
                btnPU7.type = "button";
                btnPU7.id = "potwierdź";
                btnPU7.addEventListener("click", () => {
                    location.href = "./pu2_zarzadzaj.html";
                });
                optionsNodePU7.replaceChildren(btnPU7);
                break;
            case 'PU8_lista_dostepnych_elementow':
                info = "Pula elementów: " + this.#pulaElementowLosowania;
                break;
            case 'PU8_wylosowany_element':
                info = "Wylosowany element: " + randomElement;
                break;
        }

        return info;
    }

    wybranieOpcji() {
        let optionsNode = document.getElementById("options");
        options.forEach(option => {
            let btn = document.createElement("button");
            btn.innerHTML = option;
            btn.type = "button";
            btn.id = [option];
            btn.dataset.id = [option];
            btn.addEventListener("click", () => {
                let buttons = document.getElementsByTagName("button");
                for(let button of buttons) {
                    let toogleButton = document.getElementById(button.id);
                    if (button.id == btn.id) {
                        toogleButton.dataset.choosed = true;
                    } else {
                        toogleButton.dataset.choosed = false;
                    }
                }                
            });
            optionsNode.appendChild(btn);
        })
    }

    podanieNazwy() {
        let elementNameNode = document.getElementById("elementName");
        let textfield  = document.createElement("input");
        textfield.type = "text";
        textfield.name = "name";
        textfield.id = "name";
        let label = document.createElement('label');
        label.setAttribute("for", "name");
        label.innerText = "name";
        elementNameNode.appendChild(label);
        elementNameNode.appendChild(textfield);
    }

    wybranieElementu() {
        let elementsNode = document.getElementById("elements");
        let id = 0;
        this.#pulaElementowLosowania.forEach(element => {
            let div  = document.createElement("div");
            div.id = "form-group-" + element + "-" + id;
            let checkbox  = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = false;
            checkbox.name = element;
            checkbox.id = element + "-" + id;
            checkbox.addEventListener("change", () => {
                let checkboxNodes = elementsNode.getElementsByTagName("input");
                for(let chbox of checkboxNodes) {
                    if (checkbox.checked) {
                        if (chbox.id != checkbox.id) {
                            chbox.disabled = true;
                        }
                    } else {
                        chbox.disabled = false;
                    }
                }
            });
            let label = document.createElement('label');
            label.setAttribute("for", element + "-" + id);
            label.innerText = element;
            id++;
            div.appendChild(label);
            div.appendChild(checkbox);
            elementsNode.appendChild(div);
        });
    }
}

