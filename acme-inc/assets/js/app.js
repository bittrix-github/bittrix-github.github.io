

var cartIcon = document.querySelector("#cart-icon");

var fullCart = document.querySelector(".fullcart");

var cartX = document.querySelector("#cart-x");

var cart = document.querySelector(".cart");





cartIcon.addEventListener('click', () => {

    cart.classList.toggle('active');

    fav.classList.remove('active');

})

fullCart.addEventListener('click', () => {

    cart.classList.toggle('active');

})

cartX.addEventListener('click', () => {

    cart.classList.toggle('active');

})










var favIcon = document.querySelector("#fav-icon");

var fullFav = document.querySelector(".fullfav");

var favX = document.querySelector("#fav-x");

var fav = document.querySelector(".fav");





favIcon.addEventListener('click', () => {

    fav.classList.toggle('active');

    cart.classList.remove('active');

})

fullFav.addEventListener('click', () => {

    fav.classList.toggle('active');

})

favX.addEventListener('click', () => {

    fav.classList.toggle('active');

})










if (document.readyState == 'loading') {

    document.addEventListener('DOMContentLoaded', ready)

} else {

    ready()

}










function ready() {


    var addToFavButtons = document.getElementsByClassName('shop__card--fav')

    for (var i = 0; i < addToFavButtons.length; i++) {

        var addToFavButton = addToFavButtons[i]

        addToFavButton.addEventListener('click', addItemToFav)

    }



    var addToFavProductButtons = document.getElementsByClassName('product__card--fav')

    for (var i = 0; i < addToFavProductButtons.length; i++) {

        var addToFavProductButton = addToFavProductButtons[i]

        addToFavProductButton.addEventListener('click', addItemToFavProduct)

    }



    var addToCartButtons = document.getElementsByClassName('shop__card--add')

    for (var i = 0; i < addToCartButtons.length; i++) {

        var addToCartButton = addToCartButtons[i]

        addToCartButton.addEventListener('click', addItemToCart)

    }



    var addToCartProductButtons = document.getElementsByClassName('product__card--add')

    for (var i = 0; i < addToCartProductButtons.length; i++) {

        var addToCartProductButton = addToCartProductButtons[i]

        addToCartProductButton.addEventListener('click', addItemToCartProduct)

    }



    var removeButtons = document.getElementsByClassName('cart__item--remove')

    for (var i = 0; i < removeButtons.length; i++) {

        var removeButton = removeButtons[i]

        removeButton.addEventListener('click', removeCartItem)

    }



    var removeFavButtons = document.getElementsByClassName('fav__item--remove')

    for (var i = 0; i < removeFavButtons.length; i++) {

        var removeFavButton = removeFavButtons[i]

        removeFavButton.addEventListener('click', removeFavItem)

    }



    var cardQuantityInputs = document.getElementsByClassName('card--quantity')

    for (var i = 0; i < cardQuantityInputs.length; i++) {

        var cardInput = cardQuantityInputs[i]

        cardInput.addEventListener('change', cardQuantityChanged)

    }



    var cartQuantityInputs = document.getElementsByClassName('item--quantity')

    for (var i = 0; i < cartQuantityInputs.length; i++) {

        var cartInput = cartQuantityInputs[i]

        cartInput.addEventListener('change', cartQuantityChanged)

    }



    var openProductButtons = document.getElementsByClassName('shop__card--link')

    for (var i = 0; i < openProductButtons.length; i++) {

        var openProductButton = openProductButtons[i]

        openProductButton.addEventListener('click', openProduct)

    }



    var searchInput = document.getElementById('search-input')

    searchInput.addEventListener('input', filterCard)



    var checkFavFilter = document.getElementsByClassName('check__fav')[0]

    checkFavFilter.addEventListener('change', filterFav)



    var purchaseButton = document.getElementsByClassName('cart__purchase')[0]

    purchaseButton.addEventListener('click', purchaseConcluded)


    
    updateCartTotal()

    updateCartCounter()

    updateFavCounter()

}




















function cardQuantityChanged(event) {

    var input = event.target

    if (isNaN(input.value) || input.value <= 0) {

        input.value = 1

    }

}





function cartQuantityChanged(event) {

    var input = event.target

    if (isNaN(input.value) || input.value <= 0) {

        input.value = 1

    }

    updateCartTotal()

}





