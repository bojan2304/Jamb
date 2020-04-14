class Igra {
    constructor(nameG, loc) {
        this.gameName = nameG;
        this.gameLocation = loc;
        this.listPlayers = [];
    }
    add(player) {
        this.listPlayers.push(player);
    }
    draw(element) {

        let h1 = document.createElement("h1");
        h1.innerText = `Naziv: ${this.gameName} , Lokacija: ${this.gameLocation}`;
        element.appendChild(h1);

        let divContainer = document.createElement("div");
        divContainer.className = "container";
        element.appendChild(divContainer);

        let playerNameSection = document.createElement("section");
        playerNameSection.className = "ime";
        divContainer.appendChild(playerNameSection);

        let playerDiceSection = document.createElement("section");
        playerDiceSection.className = "kockice-span";
        divContainer.appendChild(playerDiceSection);

        let playerButtonsSection = document.createElement("section");
        playerButtonsSection.className = "dugmici";
        divContainer.appendChild(playerButtonsSection);

        let divResult = document.createElement("div");
        divResult.className = "rezultati";
        divContainer.appendChild(divResult);

        let p = document.createElement("p");
        p.innerText = "Trenutno stanje pobeda:"
        divResult.appendChild(p);

        let ul = document.createElement("ul");
        ul.className = "nadimak";
        divResult.appendChild(ul);

        let buttonResult = document.createElement("input");
        buttonResult.type = "button";
        buttonResult.value = "Odredi pobednika";
        buttonResult.className = "odrediPobednika";
        divContainer.appendChild(buttonResult);

        buttonResult.onclick = () => {
            for (let i = 0; i < this.listPlayers.length; i++) {
                var niz = this.listPlayers[i].dices;
                for (let j = 0; j < niz.length; j++) {
                    this.listPlayers[i].diceResult += Number(niz[j].innerText);
                }
            }
            var max = this.listPlayers.sort((a, b) => b.diceResult - a.diceResult)[0];
            max.victResult++;
            max.liValue.innerText = `${max.fullName.split(" ")[1]} : ${max.victResult}`;
            
            for (let i = 0; i < this.listPlayers.length; i++) {
                var niz = this.listPlayers[i].dices;
                for (let j = 0; j < niz.length; j++) {
                    this.listPlayers[i].diceResult = 0;
                }
            } 
        }
        this.listPlayers.forEach(element => {
            element.drawPlayer(playerNameSection, playerDiceSection, playerButtonsSection, ul);
        })
    }
}

class Igrac {
    constructor(name) {
        this.dices = [];
        this.fullName = name;
        this.diceResult = 0;
        this.victResult = 0;
        this.liValue = undefined;
    }
    drawPlayer(el1, el2, el3, el4) {
        let name = document.createElement("p");
        name.textContent = `${this.fullName}`;
        el1.appendChild(name);

        let div = document.createElement("div");
        el2.appendChild(div);

        let dice;
        for (let i = 0; i < 5; i++) {
            dice = document.createElement("span");
            div.appendChild(dice);
            this.dices.push(dice);
        }

        let div1 = document.createElement("div");
        el3.appendChild(div1);

        let buttonIgraj = document.createElement("input");
        buttonIgraj.type = "button";
        buttonIgraj.value = "Igraj";
        div1.appendChild(buttonIgraj);

        let li = document.createElement("li");
        li.innerText = `${this.fullName.split(" ")[1]} : ${this.victResult}`;
        el4.appendChild(li);
        this.liValue = li;

        buttonIgraj.onclick = () => {
            for (let i = 0; i < this.dices.length; i++) {
                let x = Math.floor(Math.random() * 6) + 1;
                this.dices[i].textContent = x;
            }
        }
    }
}

var igra1 = new Igra("Jamb", "Nis");

var igrac = new Igrac("Milian Mika Mikic");
var igrac1 = new Igrac("Petar Pera Peric");
var igrac2 = new Igrac("Zivorad Zika Zikic");
var igrac3 = new Igrac("Predrag Pedja Peric");

igra1.add(igrac);
igra1.add(igrac1);
igra1.add(igrac2);
igra1.add(igrac3);

igra1.draw(document.body);

//Druga igra

var igra2 = new Igra("Jamb", "Leskovac");

var x = new Igrac("Miodrag Miki Mikic");
var y = new Igrac("Bojan Boki Kostic");
var z = new Igrac("Marko Mare Markovic");

igra2.add(x);
igra2.add(y);
igra2.add(z);

igra2.draw(document.body);