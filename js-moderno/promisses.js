function teste(){
    return new Promise(function(resolve, reject){

        setTimeout(function(){
            const erro = false;
            if(erro){
                reject('erro...');
            }else{
                resolve("A primise foi resolvida com sucesso!");
            }
        },2000)
    
    })
}


async function teste2(){
    await teste().then(function(res){
        alert(res);
    });
    alert('OI');
}

teste2();