function addItemToCart(event) {

    var addToCartButtonClicked = event.target

    var shopCard = addToCartButtonClicked.parentElement.parentElement

    var itemImage = shopCard.getElementsByClassName('card--img')[0].src

    var itemTitle = shopCard.getElementsByClassName('shop__card--name')[0].innerText

    var itemPrice = shopCard.getElementsByClassName('shop__card--price')[0].innerText

    var itemQuantity = shopCard.getElementsByClassName('card--quantity')[0].value





    var cartItem = document.createElement('div')

    cartItem.classList.add('cart__item')

    var cartItems = document.getElementsByClassName('cart__items')[0]





    var cartItemContent = `
        <div class="cart__item--product">
            <img src="${itemImage}" alt="" class="cart__item--img" width="80">
            <span class="cart__item--name">${itemTitle}</span>
        </div>

        <span class="cart__item--price">${itemPrice}</span>

        <div class="cart__item--quantity">
            <input type="number" class="item--quantity" value="${itemQuantity}">
            <div  class="cart__item--remove">
                <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=trash" width="32" height="32" color="#ffffff"></svg>
            </div>
        </div>
    `



    cartItem.innerHTML = cartItemContent

    cartItems.append(cartItem)


    checkCartRepeat()

    updateCartTotal()

    ready()

}





function addItemToCartProduct(event) {

    var addToCartProductButtonClicked = event.target

    var productCard = addToCartProductButtonClicked.parentElement.parentElement

    var itemImage = productCard.getElementsByClassName('card--img')[0].src

    var itemTitle = productCard.getElementsByClassName('product__card--name')[0].innerText

    var itemPrice = productCard.getElementsByClassName('product__card--price')[0].innerText

    var itemQuantity = productCard.getElementsByClassName('card--quantity')[0].value





    var cartItem = document.createElement('div')

    cartItem.classList.add('cart__item')

    var cartItems = document.getElementsByClassName('cart__items')[0]





    var cartItemContent = `
        <div class="cart__item--product">
            <img src="${itemImage}" alt="" class="cart__item--img" width="80">
            <span class="cart__item--name">${itemTitle}</span>
        </div>

        <span class="cart__item--price">${itemPrice}</span>

        <div class="cart__item--quantity">
            <input type="number" class="item--quantity" value="${itemQuantity}">
            <div  class="cart__item--remove">
                <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=trash" width="32" height="32" color="#ffffff"></svg>
            </div>
        </div>
    `



    cartItem.innerHTML = cartItemContent

    cartItems.append(cartItem)


    checkCartRepeat()

    updateCartTotal()

    ready()

}





function addItemToFav(event) {

    var addToFavButtonClicked = event.target

    var shopCard = addToFavButtonClicked.parentElement.parentElement

    var itemImage = shopCard.getElementsByClassName('card--img')[0].src

    var itemTitle = shopCard.getElementsByClassName('shop__card--name')[0].innerText

    var itemPrice = shopCard.getElementsByClassName('shop__card--price')[0].innerText

    var itemId = shopCard.id


    shopCard.classList.toggle('not__show')




    var favItem = document.createElement('div')

    favItem.classList.add('fav__item')

    favItem.setAttribute('id', `${itemId}`)

    var favItems = document.getElementsByClassName('fav__items')[0]





    var favItemContent = `
        <div class="fav__item--product">
            <img src="${itemImage}" alt="" class="fav__item--img" width="80">
            <span class="fav__item--name">${itemTitle}</span>
        </div>

        <span class="fav__item--price">${itemPrice}</span>

        <div  class="fav__item--remove">
            <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=trash" width="32" height="32" color="#ffffff"></svg>
        </div>
    `



    favItem.innerHTML = favItemContent

    favItems.append(favItem)






    var shopCards = addToFavButtonClicked.parentElement

    var favON = shopCards.getElementsByClassName('shop__card--favON')[0]

    

    favON.classList.toggle('active')



    filterFav()

    checkFavRepeat()

    ready()

}





function addItemToFavProduct(event) {

    var addToFavProductButtonClicked = event.target

    var productCard = addToFavProductButtonClicked.parentElement.parentElement

    var itemImage = productCard.getElementsByClassName('card--img')[0].src

    var itemTitle = productCard.getElementsByClassName('product__card--name')[0].innerText

    var itemPrice = productCard.getElementsByClassName('product__card--price')[0].innerText

    var itemId = productCard.id




    var favItem = document.createElement('div')

    favItem.classList.add('fav__item')

    favItem.setAttribute('id', `i${itemId}`)

    var favItems = document.getElementsByClassName('fav__items')[0]





    var favItemContent = `
        <div class="fav__item--product">
            <img src="${itemImage}" alt="" class="fav__item--img" width="80">
            <span class="fav__item--name">${itemTitle}</span>
        </div>

        <span class="fav__item--price">${itemPrice}</span>

        <div  class="fav__item--remove">
            <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=trash" width="32" height="32" color="#ffffff"></svg>
        </div>
    `



    favItem.innerHTML = favItemContent

    favItems.append(favItem)






    var productCards = addToFavProductButtonClicked.parentElement


    var shopCardId = itemId.substring(1)


    var shopCards = document.getElementsByClassName('shop__cards')[0]

    var shopCard = shopCards.getElementsByClassName('shop__card')[shopCardId-1]


    shopCard.classList.toggle('not__show')





    var favONp = productCards.getElementsByClassName('product__card--favON')[0]

    var favONs = shopCard.getElementsByClassName('shop__card--favON')[0]

    

    favONp.classList.toggle('active')

    favONs.classList.toggle('active')


    filterFav()

    checkFavRepeat()

    updateFavCounter()

    ready()

}





