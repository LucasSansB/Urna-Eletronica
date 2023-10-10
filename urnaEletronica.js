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
var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var branco = 0;
var nulo = 0;
var seletor;

function urnaEletronica(){

    candidato1 = 0;
    candidato2 = 0;
    candidato3 = 0;
    branco = 0;
    nulo = 0;
    
    seletor = parseInt(prompt('Digite'));
    
    while(seletor !== 0){

        switch(seletor){
            case(1):
                candidato1 += 1;
                console.log('votos candidato 1: ' + candidato1);
                seletor = parseInt(prompt('Digite'));
                break
                
            case(2):
                candidato2 += 1;
                console.log('votos candidato 2: ' + candidato2);
                seletor = parseInt(prompt('Digite'));
                break
                
            case(3):
                candidato3 += 1;
                console.log('votos candidato 3: ' + candidato3);
                seletor = parseInt(prompt('Digite'));
                break

            case(5):
                branco += 1;
                console.log('votos em branco: ' + branco);
                seletor = parseInt(prompt('Digite'));
                break

            case(8):
                nulo += 1;
                console.log('votos nulo: ' + candidato3);
                seletor = parseInt(prompt('Digite'));
                break
        }
    }
}

    
    // do{
        
    //     console.log('...');
        
    //     candidato1 = candidato1 + 1

    // }while(seletor !== 0);

  
        
function candidato(){
    while(seletor == 0){
        console.log('total candidato 1: ' + candidato1);
    }
    
    

}
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
