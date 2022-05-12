# Back-end

API realizada utilizando NodeJS, Express e MongoDB

## Rotas
### Companies:

[GET] /companies <br>
Retorna todas as empresas do sistema<br>

[POST] /companies <br>
Adiciona uma empresa no sistema<br>
Body example:
```
{
    "name": "Company teste",
    "email": "company@email.com",
    "cnpj": "56456465465465465"
}
```
<br>

[GET] /companies/{companyId} <br>
Retorna a empresa referente ao companyId informado<br>

[DEL] /companies/{companyId} <br>
Delete a empresa referente ao companyId informado<br>

[PUT] /companies/{companyId} <br>
Altera a empresa referente ao companyId informado<br>
Body example:
```
{
    "name": "Company teste",
    "email": "company@email.com",
    "cnpj": "56456465465465465"
}
```
<br>

[GET] /companies/{companyId}/stats <br>
Retorna a empresa, suas unidades e seus bens referente ao companyId informado<br>

<br>
### Users:

[GET] /users <br>
Retorna todas os usuários do sistema<br>
Query string parameters:
```
companyId
```

[POST] /companies/{companyId}/users <br>
Adiciona um usuário no sistema<br>
Body example:
```
{
    "name": "Letíciaaa",
    "email": "leticia@email.com",
    "cpf": "44444444444"
}
```
<br>

[GET] /users/{userId} <br>
Retorna o usuário referente ao userId informado<br>

[DEL] /users/{userId} <br>
Delete o usuário referente ao userId informado<br>

[PUT] /companies/{companyId}/users/{userId} <br>
Altera o usuário referente ao userId informado<br>
Body example:
```
{
    "name": "Letíciaaa",
    "email": "leticia@email.com",
    "cpf": "44444444444"
}
```
<br>

<br>
### Units:

[GET] /units <br>
Retorna todas as unidades do sistema<br>
Query string parameters:
```
companyId
```

[POST] /companies/{companyId}/units <br>
Adiciona uma unidade no sistema<br>
Body example:
```
{
    "name": "Unit de teste 2",
    "description": "Descrição unit de teste"
}
```
<br>

[GET] /units/{unitId} <br>
Retorna a unidade referente ao unitId informado<br>

[DEL] /units/{unitId} <br>
Delete a unidade referente ao unitId informado<br>

[PUT] /companies/{companyId}/units/{unitId} <br>
Altera a unidade referente ao unitId informado<br>
Body example:
```
{
    "name": "Unit de teste 2",
    "description": "Descrição unit de teste"
}
```
<br>


<br>
### Assets:

[GET] /assets <br>
Retorna todas os bens do sistema<br>
Query string parameters:
```
unitId
```

[POST] /units/{unitId}/assets <br>
Adiciona um bem no sistema<br>
Body example:
```
{
    "name": "Asset de teste",
    "description": "Descrição do asset de teste",
    "image": "https://example.com",
    "model": "c4621",
    "owner": "Letícia",
    "status": "Running",
    "healthLevel": 101
}
```
<br>

[GET] /assets/{assetId} <br>
Retorna o bem referente ao assetId informado<br>

[DEL] /assets/{assetId} <br>
Delete o bem referente ao assetId informado<br>

[PUT] /units/{unitId}/assets/{assetId} <br>
Altera o bem referente ao assetId informado<br>
Body example:
```
{
    "name": "Asset de teste",
    "description": "Descrição do asset de teste",
    "image": "https://example.com",
    "model": "c4621",
    "owner": "Letícia",
    "status": "Running",
    "healthLevel": 101
}
```
<br>

