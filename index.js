class heroi{
	constructor(nomeHeroi, tipoHeroi, armaHeroi, idadeHeroi){
    	this.nomeHeroi = nomeHeroi
        this.tipoHeroi = tipoHeroi
        this.armaHeroi = armaHeroi
        this.idadeHeroi = idadeHeroi
    }
	
    rodar(){
    	console.log(`O herói ${this.nomeHeroi} que é um ${this.tipoHeroi} atacou usando sua ${this.armaHeroi} e derrotou seu inimigo.`) 
    }
}

let Guerreiro = new heroi("Sieghart", "Guerreiro", "Espada")
 

Guerreiro.rodar()