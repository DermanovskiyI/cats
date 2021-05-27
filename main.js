//HAMBURGER

const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger__menu');
const popup = document.getElementById('popup');
const body = document.querySelector('body');

hamburger.addEventListener('click', function (e) {
    if (e.target.classList.contains('hamburger__menu') || e.target.classList.contains('hamburger')) {
        hamburgerMenu.classList.toggle('hamburger__menu--animated');
        popup.classList.toggle('popup--active');
        body.classList.toggle('body--without-scroll');
    }
})
//---------------------------------------------------------

/// sorting by price


let cats = [
    {
        id: 1,
        title: 'Кот полосатый',
        color: 'Коричневый окрас',
        age: '2 мес.',
        paws: 4,
        price: '30 000 руб.',
        photo: '/src/assets/images/cat1.png',
        discount: true,
        sold: false
    },
    {
        id: 2,
        title: 'Кот полосатый',
        color: 'Коричневый окрас',
        age: '4 мес.',
        paws: 4,
        price: '40 000 руб.',
        photo: '/src/assets/images/cat2.png',
        discount: false,
        sold: false
    },
    {
        id: 3,
        title: 'Кот полосатый',
        color: 'Коричневый окрас',
        age: '6 мес.',
        paws: 4,
        price: '20 000 руб.',
        photo: '/src/assets/images/cat3.png',
        discount: false,
        sold: false
    },
    {
        id: 4,
        title: 'Кот полосатый',
        color: 'Коричневый окрас',
        age: '2 мес.',
        paws: 4,
        price: '25 000 руб.',
        photo: '/src/assets/images/cat1.png',
        discount: false,
        sold: false
    },
    {
        id: 5,
        title: 'Кот полосатый',
        color: 'Коричневый окрас',
        age: '3 мес.',
        paws: 4,
        price: '30 000 руб.',
        photo: '/src/assets/images/cat2.png',
        discount: true,
        sold: false,
    },
    {
        id: 6,
        title: 'Кот полосатый',
        color: 'Коричневый окрас',
        age: '1 мес.',
        paws: 4,
        price: '10 000 руб.',
        photo: 'src/assets/images/cat3.png',
        discount: false,
        sold: true
    }
]

const catsList = document.querySelector('.cats__list');
const priceBtn = document.getElementById('price-btn');
const priceArrow = document.getElementById('price-arrow');
const ageBtn = document.getElementById('age-btn');
const ageArrow = document.getElementById('age-arrow');

function renderCats(cats) {
    cats.forEach((item) => {

        const catsItem = document.createElement('li');
        catsItem.classList.add('cats__item');

        const cat = document.createElement('div');
        cat.classList.add('cat');
        catsItem.appendChild(cat)

        const catImg = document.createElement('div');
        catImg.classList.add('cat__img');
        cat.appendChild(catImg);

        const catImgPic = document.createElement('img');
        catImgPic.classList.add('cat__img-pic');
        catImgPic.setAttribute('alt', 'cat');
        catImg.appendChild(catImgPic);


        const catFavorite = document.createElement('div');
        catFavorite.classList.add('cat__img-favorite');
        catImg.appendChild(catFavorite)

        const likeIcon = document.createElement('img');
        likeIcon.setAttribute('src', './src/assets/images/like.png');
        likeIcon.classList.add('cat__img-favorite-pic');
        catFavorite.appendChild(likeIcon);

        const catSale = document.createElement('div');
        catSale.classList.add('cat__sale');

        const catSaleText = document.createElement('div');
        catSaleText.classList.add('cat__sale-text');
        catSale.appendChild(catSaleText);

        const catDesc = document.createElement('div');
        catDesc.classList.add('cat__desc');
        cat.appendChild(catDesc);

        const catTitle = document.createElement('div');
        catTitle.classList.add('cat__title');
        catDesc.appendChild(catTitle);

        const catTitleText = document.createElement('p')
        catTitleText.classList.add('cat__title-text');
        catTitle.appendChild(catTitleText);

        const catTable = document.createElement('div');
        catTable.classList.add('cat__table');
        catDesc.appendChild(catTable);

        const catColor = document.createElement('div');
        catColor.classList.add('cat__color');
        catTable.appendChild(catColor);

        const catAge = document.createElement('div');
        catAge.classList.add('cat__age');
        catTable.appendChild(catAge);

        const catAgeText = document.createElement('div');
        catAgeText.classList.add('cat__age-text');
        catAge.appendChild(catAgeText);

        const catAgeHeader = document.createElement('div');
        catAgeHeader.classList.add('cat__age-header');
        catAgeHeader.textContent = 'Возраст';
        catAge.appendChild(catAgeHeader);

        const catPaws = document.createElement('div');
        catPaws.classList.add('cat__paws');
        catTable.appendChild(catPaws);

        const catPawsText = document.createElement('div');
        catPawsText.classList.add('cat__paws-text');
        catPaws.appendChild(catPawsText);

        const catPawsHeader = document.createElement('div');
        catPawsHeader.classList.add('cat__paws-header');
        catPawsHeader.textContent = 'Кол-во лап';
        catPaws.appendChild(catPawsHeader);

        const catPrice = document.createElement('div');
        catPrice.classList.add('cat__price');
        catDesc.appendChild(catPrice);

        const catBuy = document.createElement('div');
        catBuy.classList.add('cat__buy');
        cat.appendChild(catBuy);

        const catBtn = document.createElement('button');
        catBtn.classList.add('btn');
        catBtn.setAttribute('type', 'button');
        catBuy.appendChild(catBtn);

        catTitleText.textContent = item.title;
        catColor.textContent = item.color;
        catAgeText.textContent = item.age;
        catPawsText.textContent = item.paws;
        catPrice.textContent = item.price;
        catImgPic.setAttribute('src', item.photo);
        if (item.discount) {
            catImg.appendChild(catSale);
            catSaleText.textContent = '-40%';
        }
        if (item.sold) {
            catBtn.classList.add('btn--sold');
            catBtn.textContent = 'Продан';
        } else {
            catBtn.textContent = 'Купить';
        }
        catsList.appendChild(catsItem);
    })

}

