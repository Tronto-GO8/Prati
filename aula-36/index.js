const minhaPromesse = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let sucesso = false
        if(sucesso){
            resolve("dados carregado com sucesso")
        }else{
            reject(new Error("Falha ao carregar os dados"))
        }

    }, 3000)
})

minhaPromesse.then(resultado =>{
    console.log(resultado)
}).catch(error =>{
    console.error(error)
}).finally(() =>{
    console.log("operação concluida")
})