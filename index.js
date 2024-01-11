console.log("Qual seu nível no ranque?")

pontosV = 200

pontosD = 90

pontos = pontosV - pontosD

ranked(pontos)

function ranked (pontos){

    while(pontos <= 10){

    console.log("O Herói tem de saldo " + pontos + " pontos e está no nível Ferro!")
    pontos++
    break
    
    }
    
        while(pontos >= 11 && pontos <=20 ){

        console.log("O Herói tem de saldo " + pontos + " pontos e está no nível Bronze!")
        pontos++
        break
        
        }

            while(pontos >= 21 && pontos <= 50){

            console.log("O Herói tem de saldo " + pontos + " pontos e está no nível Prata!")
            pontos++
            break
            
            }

                while(pontos >= 51 && pontos <= 80){

                console.log("O Herói tem de saldo " + pontos + " pontos e está no nível Ouro!")
                pontos++
                break
                
                }

                    while(pontos >=81 && pontos <= 90 ){

                    console.log("O Herói tem de saldo " + pontos + " pontos e está no nível Diamante!")
                    pontos++
                    break
                    
                    }

                     while(pontos >= 91 && pontos <= 100){

                        console.log("O Herói tem de saldo " + pontos + " pontos e está no nível Lendário!")
                        pontos++
                        break
                        
                        }

                            while(pontos >= 101){

                            console.log("O Herói tem de saldo " + pontos + " pontos e está no nível Imortal!")
                            pontos++
                            break
                            
                            }
}
