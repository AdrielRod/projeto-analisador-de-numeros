tudoOK = false
clicado = false
let valores = []
botao = document.getElementById('bot')

function adicionar()
{
    var numeroAdd = document.getElementById('inumero')
    var caixa = document.getElementById('ivalores')
    var n = Number(numeroAdd.value)
    if(clicado)
    {
        caixa.innerText = null
        res.innerHTML = null
        if(valores.length > 0)
        {
            valores = []
        }
        clicado = false
        
    }

    if(Number(document.getElementById('inumero').value.length) == 0)
    {
        alert("Adicione um número!!")
    } else if (n > 100){
        alert("Seu número é maior que os limites")
    } else if (n < 0){
        alert("Seu número é menor que os limites")
    }
    else
    {

        valores.push(n)

        var item = document.createElement('option')

        item.text = `O valor ${n} foi adicionado`    
        caixa.appendChild(item)

        tudoOK = true
    }
}
function verificar()
{       
    if(clicado)
    {
        res.innerHTML = ""
    }
    clicado = true
    res = document.getElementById('res')
    if(tudoOK)
    {           
        res.innerText += `Você inseriu ${valores.length} valores`

        var maiorelemento = 0
        var menorelemento = 101
        var soma = 0

        for (let contador = 0; contador < valores.length; contador++) {

            if(maiorelemento < valores[contador])
            {
                maiorelemento = valores[contador]
            }
            if(menorelemento > valores[contador])
            {
                menorelemento = valores[contador]
            }

            soma += valores[contador]
        }
        var media = soma / 2

        res.innerHTML += `<br> Maior Valor: ${maiorelemento}`
        res.innerHTML += `<br> Menor Valor: ${menorelemento}`
        res.innerHTML += `<br> Soma dos Valores: ${soma}`
        res.innerHTML += `<br> Media da Soma: ${media}`

        for (let contador = 0; contador < valores.length; contador++)
        {
            valores[contador].shift()
        }

    }
    else{
        alert("Você não adicionou nenhum número")
    }
}