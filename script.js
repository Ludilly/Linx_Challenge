let pageNumberApi = 2;

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({
  image, name, description, oldPrice, price, installmentsCount, installmentsValue,
}) {
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.className = 'product-description';
  section.className = 'item';
  section.appendChild(createProductImageElement(image));
  div.appendChild(createCustomElement('span', 'item__name', name));
  div.appendChild(createCustomElement('span', 'item__description', description));
  div.appendChild(createCustomElement('span', 'item__oldPrice', `de: R$${oldPrice}`));
  div.appendChild(createCustomElement('strong', 'item__price', `POR: R$${price}`));
  div.appendChild(createCustomElement('span', 'item__nstallmentsCount', `ou ${installmentsCount}x de R$${installmentsValue}`));
  const createBtn = createCustomElement(
    'button',
    'item__add',
    'Comprar',
  );
  div.appendChild(createBtn);
  section.appendChild(div);
  return section;
}

function fetchApi(page) {
  fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
    .then((data) => data.json())
    .then((response) => response.products.map((product) => {
      const dataApi = createProductItemElement({
        image: product.image,
        name: product.name,
        description: product.description,
        oldPrice: product.oldPrice,
        price: product.price,
        installmentsCount: product.installments.count,
        installmentsValue: product.installments.value,
      });
      return document.getElementById('api').appendChild(dataApi);
    }));
}

function moreProductsButton() {
  document.getElementById('more-products-btn').addEventListener('click', () => fetchApi(pageNumberApi));
  pageNumberApi += 1;
}

function validationForm() {
  const friendEmail = document.getElementById('friend-email');

  const reGex = /\S+@\S+\.\S+/;

  if (reGex.test(friendEmail.value)) {
    alert('Cadastro realizado com sucesso!');
  } else {
    alert('Email não é válido!');
  }
  friendEmail.value = '';
}

function onClickFormButton() {
  const submitBtn = document.getElementById('newsletter-button');
  const newsletter = document.getElementById('footer-submit');
  submitBtn.addEventListener('click', validationForm);
  newsletter.addEventListener('click', validationForm);
}

window.onload = function onload() {
  fetchApi();
  moreProductsButton();
  onClickFormButton();
};
