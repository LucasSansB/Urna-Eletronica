function urnaEletronica(){

    let candidato1 = 0, candidato2 = 0, candidato3 = 0, nomecandidato1, nomecandidato2, nomecandidato3, porcentagemcandidato1 = 0, porcentagemcandidato2 = 0, porcentagemcandidato3 = 0
    let branco = 0, nulo = 0, voto = 0, votonulo = 0, porcentagembranco = 0, porcentagemnulo = 0
    let seletor, senha, acesso = 0, pararVotacao = false
    
    while(acesso == 0){
        senha = parseInt(prompt('Digite a senha'));
        if(senha == '123456'){
            console.log('Acesso liberado');
            acesso = 1;
        }else if(acesso !== senha){
            console.log('Valor inválido');
            acesso = 0;
            return;
        }
    
    }   

    do{
        console.clear();
        nomecandidato1 = prompt("Digite o nome do 1° candidato: ");
        nomecandidato2 = prompt("Digite o nome do 2° candidato: ");
        nomecandidato3 = prompt("Digite o nome do 3° candidato: ");

        console.log('Nome dos Candidatos');
        console.log('Nome do Candidato 1: ' + nomecandidato1);
        console.log('Nome do Candidato 2: ' + nomecandidato2);
        console.log('Nome do Candidato 3: ' + nomecandidato3);

    }while(!confirm('Se os nomes estiverem corretos, apertem em OK. Caso não e precise editar, aperte em Cancelar'));

    while(!pararVotacao){

        seletor = parseInt(prompt(' | 1 | 1° Candidato \n | 2 | 2° Candidato \n | 3 | 3° Candidato \n | 5 | Voto em Branco \n | 0 | Sair da votação \n Qualquer valor diferente será um voto nulo \n\n Digite seu voto:')); 
        
        if(seletor == 1){
            candidato1 += 1;
            voto++;
            console.log('voto para o candidato '+ nomecandidato1);
        }else if(seletor == 2){
            candidato2 += 1;
            voto++;
            console.log('voto para o candidato '+ nomecandidato2);
        }else if(seletor == 3){
            candidato3 += 1;
            voto++;
            console.log('voto para o candidato '+ nomecandidato3);
        }else if(seletor == 5){
            branco += 1;
            voto++;
            console.log('voto em Branco');
        }else if(seletor == 0){
            pararVotacao = confirm('Deseja sair da votação ? Aperte OK para sim e Cancelar caso não');
            console.log('Saindo da votação');
        }else{
            
            if(confirm('ATENÇÃO: Seu voto irá ser Anulado, deseja proceguir ? O seu voto está monitorado pela CarSystem')){
            nulo += 1;
            voto++;
            console.log('voto Nulo');
            }else{
                voto -= 1;
            }
        }
    }
    console.clear();
    if(candidato1 > candidato2 && candidato1 > candidato3){
        console.log('Candidato '+ nomecandidato1 +' ganhou, com ' + (candidato1 + branco) + ' votos');
    }else if(candidato2 > candidato1 && candidato2 > candidato3){
        console.log('Candidato '+ nomecandidato2 +' ganhou, com ' + (candidato2 + branco) + ' votos');
    }else if(candidato3 > candidato1 && candidato3 > candidato2){
        console.log('Candidato '+ nomecandidato3 +' ganhou, com ' + (candidato3 + branco) + ' votos');
    }else{
        console.log('Empatou');
    }
    
    porcentagemcandidato1 = candidato1 * 100 / voto;
    porcentagemcandidato2 = candidato2 * 100 / voto;
    porcentagemcandidato3 = candidato3 * 100 / voto;
    porcentagembranco = branco * 100 / voto;
    porcentagemnulo = nulo * 100 / voto;

    console.log('Total de votos do Candidato ' + nomecandidato1 + ': ' + candidato1);
    console.log('Porcentagem de votos do Candidato '+ nomecandidato1 + ': ' + porcentagemcandidato1.toFixed(2) + '%');
    console.log('Total de votos do Candidato ' + nomecandidato2 + ': ' + candidato2);
    console.log('Porcentagem de votos do Candidato '+ nomecandidato2 + ': ' + porcentagemcandidato2.toFixed(2) + '%');
    console.log('Total de votos do Candidato ' + nomecandidato3 + ': ' + candidato3);
    console.log('Porcentagem de votos do Candidato '+ nomecandidato3 + ': ' + porcentagemcandidato3.toFixed(2) + '%');
    console.log('Total de votos em Branco: ' + branco);
    console.log('Porcentagem de votos em Branco: ' + porcentagembranco.toFixed(2) + '%');
    console.log('Total de votos Nulo: ' + nulo);
    console.log('Porcentagem de votos Nulo: ' + porcentagemnulo.toFixed(2) + '%');
    console.log('Total de votos: ' + voto);
}