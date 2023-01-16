'use strict';
class MyBattleShip {
    constructor() {
        this.grid = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                     [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        this.ships = {1: "Porte-avion", 2: "Croiseur", 3: "Contre-torpilleur", 4: "Sous-marin", 5: "Torpilleur"}
        this.sunkShips = []
        this.createGrid()
        this.createLetters()
        this.createNumbers()
    }

    createGrid() {
        let table = document.createElement("table")
        for (let i = 0; i < this.grid.length; i++) {
            let row = table.insertRow()
            for (let j = 0; j < this.grid[i].length; j++) {
                let cell = row.insertCell()
                cell.addEventListener("click", () => this.hit(i, j))
            }
        }
        document.body.appendChild(table)
    }

    createLetters(){
        let row = document.createElement("tr")
        for(let i = 0; i<= 11; i++){
            let cell = document.createElement("td")
            cell.innerHTML = String.fromCharCode(65 + i)
            row.appendChild(cell)
        }
        document.querySelector("table").prepend(row)
    }

    createNumbers(){
        let rows = document.querySelectorAll("tr")
        for(let i = 1; i<= 11; i++){
            let cell = rows[i].insertCell(0)
            cell.innerHTML = i
        }
    }

    hit(i, j) {
        if (this.grid[i][j] === 0) {
            event.target.style.background = "blue"
        } else {
            event.target.style.background = "red"
            let ship = this.ships[this.grid[i][j]]
            if(!this.sunkShips.includes(ship)){
                this.sunkShips.push(ship)
            }
            if(this.sunkShips.length === Object.keys(this.ships).length){
                console.log("You have won!")
            }
            console.log("Vous avez coulé " + ship)
        }
    }
}

let game = new MyBattleShip();
