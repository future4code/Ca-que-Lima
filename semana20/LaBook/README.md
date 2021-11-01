# LaBook

## ESTRUTURA DE DADOS  
  
* ## Usuários
  * id
  * name
  * email
  * password 

* ## Posts 
  * id
  * picture
  * creationDate
  * type: `"normal" || "evento"`
  * userId
   
---

## CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE labook_users(
  id VARCHAR(50) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```
```sql
CREATE TABLE labook_posts(
  id VARCHAR(50) NOT NULL PRIMARY KEY,
  picture VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  creation_date DATE NOT NULL,
  type ENUM("normal", "evento"),
  user_id VARCHAR(50) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES labook_users(id)
);
```
---

## ENDPOINTS 

* ## Cadastrar usuário
  * Método: POST
  * Path: `/signup`
  * Body:
    * name (obrigatório)
    * email (obrigatório)
    * password (obrigatório)
  * Body de resposta:
    * message
    * token

* ## Login Usuário
  * Método: POST
  * Path: `/login`
  * Body:
    * email (obrigatório)
    * password (obrigatório)
  * Body de resposta:
    * token

* ## Criar Post
  * Método: POST
  * Path: `/post`
  * headers:
    * authorization: token
  * Body:
    * picture (obrigatório)
    * creationDate (obrigatório)
    * type: `"normal" || "evento"` (obrigatório)


* ## Pegar post pelo id
  * Método: GET
  * Path: `/post/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * picture
    * description
    * creationDate
    * type
    * userId

* ## Pegar tarefa pelo id
  * Método: GET
  * Path: `/task/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * picture 
    * description
    * creationDate (formato `DD-MM-YYYY`)
    * type
    * userId