renderCats(cats);

function sortingFromCheap() {

    cats.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));

        return priceA - priceB;


    })
    return cats

}

function sortingFromExpensive() {

    cats.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));

        return priceB - priceA;


    })
    return cats

}

function clearList(catItems) {
    for (let i = 0; i < catItems.length; i++) {
        catsList.removeChild(catItems[i])
    }
}

priceBtn.addEventListener('click', () => {
    const catItems = document.querySelectorAll('.cats__item');
    clearList(catItems);
    if (priceArrow.classList.contains('arrow--up')) {
        cats = sortingFromExpensive()
        priceArrow.classList.remove('arrow--up');
    } else {
        cats = sortingFromCheap();
        priceArrow.classList.add('arrow--up');
    }
    renderCats(cats);
    ageArrow.classList.remove('arrow--up');
})

/// sort by age

function sortingFromYounger() {
    cats.sort((a, b) => {
        const ageA = parseInt(a.age.replace(/[^0-9]/g, ''));
        const ageB = parseInt(b.age.replace(/[^0-9]/g, ''));

        return ageA - ageB;
    })
    return cats;
}
function sortingFromOlder() {
    cats.sort((a, b) => {
        const ageA = parseInt(a.age.replace(/[^0-9]/g, ''));
        const ageB = parseInt(b.age.replace(/[^0-9]/g, ''));

        return ageB - ageA;
    })
    return cats;
}

ageBtn.addEventListener('click', () => {
    const catItems = document.querySelectorAll('.cats__item');
    clearList(catItems);
    if (ageArrow.classList.contains('arrow--up')) {
        cats = sortingFromOlder()
        ageArrow.classList.remove('arrow--up');
    } else {
        cats = sortingFromYounger();
        ageArrow.classList.add('arrow--up');
    }
    renderCats(cats);
    priceArrow.classList.remove('arrow--up');
})

/// scrolling

const scrollBtn = document.getElementById('scroll-btn');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

})
document.addEventListener('scroll', () => {
    const currentCoords = window.pageYOffset;
    const coordWhileShowBtn = 100;
    if (currentCoords > coordWhileShowBtn) {
        scrollBtn.classList.remove('scroll--hidden');
    } else {
        scrollBtn.classList.add('scroll--hidden');
    }

})

/// validation

const subscriptionForm = document.querySelector('.form');
const btnSubmit = document.querySelector('.btn--form')
const input = document.querySelector('.form__input');


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    function validateForm(form) {
        let valid = true;
        if (!validateField(form.elements.email)) {
            valid = false;
        }
        return valid;
    }

    function validateField(field) {
        field.previousElementSibling.textContent = field.validationMessage;
        return field.checkValidity();
    }

    if (validateForm(subscriptionForm)) {
        alert('Подписка оформлена');
        subscriptionForm.reset();
        input.classList.remove('form__input--errored');
    } else {
        input.classList.add('form__input--errored');
    }
})


/// show modal

const likeBtn = document.querySelector('.cat__img-favorite');

// likeBtn.addEventListener('click', () => {
//     openOverLay();
// })
