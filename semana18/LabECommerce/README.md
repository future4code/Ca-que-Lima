## Lab E-Commerce:

Durante esta semana, vimos um novo paradigma de programação, a Orientação a Objetos, e como ela nos ajuda a estruturar nosso código, e manter tudo tendo uma mesma "cara". Isso é perfeito para as novas necessidades do LabECommerce. Sendo assim, te passaram uma lista do que o projeto precisa ter:

**Usuário**

O projeto precisa ter uma **classe** `User`, que receba o nome, o e-mail, a idade e gere um **identificador único** (id).

**Produto**

O projeto precisa ter uma **classe** `Product`, que receba o **identificador único** do produto, seu nome, sua descrição e seu preço. Essa classe serve para guardar as camisetas e lembrancinhas da loja.

**Passagens**

Como nova funcionalidade do projeto do front-end do LabECommerce, o serviço da empresa também vende **viagens**! Portanto, agora o projeto precisa ter uma nova **classe**, chamada `Ticket`, que receba o **identificador único** do produto, seu nome, sua descrição e seu preço, e também a **origem** e o **destino** dessa viagem. **Para criar esta classe é obrigatório que ela também seja uma classe `Product`. Você deve fazer isto utilizando herança ou implementando interfaces.**
As funcionalidades básicas são:

&nbsp;

→ Criar usuário;

**POST**

Link Heroku virá depois "/users"
    
Body:
    
    {
        "name": "Caíque",
        "email": "caique@email.com",
        "age": 27
    }
    
#### Para inserir o usuário, deve-se passar o body onde todos os items são obrigatórios.
&nbsp;
---

→ Criar produto;

**POST**

Link Heroku virá depois "/products"
    
Body:
    
    {
        "name": "Camiseta",
        "description": "Camiseta manga longa cinza",
        "price": 60
    }

#### Para inserir o produto, deve-se passar o body onde todos os items são obrigatórios.
&nbsp;
---

→ Criar viagem;

**POST**

Link Heroku virá depois "/tickets"
    
Body:
    
    {
        "name": "Jalapão Eletrizante",
        "description": "Uma semana de aventuras no Jalapão com tudo incluso! 12 passeios para ficar na memória para sempre!",
        "price": 6000,
        "origin": "São Paulo",
        "destination": "Jalapão"
    }

#### Para inserir uma viagem, deve-se passar o body onde todos os items são obrigatórios.
&nbsp;
---

→ Criar uma compra;

**POST**

Link Heroku virá depois "/purchases"

Body:

    {
        "userId": "string",
        "prodductId: "string",
        "quantity": 2
    }

#### Para criar uma compra, deve-se passar o body onde todos os items são obrigatórios. Quantidade deve ser maior que zero.
&nbsp;
---

→ Listar todos os usuários;

**GET**

Link Heroku virá depois "/users"


&nbsp;
---

→ Listar todos os produtos;

**GET**

Link Heroku virá depois "/products"

&nbsp;
---

→ Pegar todas as viagens;

**GET**

Link Heroku virá depois "/tickets"

&nbsp;
---

→ Pegar todas as compras;

**GET**

Link Heroku virá depois "/purchases"

&nbsp;
---
