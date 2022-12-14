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
        const colors = ["#eae56f","#89f26e","#7de6ef","#e7706f"];
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
                let c = colors.length - (n % colors.length);
                segment["fillStyle"] = colors[c-1];
                segment["textFillStyle"] = "#222";
                segment["text"] = items[n-1];
                segments.push(segment);
            }
            segments = JSON.parse(JSON.stringify(segments));

            let theWheel = new Winwheel({
                'numSegments'  : k,         // Number of segments
                'outerRadius'  : 212,       // The size of the wheel.
                'centerX'      : 217,       // Used to position on the background correctly.
                'centerY'      : 219,
                'textFontSize' : 22,        // Font size.
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
                info = "Co chcesz zrobi???";
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU2_opcje':
                    info = "Wybierz opcj???";
                    if (options) {
                        this.wybranieOpcji();
                    }
                    break;
            case 'PU3_opcje':
                info = "Podaj nazw?? nowego elementu?";
                if (options) {
                    this.wybranieOpcji();
                }
                this.podanieNazwy();
                break;
            case 'PU3_sukces':
                info = "Pomy??lnie dodano nowy element do puli";
                let elementNameNode = document.getElementById("elementName");
                elementNameNode.classList = "input-group";
                elementNameNode.replaceChildren();
                let optionsNodePU3 = document.getElementById("options");
                let btnPU3 = document.createElement("button");
                btnPU3.innerHTML = "Potwierd??";
                btnPU3.type = "button";
                btnPU3.id = "Potwierd??";
                btnPU3.classList = "btn btn-primary";
                btnPU3.addEventListener("click", () => {
                    location.href = "./pu2_zarzadzaj.html";
                });
                optionsNodePU3.replaceChildren(btnPU3);
                break;
            case 'PU4_opcje':
                info = "Wybierz element do usuni??cia";
                if (this.#pulaElementowLosowania.length >= 0) {
                    this.wybranieElementu();
                }
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU4_opcje_checked':
                info = choosenOne.name;
                let elements = document.getElementById("elements");
                elements.classList = "";
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU4_sukces':
                info = "Pomy??lnie usuni??to wskazany element";
                let optionsNodePU4 = document.getElementById("options");
                let btnPU4 = document.createElement("button");
                btnPU4.innerHTML = "Potwierd??";
                btnPU4.type = "button";
                btnPU4.id = "Potwierd??";
                btnPU4.classList = "btn btn-primary";
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
                let elements5 = document.getElementById("elements");
                elements5.classList = "";
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU5_sukces':
                info = "Pomy??lnie skopiowano wskazany element";
                let optionsNodePU5 = document.getElementById("options");
                let btnPU5 = document.createElement("button");
                btnPU5.innerHTML = "Potwierd??";
                btnPU5.type = "button";
                btnPU5.id = "Potwierd??";
                btnPU5.classList = "btn btn-primary";
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
                let elements6 = document.getElementById("elements");
                elements6.classList = "";
                this.podanieNazwy();
                let elementName6 = document.getElementById("elementName");
                elementName6.classList = "input-group mb-3";
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU6_sukces':
                info = "Pomy??lnie zmodyfikowano wskazany element";
                let elementNameNode6 = document.getElementById("elementName");
                elementNameNode6.classList = "input-group";
                elementNameNode6.replaceChildren();
                let optionsNodePU6 = document.getElementById("options");
                let btnPU6 = document.createElement("button");
                btnPU6.innerHTML = "potwierd??";
                btnPU6.type = "button";
                btnPU6.id = "potwierd??";
                btnPU6.classList = "btn btn-primary";
                btnPU6.addEventListener("click", () => {
                    location.href = "./pu2_zarzadzaj.html";
                });
                optionsNodePU6.replaceChildren(btnPU6);
                break;
            case 'PU7_opcje':
                info = "Czy na pewno chcesz wyczy??ci?? pul?? losowania?";
                if (options) {
                    this.wybranieOpcji();
                }
                break;
            case 'PU7_sukces':
                info = "Pomyslnie wyczyszczono pul?? losowania";
                let optionsNodePU7 = document.getElementById("options");
                let btnPU7 = document.createElement("button");
                btnPU7.innerHTML = "potwierd??";
                btnPU7.type = "button";
                btnPU7.id = "potwierd??";
                btnPU7.classList = "btn btn-primary";
                btnPU7.addEventListener("click", () => {
                    location.href = "./pu2_zarzadzaj.html";
                });
                optionsNodePU7.replaceChildren(btnPU7);
                break;
            case 'PU8_lista_dostepnych_elementow':
                info = "Pula element??w: " + this.#pulaElementowLosowania;
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
            btn.classList = "btn btn-primary";
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
        textfield.classList = "form-control";
        let label = document.createElement('label');
        label.setAttribute("for", "name");
        label.innerText = "name";
        label.classList = "input-group-text"
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
            checkbox.classList = "form-check-input";
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

