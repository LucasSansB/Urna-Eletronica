function urnaEletronica(){

    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let nomecandidato1;
    let nomecandidato2;
    let nomecandidato3;
    let nome;
    let branco = 0;
    let nulo = 0;
    let voto = 0;
    let seletor;
    let senha;
    let acesso = 0;
    let encerramento = "N";

    
    while(acesso == 0){
        senha = parseInt(prompt('Digite a senha'));
        if(senha == '123456'){
            console.log('Acesso liberado');
            acesso = 1;
        }else{
            console.log('Valor invalido');
            acesso = 0;
        }
    
    }   
    
   

    while(encerramento != 'S'){

        seletor = parseInt(prompt('Digite')); 
        
        switch(seletor){
            case(1):
                candidato1 += 1;
                voto++;
                console.log('votos candidato 1: ' + candidato1);
                break
                
            case(2):
                candidato2 += 1;
                voto++;
                console.log('votos candidato 2: ' + candidato2);
                break
                
            case(3):
                candidato3 += 1;
                voto++;
                console.log('votos candidato 3: ' + candidato3);
                break

            case(5):
                branco += 1;
                voto++;
                console.log('votos em branco: ' + branco);
                break

            case(8):
                nulo += 1;
                voto++;
                console.log('votos nulo: ' + nulo);
                break

            case(0):
                encerramento = prompt('Se quiser encerrar a votação, digite S. Caso não, digite N');
                
                switch(encerramento){
                    case('S'):
                    encerramento = "S"
                    break

                    case('N'):
                    encerramento = "N"
                    break

                }
                break
        }
          
    }

    if(candidato1 > candidato2 && candidato1 > candidato3){
        console.log("Candidato 1 ganhou, por " + candidato1 + " votos");
    }else if(candidato2 > candidato1 && candidato2 > candidato3){
        console.log("Candidato 2 ganhou, por " + candidato2 + " votos");
    }else if(candidato3 > candidato1 && candidato3 > candidato2){
        console.log("Candidato 3 ganhou, por " + candidato3 + " votos");
    }else{
        console.log("empatou, por " + voto + " votos");
    }
    
    console.log('Total de votos do Candidato 1: ' + candidato1 * 100 / voto + '%');
    console.log('Total de votos do Candidato 2: ' + candidato2 * 100 / voto + '%');
    console.log('Total de votos do Candidato 3: ' + candidato3 * 100 / voto + '%');
    console.log('Total de votos em Branco: ' + branco * 100 / voto + '%');
    console.log('Total de votos Nulo: ' + nulo * 100 / voto + '%');
    console.log('Total de votos: ' + voto);


}

// const opcao = 1;
// switch (opcao){
//     case 1:
//         console.log('Opção é 1');
//         break
//     case 2:
//         console.log('Opção é 2');
//         break
//     default:
//         console.log('Nenhuma das opções');
//         break
// }

// if (opcao === 1) {
//     console.log('Opção é 1');
// } else if (opcao === 2) {
//     console.log('Opção é 2');
// } else {
//     console.log('Nenhuma das opções');
// }


// function ue(){
//     let opcao;
//     let contador = 0;

//     do{
//         opcao = parseInt(prompt('Digite a opção:'));
        
//         console.log('Linha de Inscrição');
        
//         contador = contador + 1;

//     }while (opcao !== 0);

//     contador = contador - 1;
    
//     console.log('Contagem:', contador);
// }
// ue();
