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
  section.className = 'item';
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__name', name));
  section.appendChild(createCustomElement('span', 'item__description', description));
  section.appendChild(createCustomElement('span', 'item__oldPrice', `de: R$${oldPrice}`));
  section.appendChild(createCustomElement('strong', 'item__price', `POR: R$${price}`));
  section.appendChild(createCustomElement('span', 'item__nstallmentsCount', `ou ${installmentsCount}x de R$${installmentsValue}`));
  const createBtn = createCustomElement(
    'button',
    'item__add',
    'Comprar',
  );
  section.appendChild(createBtn);
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
  const cpf = document.getElementById('cpf');
  const email = document.getElementById('email');

  const defaultEmail = 'tryber@test.com';
  const defaultcpf = '12345678900';

  if (cpf.value === defaultcpf && email.value === defaultEmail) {
    alert('Cadastro realizado com sucesso!');
  } else {
    alert('Email ou CPF inválidos');
  }

  cpf.value = '';
  email.value = '';
}

function onClickFormButton() {
  const loginBtn = document.getElementById('newsletter-button');
  loginBtn.addEventListener('click', validationForm);
}

window.onload = function onload() {
  fetchApi();
  moreProductsButton();
  onClickFormButton();
};