function removeCartItem(event) {

    var removeButtonClicked = event.target

    removeButtonClicked.parentElement.parentElement.remove()

    updateCartTotal()

    ready()

}





function removeFavItem(event) {

    var removeFavButtonClicked = event.target

    var favItem = removeFavButtonClicked.parentElement

    var favItemId = favItem.id



    removeFavButtonClicked.parentElement.remove()

    updateFavCounter()

    ready()





    var shopCard = document.getElementById(`${favItemId}`)

    var shopCardFav = shopCard.getElementsByClassName('shop__card--fav')[0]

    var favON = shopCardFav.getElementsByClassName('shop__card--favON')[0]

    favON.classList.toggle('active')


    shopCard.classList.add('not__show')



    


    var productCards = document.getElementsByClassName('product__cards')[0]

    var productCard = productCards.getElementsByClassName('product__card')[0]

    productCardsLength = productCards.childNodes.length

    
    if(productCardsLength > 1) {

        var productCardId = productCard.id

        favItemIdRemove = favItemId.substring(1)    

    


        if (productCardId == favItemIdRemove) {


            productId = favItemId.substring(1)


            var productCard = document.getElementById(`${productId}`)

            var productCardFav = productCard.getElementsByClassName('product__card--fav')[0]

            var favON = productCardFav.getElementsByClassName('product__card--favON')[0]

            favON.classList.toggle('active')


        }

    }


    updateFavCounter()


    // if (filtroFavoritos) {

    //     favFilter()

    // }
    

    ready()    


}





function checkCartRepeat() {

    var cartItemContainer = document.getElementsByClassName('cart__items')[0]

    var cartItems = cartItemContainer.getElementsByClassName('cart__item')

    var cartImageSrcList = []

    for (var i = 0; i < cartItems.length; i++) {

        var cartItem = cartItems[i]

        var cartImage = cartItem.getElementsByClassName('cart__item--img')[0]

        var cartImageSrc = cartImage.src

        cartImageSeed = cartImageSrc.substring(-3, (cartImageSrc.length - 3))

        cartImageSrcList.push(cartImageSeed)

    }

    for (let i = 0; i < cartImageSrcList.length; i++) {

        if (cartImageSrcList.indexOf(cartImageSrcList[i]) !== cartImageSrcList.lastIndexOf(cartImageSrcList[i])) {
          
            j = cartImageSrcList.lastIndexOf(cartImageSrcList[i])

            cartItems[j].remove()

            alert('Este produto já está no seu carrinho. Você pode atualizar a quantidade diretamente no carrinho.')

            break

        }
    
    }



    ready()

}





function checkFavRepeat() {

    var favItemContainer = document.getElementsByClassName('fav__items')[0]

    var favItems = favItemContainer.getElementsByClassName('fav__item')

    var favImageSrcList = []

    var shopCardIndex = 0
    



    for (var i = 0; i < favItems.length; i++) {

        var favItem = favItems[i]

        var favImage = favItem.getElementsByClassName('fav__item--img')[0]

        var favImageSrc = favImage.src

        favImageSeed = favImageSrc.substring(-3, (favImageSrc.length - 3))

        favImageSrcList.push(favImageSeed)

    }




    for (let i = 0; i < favImageSrcList.length; i++) {

    
        if (favImageSrcList.indexOf(favImageSrcList[i]) !== favImageSrcList.lastIndexOf(favImageSrcList[i])) {
        
                    
            j = favImageSrcList.lastIndexOf(favImageSrcList[i])

            k = favImageSrcList.indexOf(favImageSrcList[i])

            
            var favItemId = favItems[k].id

            shopCardIndex = favItemId.substring(2)


            favItems[j].remove()

            favItems[k].remove()
        
        
            updateFavCounter()

            break


        }
    
    }





    if(shopCardIndex > 0) {

        var shopCards = document.getElementsByClassName('shop__cards')[0]

        var shopCard = shopCards.getElementsByClassName('shop__card')[shopCardIndex-1]

        shopCard.classList.add('not__show')


    }



}

      



