function dataFim(){
    let data = new Date()
    return data;
}

function urnaEletronica(){


    let candidato1 = 0, candidato2 = 0, candidato3 = 0, nomeCandidato1, nomeCandidato2, nomeCandidato3, porcentagemcandidato1 = 0, porcentagemcandidato2 = 0, porcentagemcandidato3 = 0
    let branco = 0, nulo = 0, voto = 0, porcentagembranco = 0, porcentagemnulo = 0
    let seletor, senha, acesso = 0, pararVotacao = false

    console.log('Data e hora do inicio da votação ' + dataFim().toLocaleString());
    
    acesso = parseInt(prompt('Cria a senha de acesso: '));
    console.log('Senha de acesso: ' + acesso);   

    do{
        nomeCandidato1 = prompt("Digite o nome do 1° candidato: ");
        nomeCandidato2 = prompt("Digite o nome do 2° candidato: ");
        nomeCandidato3 = prompt("Digite o nome do 3° candidato: ");

        console.log('Nome dos Candidatos');
        console.log('Nome do Candidato 1: ' + nomeCandidato1);
        console.log('Nome do Candidato 2: ' + nomeCandidato2);
        console.log('Nome do Candidato 3: ' + nomeCandidato3);

    }while(!confirm('1° Candidato: ' + nomeCandidato1 + '\n2° Candidato: ' + nomeCandidato2 + '\n3° Candidato: ' + nomeCandidato3 + '\nSe os nomes estiverem corretos, apertem em OK. \nCaso não e precise editar, aperte em Cancelar'));

    while(acesso !== senha){
        senha = parseInt(prompt('Digite a senha de acesso: '));
        if(acesso == senha){
            console.log('Acesso liberado');
        }else{
            console.log('Valor inválido');
        }   
    }

    while(!pararVotacao){

        seletor = parseInt(prompt(' | 1 | 1° Candidato \n | 2 | 2° Candidato \n | 3 | 3° Candidato \n | 5 | Voto em Branco \n | 0 | Sair da votação \n Qualquer valor diferente será um voto nulo \n\n Digite seu voto:')); 
        
        if(seletor == 1){
            if(confirm('ATENÇÃO: Seu voto está destinado à ' + nomeCandidato1 + ', Aperte OK caso tenha certeza. Caso não, aperte em Cancelar')){
                candidato1 += 1;
                voto++;
                console.log('voto para o candidato '+ nomeCandidato1);
            }else{
                console.log('Voto corrigido do candidato ' + nomeCandidato1);
            }

        }else if(seletor == 2){
            if(confirm('ATENÇÃO: Seu voto está destinado à ' + nomeCandidato2 + ', Aperte OK caso tenha certeza. Caso não, aperte em Cancelar')){
                candidato2 += 1;
                voto++;
                console.log('voto para o candidato '+ nomeCandidato2);
            }else{
                console.log('Voto corrigido do candidato ' + nomeCandidato2);
            }

        }else if(seletor == 3){
            if(confirm('ATENÇÃO: Seu voto está destinado à ' + nomeCandidato3 + ', Aperte OK caso tenha certeza. Caso não, aperte em Cancelar')){
                candidato3 += 1;
                voto++;
                console.log('voto para o candidato '+ nomeCandidato3);
            }else{
                console.log('Voto corrigido do candidato ' + nomeCandidato3);
            }

        }else if(seletor == 5){
            if(confirm('ATENÇÃO: Você está votando em Branco, Aperte OK caso tenha certeza. Caso não, aperte em Cancelar')){
                branco += 1;
                voto++;
            console.log('voto em Branco');
            }else{
                console.log('Voto corrigido');
            }
            
        }else if(seletor == acesso){
            pararVotacao = confirm('Deseja sair da votação ? Aperte OK para sim e Cancelar caso não');
            if(pararVotacao){
                console.log('Saindo da votação');
            }else{
                console.log('Voltando');
            }

        }else{
            if(confirm('ATENÇÃO: Seu voto irá ser Anulado, deseja proceguir ? O seu voto está monitorado pela CarSystem')){
                nulo += 1;
                voto++;
                console.log('Voto Nulo');
            }else{
                console.log('Seu voto Nulo foi ANULADO...');
            }
        }
    }
    console.clear();
    if(candidato1 > candidato2 && candidato1 > candidato3){
        console.log('Candidato '+ nomeCandidato1 +' ganhou, com ' + (candidato1 + branco) + ' votos');
    }else if(candidato2 > candidato1 && candidato2 > candidato3){
        console.log('Candidato '+ nomeCandidato2 +' ganhou, com ' + (candidato2 + branco) + ' votos');
    }else if(candidato3 > candidato1 && candidato3 > candidato2){
        console.log('Candidato '+ nomeCandidato3 +' ganhou, com ' + (candidato3 + branco) + ' votos');
    }else{
        console.log('Empatou');
    }
    
    porcentagemcandidato1 = candidato1 * 100 / voto;
    porcentagemcandidato2 = candidato2 * 100 / voto;
    porcentagemcandidato3 = candidato3 * 100 / voto;
    porcentagembranco = branco * 100 / voto;
    porcentagemnulo = nulo * 100 / voto;

    console.log('Total de votos do Candidato ' + nomeCandidato1 + ': ' + candidato1);
    console.log('Porcentagem de votos do Candidato '+ nomeCandidato1 + ': ' + porcentagemcandidato1.toFixed(2) + '%');
    console.log('Total de votos do Candidato ' + nomeCandidato2 + ': ' + candidato2);
    console.log('Porcentagem de votos do Candidato '+ nomeCandidato2 + ': ' + porcentagemcandidato2.toFixed(2) + '%');
    console.log('Total de votos do Candidato ' + nomeCandidato3 + ': ' + candidato3);
    console.log('Porcentagem de votos do Candidato '+ nomeCandidato3 + ': ' + porcentagemcandidato3.toFixed(2) + '%');
    console.log('Total de votos em Branco: ' + branco);
    console.log('Porcentagem de votos em Branco: ' + porcentagembranco.toFixed(2) + '%');
    console.log('Total de votos Nulo: ' + nulo);
    console.log('Porcentagem de votos Nulo: ' + porcentagemnulo.toFixed(2) + '%');
    console.log('Total de votos: ' + voto);

    console.log('Votação encerrada ' + dataFim().toLocaleString());
}

function verificaIntegridadeUrna() {

    // Gerar o hash em: https://www.convertstring.com/pt_PT/Hash/SHA256

    fetch('urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(hashCodigoUrna => {

            fetch('urnaEletronica.hash')
                .then(conteudo => conteudo.text())
                .then(conteudo => conteudo.toLowerCase())
                .then(hashEsperado => {
                    
                    if (hashEsperado === hashCodigoUrna) {
                        console.log('** Hash verificado, urna íntegra **');
                    } else {
                        console.log('** INTEGRIDADE DO CÓDIGO COMPROMETIDA — ANULAR URNA **');
                        console.log('Hash esperado: ' + hashEsperado);
                        console.log('Hash da urna: ' + hashCodigoUrna);
                    }
                });
        });
}