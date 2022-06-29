let substantivos = [

    "Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim",
    "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor",
    "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre",
    "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca",
    "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero",
    "Vela de cera", "Quimono", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte",
    "Canga"

]





let adjetivos = [

    "prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente", "disciplinado",
    "louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo",
    "romântico", "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio",
    "zeloso", "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor",
    "perfeccionista", "Qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado",
    "exigente", "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado",
    "windsurfista", "falso", "melhor", "terno"

]





// lista com 100 strings do tipo lorem ipsum para descrição dos produtos

let loremIpsum = [

    "solore", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", 
    "dictumst", "quisque", "sagittis", "purus", "sit", "amet", "volutpat", "consequat", "mauris", 
    "nunc", "congue", "nisi", "vitae", "suscipit", "tellus", "mauris", "a", "diam", "maecenas", "sed", "enim", 
    "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", 
    "turpis", "egestas", "pretium", "aenean", "pharetra", "magna", "ac", "placerat", "vestibulum", "lectus", 
    "mauris", "ultrices", "eros", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", 
    "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", 
    "porta", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", 
    "nisl", "nunc", "mi", "ipsum", "faucibus", "vitae", "aliquet", "nec", "ullamcorper", "sit", "amet", "risus"

]










// lista com números para a geração de imagens do produtos

let numeros = numberArray(10, 510)



// lista com números para a geração das descrições dos produtos

let numerosDesc = numberArray(10, 20)










if (document.readyState == 'loading') {

    document.addEventListener('DOMContentLoaded', productGen)

} else {

    productGen()

}





// gera os cards de produtos

function productGen() {

    cardGen()

    nameGen()

    imageGen()

    descriptionGen()

    priceGen()

}





// gera a estrutura HTML dos cards

function cardGen() {

    var shopCards = document.getElementsByClassName('shop__cards')[0];




    for (var i = 0; i < 12; i++) {

        
        
        var shopCard = document.createElement('div')



        var shopCardContent = `
            <div class="shop__card not__show"  id="i-${i+1}">

                <div class="shop__card--fav">
                    <img class="shop__card--favOFF" src="https://s2.svgbox.net/hero-outline.svg?ic=heart&color=6E0000">
                    <img class="shop__card--favON" src="https://s2.svgbox.net/hero-solid.svg?ic=heart&color=6E0000">
                </div>

                <div class="shop__card--link"></div>

                <div class="shop__card--img">
                    
                </div>

                <div class="shop__card--name">
                    
                </div>

                <div class="shop__card--quantity">
                    <input type="number" class="card--quantity" value="1">
                </div>

                <div class="shop__card--price">
                    
                </div>

                <div class="shop__card--add">
                    <button>Adicionar ao carrinho</button>
                </div>

                <div class="shop__card--description">

                </div>

            </div>
        `

        shopCard.innerHTML = shopCardContent

        shopCards.append(shopCard)

    }

}





// gera os nomes dos produtos

function nameGen() {

    var shopCards = document.getElementsByClassName('shop__cards')[0];

    var shopCard = shopCards.getElementsByClassName('shop__card');





    for (var i = 0; i < shopCard.length; i++) {
     

        var shopCardName = shopCard[i].getElementsByClassName('shop__card--name')[0];


        
        
        var randomSub = substantivos[Math.floor(Math.random() * substantivos.length)];

        var randomAdj = adjetivos[Math.floor(Math.random() * adjetivos.length)];




        var indexSub = substantivos.indexOf(randomSub)

        var indexAdj = adjetivos.indexOf(randomAdj)

        substantivos.splice(indexSub, 1)

        adjetivos.splice(indexAdj, 1)



        var shopCardSpan = document.createElement('span')

        shopCardSpan.classList.add('span--name')



        var cardNameContent = `
            ${randomSub} ${randomAdj}
        `

        shopCardSpan.innerHTML = cardNameContent

        shopCardName.append(shopCardSpan)
    
    }

}





// gera as imagens dos produtos

function imageGen() {

    var shopCards = document.getElementsByClassName('shop__cards')[0];

    var shopCard = shopCards.getElementsByClassName('shop__card');





    for (var i = 0; i < shopCard.length; i++) {


        var shopCardImage = shopCard[i].getElementsByClassName('shop__card--img')[0];



        var randomImage = numeros[Math.floor(Math.random() * numeros.length)];

        var indexImage = numeros.indexOf(randomImage)

        numeros.splice(indexImage, 1)



        var shopCardImageDiv = document.createElement('div')

        var cardImageContent = `
            <img class="card--img" src="https://picsum.photos/seed/${randomImage}/250" alt="">
        `

        shopCardImageDiv.innerHTML = cardImageContent

        shopCardImage.append(shopCardImageDiv)

    
    }

}





// gera as descrições dos produtos

function descriptionGen() {

    var shopCards = document.getElementsByClassName('shop__cards')[0];

    var shopCard = shopCards.getElementsByClassName('shop__card');





    for (var i = 0; i < shopCard.length; i++) {

        
        var shopCardDesc = shopCard[i].getElementsByClassName('shop__card--description')[0];


        var randomDesc = numerosDesc[Math.floor(Math.random() * numerosDesc.length)];




        let shuffleLorem = shuffleArray(loremIpsum)
    
        let shuffleLoremDesc = shuffleLorem.slice(0, randomDesc)

        let loremDesc = shuffleLoremDesc.join(' ')
    


        
        var shopCardDescDiv = document.createElement('div')

        var cardDescContent = `
            <span>Lorem ipsum ${loremDesc}.</span>
        `

        shopCardDescDiv.innerHTML = cardDescContent

        shopCardDesc.append(shopCardDescDiv)

    
    }

}





// gera os preços dos rodutos

function priceGen() {

    var shopCards = document.getElementsByClassName('shop__cards')[0];

    var shopCard = shopCards.getElementsByClassName('shop__card');



    for (var i = 0; i < shopCard.length; i++) {


        var shopCardPrice = shopCard[i].getElementsByClassName('shop__card--price')[0];



        var shopCardName = shopCard[i].getElementsByClassName('shop__card--name')[0];

        var shopCardNameSpan = shopCardName.getElementsByTagName('span')[0];

        var nameText = shopCardNameSpan.innerText;

        var nameCount = nameText.split(' ').length;



        var shopCardDesc = shopCard[i].getElementsByClassName('shop__card--description')[0];

        var shopCardDescSpan = shopCardDesc.getElementsByTagName('span')[0];

        var descText = shopCardDescSpan.innerText

        var descNoSpace = descText.replace(/\s/g, '')

        var descCount = descNoSpace.length
        




        if (nameCount > 2) {
            
            var price = 10 + nameCount * (500 - descCount)

        }
        

        else {

            var price = 10 + nameCount * (500 - descCount) / (3 - nameCount)

        }


        

        var shopCardPriceDiv = document.createElement('div')

        var cardPriceContent = `
            <span>R$ ${price.toFixed(2)}
        `

        shopCardPriceDiv.innerHTML = cardPriceContent

        shopCardPrice.append(shopCardPriceDiv)


    }



}





// gera um vetor com números ordenados

function numberArray(start, end) {

    let array = [];

    for (let i = start; i <= end; i++) {

        array.push(i)

    }

    return array

}





// embaralha os elementos de um vetor

function shuffleArray(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
    return array;

}