function updateCartCounter() {

    var cartItemContainer = document.getElementsByClassName('cart__items')[0]

    var cartItems = cartItemContainer.getElementsByClassName('cart__item')

    var cartCounter = cartItems.length

    if (cartCounter == 0) {

        document.getElementsByClassName('fullcart')[0].classList.remove('active')

        document.getElementsByClassName('cart__row')[0].style.display = 'none'

        document.getElementsByClassName('cart__total')[0].style.display = 'none'

        document.getElementsByClassName('cart__purchase')[0].style.display = 'none'

        document.getElementsByClassName('cart__empty')[0].classList.add('active')


    }

    else if (cartCounter > 0) {

        document.getElementsByClassName('fullcart')[0].classList.add('active')
        
        document.getElementsByClassName('total-itens')[0].innerText = cartCounter

        document.getElementsByClassName('cart__row')[0].style.display = 'flex'

        document.getElementsByClassName('cart__total')[0].style.display = 'flex'

        document.getElementsByClassName('cart__purchase')[0].style.display = 'flex'

        document.getElementsByClassName('cart__empty')[0].classList.remove('active')

    }

}





function updateFavCounter() {

    var favItemContainer = document.getElementsByClassName('fav__items')[0]

    var favItems = favItemContainer.getElementsByClassName('fav__item')

    var favCounter = favItems.length

    if (favCounter == 0) {

        document.getElementsByClassName('fullfav')[0].classList.remove('active')

        document.getElementsByClassName('fav__row')[0].style.display = 'none'

        document.getElementsByClassName('fav__empty')[0].classList.add('active')


    }

    else if (favCounter > 0) {

        document.getElementsByClassName('fullfav')[0].classList.add('active')
        
        document.getElementsByClassName('total-favs')[0].innerText = favCounter

        document.getElementsByClassName('fav__row')[0].style.display = 'flex'

        document.getElementsByClassName('fav__empty')[0].classList.remove('active')

    }

}





function updateCartTotal() {

    var cartItemContainer = document.getElementsByClassName('cart__items')[0]

    var cartItems = cartItemContainer.getElementsByClassName('cart__item')

    var total = 0

    for (var i = 0; i < cartItems.length; i++) {

        var cartItem = cartItems[i]

        var priceElement = cartItem.getElementsByClassName('cart__item--price')[0]

        var quantityElement = cartItem.getElementsByClassName('item--quantity')[0]

        var price = parseFloat(priceElement.innerText.replace('R$ ', ''))

        var quantity = quantityElement.value

        total = total + (price * quantity)

    }

    document.getElementsByClassName('cart__total--price')[0].innerText = 'R$ ' + total.toFixed(2)

}





function openProduct(event) {

    var openProductButtonClicked = event.target

    var shopCard = openProductButtonClicked.parentElement

    

    var itemFav = shopCard.getElementsByClassName('shop__card--fav')[0]

    var itemFavOn = itemFav.getElementsByClassName('shop__card--favON')[0]

    var itemFavOnClass = itemFavOn.className

    favOnClass = itemFavOnClass.substring(4)




    var itemImageSrc = shopCard.getElementsByClassName('card--img')[0].src

    var itemTitle = shopCard.getElementsByClassName('shop__card--name')[0].innerText

    var itemDesc = shopCard.getElementsByClassName('shop__card--description')[0].innerText

    var itemPrice = shopCard.getElementsByClassName('shop__card--price')[0].innerText

    var itemQuantity = shopCard.getElementsByClassName('card--quantity')[0].value

    
    

    var itemId = shopCard.id

    productId = itemId.substring(1)

    var itemImage = itemImageSrc.substring(-3, (itemImageSrc.length - 3))



    
    var productCard = document.createElement('div')

    productCard.classList.add('product__card')

    productCard.setAttribute('id', `${productId}`)

    var productCards = document.getElementsByClassName('product__cards')[0]



    var productCardContent = `

        <div class="product__card--return">
            <img src="https://s2.svgbox.net/hero-outline.svg?ic=arrow-narrow-left&color=000000" width="26" height="26">
            <span>Retornar à lista de produtos</span>
        </div>

        <div class="product__card--fav">
            <img class="product__card--favOFF" src="https://s2.svgbox.net/hero-outline.svg?ic=heart&color=6E0000">
            <img class="product${favOnClass}" src="https://s2.svgbox.net/hero-solid.svg?ic=heart&color=6E0000">
        </div>

        <div class="product__card--img">
            <img class="card--img" src="${itemImage}600" alt="">
        </div>

        <div class="product__card--name">
            <span>${itemTitle}</span>
        </div>

        <div class="product__card--description">
            <span>${itemDesc}</span>
        </div>

        <div class="product__card--quantity">
            <input type="number" class="card--quantity" value="${itemQuantity}">
        </div>

        <div class="product__card--price">
            <span>${itemPrice}</span>
        </div>

        <div class="product__card--add">
            <button>Adicionar ao carrinho</button>
        </div>    
    
    `

    productCard.innerHTML = productCardContent

    productCards.append(productCard)

    




    var heroWrapper = document.getElementsByClassName('hero')[0];

    var shopWrapper = document.getElementsByClassName('shop__wrapper')[0];

    var footerProduct = document.getElementsByClassName('footer')[0];



    heroWrapper.style.display = "none"

    shopWrapper.style.display = "none"

    productCards.style.display = "block"

    footerProduct.classList.add('product')




    returnButtonGen()

    updateCartCounter()

    updateFavCounter()

    ready()


}





