# :chart_with_upwards_trend: CRUD_BusinessIntelligence
 
Repositório do front-end de um projeto CRUD, uma aplicação muito simples mas com a idéia de ser completa.

A aplicação é capaz de manipular carros para venda (Create, Read, Update, Delete) e também manipular as vendas desses carros (Create, Read, Update, Delete). Além de possuir um dashboard com o resumo dos dados, feito em PowerBI.

## :bulb: Esse CRUD utiliza duas API's:

API de recursos, feita em Node e SQL <br>
&nbsp; &nbsp; &nbsp; &nbsp; :point_right: REPOSITÓRIO: [https://github.com/HebertMoraes/API-NODE.JS-MVC-com-SQL-Server]

API de Autenticação de usuário, feita em Node e utilizando um fake database em formato json. <br>
&nbsp; &nbsp; &nbsp; &nbsp; :point_right: REPOSITÓRIO: [https://github.com/HebertMoraes/AuthenticationServer-Basic]
      
## :bar_chart: Sobre o Dashboard dos dados:

A página para ver o dashboard dos dados, fica no botão "Ver Dashboard" no ícone do usuário, onde é mostrado um iframe embed de um arquivo do PowerBI. E por se tratar de um recurso oficial da miscrosoft, é necessário logar com uma conta da Microsoft real para poder visualizar o dashboard. Nele, é apresentado um resumo sobre todas as vendas e os carros para vender, de modo geral, o faturamento total. O arquivo pode ser encontrado em uma pasta chamada "Arquivo_PowerBI" na pasta raiz deste repositório.

Porém este arquivo do PowerBI também obtém os dados da API de recursos, e como todas as requisições da API de recursos está com uma proteção de token JWT, é sempre necessário passar um Bearer token no header de authorization, coisa que esse front-end está fazendo, e então para fazer isso no arquivo do Power BI siga estes passos: <br> <br>
&nbsp; &nbsp; &nbsp; 1️⃣ Obter dados de Web; <br>
&nbsp; &nbsp; &nbsp; 2️⃣ Opções avançadas; <br>
&nbsp; &nbsp; &nbsp; 3️⃣ Digite a sua URL da endpoint; <br>
&nbsp; &nbsp; &nbsp; 4️⃣ Na opção "parâmetro de cabeçalho", insira o campo "Authorization" com valor "Bearer + SEU_TOKEN_JWT". <br>
  
Depois que foi feita toda a alteração desejada no arquivo do PowerBI, é necessário publicá-lo, um recurso da microsoft. Para fazer isto, vá na aba "Arquivo" dentro do PowerBI desktop, selecione "Publicar" e siga os passos. E note que será necessário alterar a tag HTML do iframe do dashboard, para mostrar o dashboard correto. Dentro das opções de exportar dashboard no PowerBI web que será aberto, pegue o código de embed correto e substitua a tag. A tag HTML do dashboard embed fica em: <br> 
`src\app\components\dashboard-page\dashboard-background-page\dashboard-background-page.component.html` linha 15.
