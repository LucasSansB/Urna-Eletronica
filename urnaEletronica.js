function dataAtual(){
    let data = new Date();
    let dataInicial;
    let dataFinal;

    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}:${data.getMilliseconds()}`;
}

async function verificarUrna(){

    let hashUrnaAtual;
    let hashVerificado;

    // Gerar o hash em: https://www.convertstring.com/pt_PT/Hash/SHA256

    await fetch('./urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(conteudo => hashUrnaAtual = conteudo);

    await fetch('./hashVerificado')
        .then(conteudo => conteudo.text())
        .then(conteudo => hashVerificado = conteudo);

    return {
        status: hashUrnaAtual === hashVerificado,
        hashUrnaAtual: hashUrnaAtual,
        hashVerificado: hashVerificado
    };
    
}

// let candidatos = [
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {nome: "Hian", num: 11, partido: "PPF", cargo: "", qtvoto: 0},
//     {senha: 123456}

// ]

async function audioConfirmar(){
    const audio = new Audio('./confirmacao.mp3')
    await audio.play();
}

async function urnaEletronica(){

    // let candidato1 = 0, candidato2 = 0, candidato3 = 0, nomeCandidato1, nomeCandidato2, nomeCandidato3, porcentagemcandidato1 = 0, porcentagemcandidato2 = 0, porcentagemcandidato3 = 0
    // let branco = 0, nulo = 0, voto = 0, porcentagembranco = 0, porcentagemnulo = 0
    let senha, pararVotacao = false, nulo = 0, votoValido = false, ganhador = true, voto = 0, totalVotos = 0,


    fetch('./dadosCandidatos.json')
    .then( votacao =>{
        senha = 123
    }

    )

    dataInicial = dataAtual();
    console.log('Inicio da votação: ' + dataInicial);

    console.log('Iniciando o programa')
    console.clear()

    console.log('** CONFIGURAÇÃO DA URNA **')
    senha = parseInt(prompt('Configure a senha do mesário: '))
    
        data = new Date()
        do {
            votoValido = false
            console.clear()
            console.log('Opções de voto:')
            for(let a=0; a < candidatos.length;a++) {
                console.log(`(${candidatos[a].num}) ${candidatos[a].nome} ${candidatos[a].partido}`)
            }
            
            voto = parseInt(prompt('Digite sua opção de voto'))
            totalVotos++
            usuarioConfirmaVoto()
            
            for(let b=0;b < candidatos.length;b++) {
                if (voto == candidatos[b].num && confirmaVoto) {
                    candidatos[b].qtdVotos++
                    votoValido = true
                    await audioConfirma()
                    break
                }
            } 
            if (voto === senhaMesario) {
                votoValido = true
                encerrarVotacao = confirm('Deseja encerrar a votação?')
                if(encerrarVotacao) {
                    totalVotos--
                }
            }
            if(!votoValido) {
                if(confirm('Voto Nulo selecionado, confirma esta opção de voto?')){
                    nulo++
                    await audioConfirma()
                }
                else totalVotos--
            }
        } while(pararVotacao !== true)
        
        //
        if (totalVotos > 0) {
            candidatos.sort(function(a, b) {
                if(a.qtdVotos > b.qtdVotos) return -1 
                else return true
            })
            console.clear()
    
            //saida para o usuario: boletim de urna
            console.log('**BOLETIM DE URNA**')
            console.log(`Data de inicio da votação: ${data}`)
            data = new Date()
            console.log(`Data de término da votação: ${data}`)
            console.log('Total de votos: ' + totalVotos)
            for(let i=0;i < candidatos.length;i++){
                console.log(`Total de votos do candidato ${candidatos[i].nome}: ${candidatos[i].qtdVotos} votos (${(candidatos[i].qtdVotos/totalVotos*100).toFixed(1)}%)`)
            }
            console.log('Total de votos Nulos: ' + votosNulos + ' votos ('+(votosNulos / totalVotos * 100).toFixed(1)+'%)')
            
            //determina ganhador
            for (let i=1; i < candidatos.length;i++) {
                if (candidatos[0].qtdVotos == candidatos[i].qtdVotos) {
                    console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos)')
                    ganhador = false
                    break
                }
                else {
                    ganhador = true
                    break
                }
            }
            
            //exibição do ganhador
            if (ganhador) {
                console.log(`O ganhador desta urna foi: ${candidatos[0].nome} ${candidatos[0].partido} com ${(candidatos[0].qtdVotos/totalVotos*100).toFixed(1)} %`)
                return
            }
        } 
        else {
            console.clear()
            console.log('Total de votos: ' + totalVotos)
            console.log('Não houve votação nesta urna')
            return
        }
        verificarUrna()
    }
    
    function usuarioConfirmaVoto() {
        for(let c=0;c < candidatos.length; c++) {
            if (voto==candidatos[c].num) {
                confirmaVoto = confirm(`Candidato ${candidatos[c].nome} selecionado, confirma esta opção de voto?`)
                if (confirmaVoto) break
            }
        }
        return 
    }
    
await verificarUrna().then(verificacao => {
    if (verificacao.status){
        console.log('HASH verificado e aprovado')
    } else{
        console.log('HASE verificado, Urna fraudada')
        console.log(`HASH da Urna: ${verificacao.hashUrnaAtual}`);
        console.log(`HASH da Valido: ${verificacao.hashVerificado}`);
    }
})
    // candidatos.sort(function(a, b) {
    //     if(a.qtdVotos > b.qtdVotos) return -1 
    //     else return true
    // })
    
    //console.log(`O candidato ganhador é: ${candidatos[0].nome} ${candidatos[0].partido} `)
    
    // for (let i=1; i < candidatos.length;i++) {
    //     if (candidatos[0].qtdVotos == candidatos[i].qtdVotos) {
    //         console.log("Empate!!!!")
    //         break
    //     }
    // }
    
    //Verifica voto para candidatos pré-configurados
    // for(let i=0; i<candidatos.length;i++) {
    //         if(candidatos[i].num==voto) console.log(candidatos[i].qtdVotos)
    // }