function returnButtonGen() {


    var productCards = document.getElementsByClassName('product__cards')[0]

    var productCard = productCards.getElementsByClassName('product__card')[0]

    var returnButton = productCard.getElementsByClassName('product__card--return')[0]

    returnButton.addEventListener('click', returnToMain)

}





function returnToMain(event) {

    var returnButtonClicked = event.target

    var productCard = returnButtonClicked.parentElement.remove()


    var heroWrapper = document.getElementsByClassName('hero')[0];

    var shopWrapper = document.getElementsByClassName('shop__wrapper')[0];

    var productCards = document.getElementsByClassName('product__cards')[0];

    var footerProduct = document.getElementsByClassName('footer')[0];



    heroWrapper.style.display = "block"

    shopWrapper.style.display = "block"

    productCards.style.display = "none"

    footerProduct.classList.remove('product')


    ready()


}





function filterFav() {

    
    var checkBox = document.getElementsByClassName('check__fav')[0]

    var shopCards = document.getElementsByClassName('shop__cards')[0]

    var shopCardHide = shopCards.getElementsByClassName('not__show')


    for(var i = 0; i < shopCardHide.length; i++) {

        if(checkBox.checked) {

            shopCardHide[i].style.display = "none"
        
        }

        else {

            shopCardHide[i].style.display = ""

        }

    }


}




function filterCard(event) {



    searchInputChanged = event.target

    filter = searchInputChanged.value.toLowerCase()

    var shopCards = document.getElementsByClassName('shop__cards')[0]

    var shopCard = shopCards.getElementsByClassName('shop__card')


    


    for(var i = 0; i < shopCard.length; i++) {

        var cardName = shopCard[i].getElementsByClassName('shop__card--name')[0]

        var name = cardName.textContent.toLowerCase()

        if(name.includes(filter)) {

            shopCard[i].style.display = ""

        }

        else {

            shopCard[i].style.display = "none"

        }

    }


}





function purchaseConcluded() {


    var cartTotal = document.getElementsByClassName('cart__total')[0]

    var cartContainer = document.getElementsByClassName('cart__items')[0]

    var cartItems = cartContainer.getElementsByClassName('cart__item')

    var total = 0

    let purchaseSummary = [

        {
            "Preço total da compra": cartTotal.getElementsByClassName('cart__total--price')[0].innerText,
        }

    ]


    for (var i = 0; i < cartItems.length; i++) {

        var cartItem = cartItems[i]

        var quantityElement = cartItem.getElementsByClassName('item--quantity')[0]

        var priceElement = cartItem.getElementsByClassName('cart__item--price')[0]

        var price = parseFloat(priceElement.innerText.replace('R$ ', ''))

        var quantity = quantityElement.value

        total = total + (price * quantity)

        let itemSummary = 
            {

                "A. Produto": cartItem.getElementsByClassName('cart__item--name')[0].innerText,
                "B. Preço unitário": cartItem.getElementsByClassName('cart__item--price')[0].innerText,
                "C. Quantidade comprada": cartItem.getElementsByClassName('item--quantity')[0].value,
                "D. Preço total do item": 'R$ ' + total.toFixed(2)

            }

        purchaseSummary.push(itemSummary)

        total = 0

    }



    localStorage.setItem('Resumo da compra', JSON.stringify(purchaseSummary))  







    while (cartContainer.hasChildNodes()) {

        cartContainer.removeChild(cartContainer.firstChild)

        updateCartCounter()

    }




    alert('Obrigado pela compra!')

}