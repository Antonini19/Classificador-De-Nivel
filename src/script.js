let continuar =true; // valor booleano

while (continuar ) { //enqunto meu continuar for TRUE ele executa todo o codigo
    let NomeDoHeroi = prompt("digite o nome do seu heroi(ou 'sair' para encerrar") //digitar o nome do heroi ou 'sair' para encerrar o loop

    if (NomeDoHeroi === 'sair'){ //se
        continuar = false //se na caixa de entrada for 'sair' o "continuar" vira false e encerra o loop
        break;//vai encerrarb o loop imediatamente

        }else{ //senão executa isso a baixo
                //variaveis
            let Monstro = prompt("Digite quantos monstros matou:")
            let xpColetado = Monstro * 150
            let nivel = ""
            
                switch (true) {
                            case (xpColetado <1000):
                                nivel = "ferro"
                                break;

                            case (xpColetado >=1001) &&(xpColetado <2000):
                                nivel = "bronze"
                                break;

                            case (xpColetado >=2001) &&(xpColetado<5000):
                                nivel = "Prata"
                                break;

                            case (xpColetado > 5001) && (xpColetado < 7000):
                                nivel = "Ouro"
                                break;

                            case (xpColetado >= 7001) && (xpColetado < 8000):
                                nivel = "Platina"
                                break;

                            case (xpColetado >= 8001) && (xpColetado <9000):
                                nivel = "Ascedente"
                                break;

                            case (xpColetado >= 9001) && (xpColetado < 10000):
                                nivel = "Imortal"
                                break;

                            default:
                            nivel = "Radiante"
                            }

                console.log("Nome do Herói: "+NomeDoHeroi+"."+
                             "\nNivel: "+nivel+"."+
                        "\nQuantidade de mosntros: "+Monstro+"." +
                        "\nQuantidade de xp:"+ xpColetado+"."
                            )
            }
}