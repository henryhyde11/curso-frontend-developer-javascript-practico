const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carAside = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navbarEmail.addEventListener('click', toggleDesktopEmail);
burgerMenu.addEventListener('click', toggleBurgerMenu);
carAside.addEventListener('click', toggleCarAside);

function toggleDesktopEmail(){
    const asideOpened = !aside.classList.contains('inactive');

    if(asideOpened){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleBurgerMenu(){
    const asideOpened = !aside.classList.contains('inactive');

    if(asideOpened){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarAside(){
    const mobileMenuOpened = !mobileMenu.classList.contains('inactive');
    const desktopMenuOpened = !desktopMenu.classList.contains('inactive');

    if(mobileMenuOpened){
        mobileMenu.classList.add('inactive')
    }

    if(desktopMenuOpened){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}



let productsList = [];

productsList.push({
    name: 'Bike',
    price: 120.000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productsList.push({
    name: 'Bike',
    price: 120.000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productsList.push({
    name: 'Bike',
    price: 120.000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productsList.push({
    name: 'Bike',
    price: 120.000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productsList.push({
    name: 'Bike',
    price: 120.000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productsList.push({
    name: 'Bike',
    price: 120.000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/* 
<div class="product-card">

    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">

    <div class="product-info">

        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>

        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>

    </div>

</div> 
*/

for (product of productsList){

    // div img

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);


    //div 

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');


    // div p p

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName)


    // figure img

    const productFigure = document.createElement('figure');

    const productIcon = document.createElement('img');
    productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productIcon);


    ///
    productInfo.append(productInfoDiv, productFigure);


    ///
    productCard.append(img, productInfo);


    /// \\\
    cardsContainer.appendChild(productCard);
}

