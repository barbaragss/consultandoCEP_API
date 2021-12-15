const cep = document.querySelector('#cep')

const showData = (result) => {
    for (const campo in result) {
        if(document.querySelector('#' + campo)){
         document.querySelector("#"+campo).value = result[campo]
        }
    }
}



cep.addEventListener("blur", () => {
    let procuraCep = cep.value.replace('-', '') //substitui o - por vazio 
    const opcao = {method: 'GET', mode: 'cors', cache: 'default'}

    fetch(`https://viacep.com.br/ws/${procuraCep}/json/`, opcao) //acessando a url e procurando cep
    .then((response) => {
        response.json()
        .then(data => showData(data))
    })//informacao encontrada

    .catch(e => console.log("Deu erro" + e.message)) //inf não encontrada com msg de erro

})