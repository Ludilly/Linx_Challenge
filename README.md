# Linx_Challenge
Repositório sobre o desafio técnico da Linx

Esse projeto foi produzido por mim, Luiza Carvalho Dilly D'Angelo como um desafio técnico para a Linx. O principal objetivo foi replicar layouts compartilhados através do link:https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614

---

## Como utilizar a aplicação?

Para verificar a aplicação, foi feito o deploy dos arquivos no Netlify, você pode acessa-los através dos links:
https://quirky-leavitt-c19c4c.netlify.app/

https://quirky-leavitt-c19c4c.netlify.app/email

---

## Setup do projeto

A landing page foi criada através de arquivos index.html, contendo a estrutura básica da página, um arquivo CSS, contendo o design e tornando o HTML responsivo para mobile e, por fim, um arquivo em Javascript, contendo a lógica e criando estruturas HTML de maneira dinâmica, fazendo a requisição da API e a validação do email no newsletter, feito com regEx.

Além disso, foi criado também um arquivo HTML chamado email.html, contendo a tela de Email, um arquivo CSS chamado email.css contendo o design e suas dimensões e um arquivo JS chamado email.js, onde a lógica de requisição da API foi adaptada para a exibição de dois cards.

Por fim, temos uma página responsiva, contendo um design e funcional, onde há exibição de 8 cards de produtos e quando botão é clicado, exibe outros 8 cards de produtos. Além disso, há validação de email no newsletter, se a pessoa colocar o formato de email válido, será exibido um alert de sucesso, caso não, um alert de formato inválido. Quando diminuído as dimensões da página para mobile, a requisição da api exibe dois cards e a funcionalidade do botão continua a mesma. Já na tela do email, a lógica foi adaptada para renderizar dois cards na tela, isso foi possível graças a um slice() feito durante a requisição da API.


---
