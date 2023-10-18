function urnaEletronica(){

    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let nomecandidato1;
    let nomecandidato2;
    let nomecandidato3;
    let porcentagemcandidato1 = 0;
    let porcentagemcandidato2 = 0;
    let porcentagemcandidato3 = 0;
    let porcentagemnulo = 0;
    let porcentagembranco = 0;
    let branco = 0;
    let nulo = 0;
    let votonulo = 0;
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
    
   nomecandidato1 = prompt("Digige o nome do 1° candidato: ");
   nomecandidato2 = prompt("Digige o nome do 2° candidato: ");
   nomecandidato3 = prompt("Digige o nome do 3° candidato: ");

    while(encerramento != 'S'){

        seletor = parseInt(prompt('Digite seu voto')); 
        
        switch(seletor){
            case(1):
                candidato1 += 1;
                voto++;
                console.log('votos para o candidato '+ nomecandidato1 +': ' + candidato1);
                break
                
            case(2):
                candidato2 += 1;
                voto++;
                console.log('votos para o candidato '+ nomecandidato2 +': ' + candidato2);
                break
                
            case(3):
                candidato3 += 1;
                voto++;
                console.log('votos para o candidato '+ nomecandidato3 +': ' + candidato3);
                break

            case(5):
                branco += 1;
                voto++;
                console.log('votos em branco: ' + branco);
                break

            case(8):
                nulo += 1;
                votonulo++;
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
        console.log('Candidato '+ nomecandidato1 +' ganhou, com ' + candidato1 + ' votos');
    }else if(candidato2 > candidato1 && candidato2 > candidato3){
        console.log('Candidato '+ nomecandidato2 +' ganhou, com ' + candidato2 + ' votos');
    }else if(candidato3 > candidato1 && candidato3 > candidato2){
        console.log('Candidato '+ nomecandidato3 +' ganhou, com ' + candidato3 + ' votos');
    }else{
        console.log('Empatou');
    }
    
    porcentagemcandidato1 = candidato1 * 100 / voto;
    porcentagemcandidato2 = candidato2 * 100 / voto;
    porcentagemcandidato3 = candidato3 * 100 / voto;
    porcentagembranco = branco * 100 / voto;
    porcentagemnulo = nulo * 100 / voto;

    console.log('Porcentagem de votos do Candidato '+ nomecandidato1 + ': ' + porcentagemcandidato1.toFixed(2) + '%');
    console.log('Porcentagem de votos do Candidato '+ nomecandidato2 + ': ' + porcentagemcandidato2.toFixed(2) + '%');
    console.log('Porcentagem de votos do Candidato '+ nomecandidato3 + ': ' + porcentagemcandidato3.toFixed(2) + '%');
    console.log('Porcentagem de votos em Branco: ' + porcentagembranco.toFixed(2) + '%');
    console.log('Porcentagem de votos Nulo: ' + porcentagemnulo.toFixed(2) + '%');
    console.log('Total de votos: ' + voto);
}